Feature: Manage sensors
        Background: users and sensors already exist
            Given Max (admin), Marika (user) and Bob (user) exist
              And the sensor with the serial number 12345 exist and is assigned to Marika
              And the sensor with the serial number CCC exist and is assigned to Marika
              And the sensor with the serial number BBB exist and is assigned to Bob
              And the sensor with the serial number AAA exist and is not assigned to any user

        Scenario: success - get my sensors (user)
            Given Marika is logged in
             When she tries to get the data of her sensors
             Then she gets a response with the status code 200 and an array with 2 sensors

        Scenario: success - get sensors (admin)
            Given Max is logged in
             When He tries to get the data of his sensors
             Then He gets a response with the status code 200 and an array with 4 sensors

        Scenario: success - get sensor (Bob)
            Given Bob is logged in
             When He tries to get his sensor data
             Then He gets a response with the status code 200 and an array with 1 sensor
