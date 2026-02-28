# Python Bot Install Guide

## Basic Setup

- Install Raspberry Pi OS
- Update with <code>sudo apt upgrade && sudo apt update -y</code>
- Restart
- Install tar pit with <code>sudo apt install fail2ban</code>
- Enable ssh
```
sudo systemctl enable ssh
sudo systemctl start ssh
```
- Create ssh folder
```
mkdir -p ~/.ssh
chmod 700 ~/.ssh
```
- Create an ssh key with PuTTY Key Generator
    - Save public key as a one-liner string
        - Save it on the Pi with <code>nano ~/.ssh/authorized_keys</code> in the home of the installation user
        - Change permissions <code>chmod 600 ~/.ssh/authorized_keys</code>
        - This one-liner should start with <code>ssh-rsa</code> and end in the name/comment of the key
    - Save the private key for PuTTY with the extension .ppk
    - Test the connection with PuTTY
        - Session: Enter IP adress
        - Connection -> Data: Fill in "Auto-login username"
        - Connection -> SSH -> Auth -> Credentials: Select "Private key file for authorization"
        - Session: Name the session under "Saved Sessions" and "Save" it for later use
    - Change ssh configuration <code>sudo nano /etc/ssh/sshd_config</code>
    - Find and change these lines (ensure they aren't commented out with #):
```
    PasswordAuthentication no
    PubkeyAuthentication yes
    PermitRootLogin no
```
- Restart SSH: <code>sudo systemctl restart ssh</code>
    - Make sure the ssh service is running on startup
        sudo systemctl enable ssh
        sudo systemctl start ssh
    - Check the ssh service status with <code>sudo systemctl status ssh</code>

## Create Service and User for Python Bot

As an simple example, we use <code>pybot</code> to be the service user. This user is only permitted to run the bot and has no further priveledges.
We create and configure the service user with the install user which has sudo priveledges.

- <code>sudo adduser pybot</code>
- Use <code>sudo mkdir</code> to create the directories:
    - /home/pybot/app/
    - /home/pybot/app/versions/
        - Create a current version here for the python bot scripts, we use CURRENT as a placeholder here
    - /home/pybot/data/
    - /home/pybot/venv/
- Create a link from your current version to "live" <code>ln -sfn /home/pybot/app/versions/CURRENT /home/pybot/app/live</code>
    - This link is used to switch between versions during deployment in order to roll back quickly
- Copy all bot files into the CURRENT directory, copy database files into /home/pybot/data/
- Change owner and file access
```
sudo chown -R pybot:pybot /home/pybot/app/
sudo chmod -R 755 /home/pybot/app/
```
- In <code>/home/pybot/app/versions/CURRENT</code> should be a file <code>requirements.txt</code> for installing needed Python modules
- Change into the service user <code>sudo su pybot</code>
- Change directory with <code>cd ~/venv</code>, here we will set up the virtual environment (venv) for Python and the bot
```
~/venv/bin/pip install --upgrade pip
~/venv/bin/pip install -r ~/app/live/requirements.txt
```
- After that, we ONLY use the Python from the venv to run the bot, for example <code>~/venv/bin/python3 livebot.py</code>
- Make a directory listing of the bot with <code>ls ~/app/live/</code>
    - If <code>livebot.py</code> is missing, create a symbolic link <code>ln -sf bot_VERSION.py livebot.py</code>
- Log out from the service user and switch back to the install user, using CONTROL-D or <code>exit</code>
- Create the service file for the system service with <code>sudo nano /etc/systemd/system/tgbot.service</code>
```
[Unit]
Description=Telegram Bot Service
After=network.target

[Service]
User=pybot
Group=pybot
# Point to the 'live' symlink
WorkingDirectory=/home/pybot/app/live
# Use the python binary inside your virtual environment
ExecStart=/home/pybot/venv/bin/python3 /home/pybot/app/live/livebot.py
Restart=always
RestartSec=5

[Install]
WantedBy=multi-user.target
```
- You can restart with <code>sudo systemctl restart tgbot</code>
    - <code>sudo systemctl status tgbot</code> shows the current status
    - <code>journalctl -u tgbot -f</code> shows the logfile of the system service
    - <code>sudo systemctl start tgbot</code> and <code>sudo systemctl stop tgbot</code> will start/stop the service
    - With <code>Restart=always</code> in the service configuration above, the service will not restart if stopped manually but restart if the service crashes

## TODO
- Enable install user to access python bot logfiles
- multi server archirecture
    - backup across network
    - fail-over with online awareness
- DynDNS
- Disable graphical interface
- Security check
- Fail-over check
- Adjust bot code to work with new file structure (data with databases)

```
import os

# Get the directory where bot_variables.py actually lives
base_path = os.path.dirname(os.path.abspath(__file__))
json_path = os.path.join(base_path, "groups.json")

with open(json_path, "r") as file:
```

