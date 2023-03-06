import 'package:bloc/bloc.dart';
import 'package:equatable/equatable.dart';
import 'package:flutter/material.dart';
import 'package:joya/data/dto/sensor.dart';
import 'package:joya/data/repositories/joya/plant.dart';
import 'package:joya/data/repositories/joya/sensor.dart';
import 'package:qr_code_scanner/qr_code_scanner.dart';
import '../../../data/models/plant.dart';
import '../../../data/models/sensor.dart';
part 'scan_state.dart';

class ScanCubit extends Cubit<ScanState> {
  final SensorRepository sensorRepository;
  final PlantRepository plantRepository;
  bool isSubmit = false;
  final GlobalKey qrKey = GlobalKey(debugLabel: 'QR');
  Barcode? result;
  QRViewController? controller;

  List<Plant> plants = [];
  String name = "";
  String plantID = "";
  String location = "";
  String serialNumber = "";
  Sensor? sensor;
  ScanCubit({required this.sensorRepository, required this.plantRepository})
      : super(ScanInitial());

  setName(String value) {
    name = value;
  }

  setPlantID(String value) {
    plantID = value;
  }

  setLocation(String value) {
    location = value;
  }

  bool isValidPlantName() {
    return name.isNotEmpty && !isSubmit;
  }

  bool isValidPlantId() {
    return plantID.isNotEmpty && !isSubmit;
  }

  bool isValidLocation() {
    return location.isNotEmpty && !isSubmit;
  }

  void fetchPlants() async {
    try {
      emit(ScanLoading());
      var responseData = await plantRepository.fetch();
      if (responseData != null && responseData.isNotEmpty) {
        plants = responseData;
        return emit(ScanLoaded(plants: responseData));
      }
      emit(ScanLoaded(plants: []));
    } catch (err) {
      print("error on get sensors : $err");
      return emit(ScanLoaded(plants: []));
    }
  }

  List<DropdownMenuItem<String>> getPlantItemsDropDown() {
    return plants
        .map((e) =>
            DropdownMenuItem(key: Key(e.id), child: Text(e.name), value: e.id))
        .toList();
  }

  void onScanQRCode(QRViewController controller) {
    this.controller = controller;
    controller.scannedDataStream.listen((scanData) async {
      String result = scanData.code.toString();
      Sensor? sensorResponse;
      if (result != null) return emit(ScanSuccessScanQRCode(result: result));
      emit(ScanError(
          message: "Une erreur est survenue. Le QR Code n'est pas valide."));
    });
  }

  void fetchIfSensorExist(String serialNumberScanned) async {
    emit(ScanLoading());
    try {
      var sensorResponse = await this
          .sensorRepository
          .findOneBySerialNumber(serialNumberScanned);

      if (sensorResponse != null) {
        serialNumber = serialNumberScanned;
        var sensorName = sensorResponse.name;
        var sensorLocation = sensorResponse.location;
        var sensorPlantID = sensorResponse.plant?.id;

        name = sensorName != null ? sensorName : "";
        location = sensorLocation != null ? sensorLocation : "";
        plantID = sensorPlantID != null ? sensorPlantID : "";

        return emit(ScanSuccessScanQRCodeAndVerifySensor());
      }
    } catch (err) {
      return emit(ScanError(
          message: "Une erreur est survenue. Le QR Code n'est pas valide."));
    }
  }

  submit() async {
    try {
      emit(ScanLoadingSubmit());

      if (isValidPlantName() && isValidPlantId() && isValidLocation()) {
        isSubmit = true;

        var res = await sensorRepository.createSensor(CreateSensorDTO(
            name: name,
            serial_number: serialNumber,
            plant_id: plantID,
            location: location));
        if (res != null) return emit(ScanSuccessSubmit());
      }
      emit(ScanError(message: "Champs invalides."));
    } catch (error) {
      print("error on create sensors : $error");
      emit(ScanError(message: "Champs  invalides."));
    }
  }

  void disposeController() {
    this.controller?.dispose();
  }

  void setIsValidQrCodeData(bool newInstance) {}
}
