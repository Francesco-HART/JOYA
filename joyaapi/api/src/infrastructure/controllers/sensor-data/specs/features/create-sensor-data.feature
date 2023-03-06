Feature: Manage sensors
        Background: sensors and users already exist
            Given the sensor with the serial number 12345 already exists
              And the sensor with the serial number 1AAC already exists

        Scenario Outline: error - missing data in mandatory fields : (serial_number, temperature, humidity, luminosity, soil_fertillity )
            Given I'm trying to create a new sensor data
             When I fill in a serial_number : <serial_number>
             When I fill in a temperature : <temperature>
             When I fill in a humidity : <humidity>
             When I fill in a luminosity : <luminosity>
             When I fill in a soil_fertility : <soil_fertillity>
             Then The sensor data is not created
        Examples:
                  | serial_number | temperature | humidity | luminosity | soil_fertillity |
                  | 1AAC          |             | 100      | 100        |                 |
               #    | 1AAC          | 370         |          | 0          | 100             |
               #    | 12345         | 1           | 0        |            | 100             |
               #    | 1AAC          | 100         | 100      | 0          |                 |

        Scenario Outline: error - wrong data
            Given I'm trying to create a new sensor data
             When I fill in a serial_number : <serial_number>
             When I fill in a temperature : <temperature>
             When I fill in a humidity : <humidity>
             When I fill in a luminosity : <luminosity>
             When I fill in a soil_fertility : <soil_fertillity>
             Then The sensor data is not created
        Examples:
                  | serial_number | temperature | humidity | luminosity | soil_fertillity |
                  | -1            | -1          | 25       | 100        | 10              |
               #    | 12345         | 9999999999  | 100      | 150        | 100             |
               #    | 1AAC          | 450         | -8000    | 100        | 100             |
               #    | 1AAC          | 370         | 45       | 150000000  | 100             |
               #    | 1AAC          | 100         | 100      | 100        | -9              |

        Scenario Outline: success - the sensor data is created : (serial_number, temperature, humidity, luminosity, soil_fertillity )
            Given I'm trying to create a new sensor data
             When I fill in a serial_number : <serial_number>
             When I fill in a temperature : <temperature>
             When I fill in a humidity : <humidity>
             When I fill in a luminosity : <luminosity>
             When I fill in a soil_fertility : <soil_fertillity>
             Then The sensor data is not created
        Examples:
                  | serial_number | temperature | humidity | luminosity | soil_fertillity |
                  | 12345         | 1           | 0        | 100        | 0               |
               #    | 1AAC          | 450         | 0        | 100        | 100             |
               #    | 1AAC          | 370         | 100      | 0          | 100             |
               #    | 1AAC          | 100         | 100      | 0          | 0               |
               #    | 1AAC          | 100         | 100      | 100        | 100             |

        Scenario: error - the serial number doesn't exist
            Given I'm trying to create a new sensor data
             When I fill in a serial_number : "AAAA"
             When I fill in a temperature : "100"
             When I fill in a humidity : "100"
             When I fill in a luminosity : "100"
             When I fill in a soil_fertillity : "100"
             Then The sensor data is not created
