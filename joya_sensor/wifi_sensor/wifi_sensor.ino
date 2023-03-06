#include <Arduino.h>

#include <ESP8266WiFi.h>
#include <ESP8266WiFiMulti.h>

#include <ESP8266HTTPClient.h>

#include <WiFiClient.h>

ESP8266WiFiMulti WiFiMulti;

void setup() {

  Serial.begin(115200);
  // Serial.setDebugOutput(true);

  for (uint8_t t = 4; t > 0; t--) {
    Serial.printf("[SETUP] WAIT %d...\n", t);
    Serial.flush();
    delay(1000);
  }

  WiFi.mode(WIFI_STA);
  WiFiMulti.addAP("Resxt Laptop", "francesco");
}

void loop() {
  // wait for WiFi connection
  if ((WiFiMulti.run() == WL_CONNECTED)) {

    WiFiClient client;

    HTTPClient http;

    Serial.print("[HTTP] begin...\n");
    if (http.begin(client, "http://10.42.0.186:8000")) {  // HTTP

      Serial.print("[HTTP] GET...\n");
      // start connection and send HTTP header
      // int httpCode = http.GET();

      // Specify content-type header
      http.addHeader("Content-Type", "application/json");

      // Send HTTP POST request
      String httpRequestData = String(ESP.getChipId());
      int httpResponseCode = http.POST("{\"api_key\":"+httpRequestData+"}");

      Serial.println(WiFi.macAddress());


      http.end();
    } else {
      Serial.printf("[HTTP} Unable to connect\n");
    }
  }
  delay(10000);
}
