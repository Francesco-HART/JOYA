import 'package:shared_preferences/shared_preferences.dart';

class LocalStorageService {
  static const cookies = 'access_token';

  static const authuser = 'auth_user';

  Future<String?> getString(String key) async {
    final prefs = await SharedPreferences.getInstance();
    return prefs.getString(key);
  }

  Future<void> setString(String key, String value) async {
    final prefs = await SharedPreferences.getInstance();
    await prefs.setString(key, value);
  }

  Future<void> removeString(String key, String value) async {
    final prefs = await SharedPreferences.getInstance();
    await prefs.remove(key);
  }
}
