Feature: Manage sensors
        Background: users and sensors already exist
            Given Robin (admin), Marika (user) and Bob (user) exist
              And the sensor with the serial number 12345 exist and is not assigned to any user
              And the sensor with the serial number 1AAC exists and is assigned to Marika

        Scenario: success - Link a new sensor to a user
            Given Bob is logged in
             When Bob tries to update the sensor : "12345"
              And he sets the location to home 1
              And he sets the name to Bybop
              And he sets the plant to Tulpe
             Then the sensor is created and assigned to Bob

        Scenario Outline: error - missing data in mandatory fields : (name, plant, location)
            Given Bob is logged in
             When I fill in a name : <name>
             When I fill in a plant : <plant>
             When I fill in a location : <location>
             Then The sensor is not created
        Examples:
                  | name  | plant  | location |
                  |       | XCTZ95 | cuisine  |
                  | Bybop |        | cuisine  |
                  | Bybop | Rose   |          |

        Scenario: error - the sensor is already associated with another user
            Given Bob is logged in
             When Bob tries to associate the sensor "1AAC" with his account
             Then Bob gets an error because the sensor is already associated with Marika
