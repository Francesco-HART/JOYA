import 'package:flutter/cupertino.dart';
import '../../services/api/wikipedia/wiki-plant.dart';

class WikiPlantRepository {
  final ServiceWikipediaPlant serviceWikipediaPlant;
  WikiPlantRepository({required this.serviceWikipediaPlant});
  Future<String?> fetchOneDdescriptionByTitle(String title) async {
    try {
      return await this
          .serviceWikipediaPlant
          .fetchOneDdescriptionByTitle(title);
    } on Exception {
      rethrow;
    } on Error catch (error) {
      debugPrint(error.toString());
    }
  }
}
