import os
import time
import secrets
import threading
from colorama import init
from termcolor import colored
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.chrome.options import Options

init()
print('\033[35m' """

                ░█████╗░░██████╗░  ███████╗░█████╗░██╗░░░░░██╗░░░░░░█████╗░░██╗░░░░░░░██╗███████╗██████╗░
                ██╔══██╗██╔════╝░  ██╔════╝██╔══██╗██║░░░░░██║░░░░░██╔══██╗░██║░░██╗░░██║██╔════╝██╔══██╗
                ██║░░╚═╝██║░░██╗░  █████╗░░██║░░██║██║░░░░░██║░░░░░██║░░██║░╚██╗████╗██╔╝█████╗░░██████╔╝
                ██║░░██╗██║░░╚██╗  ██╔══╝░░██║░░██║██║░░░░░██║░░░░░██║░░██║░░████╔═████║░██╔══╝░░██╔══██╗
                ╚█████╔╝╚██████╔╝  ██║░░░░░╚█████╔╝███████╗███████╗╚█████╔╝░░╚██╔╝░╚██╔╝░███████╗██║░░██║
                ░╚════╝░░╚═════╝░  ╚═╝░░░░░░╚════╝░╚══════╝╚══════╝░╚════╝░░░░╚═╝░░░╚═╝░░╚══════╝╚═╝░░╚═╝
""")
print('\033[33m' """                ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
                ▌          Code Grepper Follower Bot By @Jub0t on Instagram & jareer12 on Github.      ▌
                ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
""")
print('\033[33m' """                ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
                ▌          By Using this Bot you agree to the ToS & License. Only for Personal Use     ▌
                ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
""")

user_Id = "98467"  # Your user id
max_followers = 9999  # max follows

Options = Options()
## Options.headless = True
Options.add_experimental_option('excludeSwitches', ['enable-logging'])

for i in range(1, max_followers):
   random_string = secrets.token_hex(nbytes=16)
   chrome_driver_path = "./Driver.exe"

   driver = webdriver.Chrome(chrome_driver_path, options=Options)
   for j in range(0, 9):
       driver.get("https://www.google.com/search?q=grepper+gold")
       time.sleep(1)
   time.sleep(3)  # Wait For Page to load
   driver.quit()
