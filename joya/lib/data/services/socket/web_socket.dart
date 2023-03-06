import 'dart:async';
import 'package:socket_io_client/socket_io_client.dart' as IO;
import 'package:socket_io_client/socket_io_client.dart';

class StreamSocketService {
  StreamSocketService();
  final _socketResponse = StreamController<String>();

  void Function(String) get addResponse => _socketResponse.sink.add;

  Stream<String> get getResponse => _socketResponse.stream;

  void dispose() {
    _socketResponse.close();
  }

//STEP2: Add this function in main function in main.dart file and add incoming data to the stream
  void connectAndListen(String serialNumber) {
    IO.Socket socket = IO.io('http://192.168.43.6:5000',
        OptionBuilder().setTransports(['websocket']).build());

    socket.on(
        "connect", (data) => print("socket is connected ${socket.connected}"));
    socket.emit('event', 'test');
    //When an event recieved from server, data is added to the stream
    socket.on(serialNumber, (data) => {res(data)});
    socket.onDisconnect((_) => print('disconnect'));
  }

  void res(dynamic data) {
    this.addResponse;
  }
}
