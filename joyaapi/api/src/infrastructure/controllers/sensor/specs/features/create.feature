Feature: Create sensors
        Background: users and sensors already exist
            Given Robin (admin) and Marika (user) exist
              And the sensor with the serial number 12345 exist and is not assigned to any user

        Scenario: error - create a new sensor data with an existing serial number
            Given Robin is logged in
             When creating a sensor with "12345" as serial number
             Then Robin gets an error and the sensor is not created

        Scenario: error - can't create sensor if the user is not an admin
            Given Marika (user) is logged in
             When Marika tries to create a sensor with serial number CCC3
             Then she gets an error with status code 403 and the sensor is not created

        Scenario: success - create sensor with serial number AABBCC
            Given Robin is logged in
             When he sets the serial number to AABBCC
             Then The sensor is created and the response's status code is 201
