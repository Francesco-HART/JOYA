# joya_sensor

## Running the project

- `sudo usermod -a -G tty $USER && sudo usermod -a -G dialout $USER`
- Make sure the coordinator is plugged in (bottom right USB port by default)
- `cd server && npm i && npm run dev`

## Start the project automatically on each boot

- `cd /etc/systemd/system/ && sudo touch joya-sensor.service && sudo nano joya-sensor.service`
- Copy and paste the content below in the text editor opened then write the file and exit (CTRL + O and enter to write and then CTRL + X to exit by default).  
Change the path after `--prefix` to the path where the project is located
```css
[Unit]
Description=Joya sensor

[Service]
ExecStart=/usr/bin/npm run dev --prefix /home/pi/Applications/joya_sensor/server
Restart=always
User=pi
Group=dialout

[Install]
WantedBy=multi-user.target
```

- `sudo systemctl daemon-reload`
- `systemctl start joya-sensor`
- `systemctl enable joya-sensor`

## Check the server output

### View the current console output
`journalctl -u joya-sensor.service --follow`

### View the console output on boot
`journalctl -u joya-sensor.service -b`
