Feature: Get sensors
        Background: sensors with data already exist
            Given The sensor with the serial number 12345 exist
              And data was associated with 12345 months ago

        Scenario: success - get last sensor data
            Given create data associated with 12345
             When Get sensor data
             Then Get the last data created
