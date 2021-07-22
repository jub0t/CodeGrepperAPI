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
Options.headless = True
Options.add_experimental_option('excludeSwitches', ['enable-logging'])

for i in range(1, max_followers):
   random_string = secrets.token_hex(nbytes=16)
   chrome_driver_path = "./Driver.exe"


   driver = webdriver.Chrome(chrome_driver_path, options=Options)
   driver.get("https://www.codegrepper.com/index.php")

   time.sleep(1)  # Wait For Page to load

   signup = driver.find_element_by_xpath("//*[text()='Signup']")
   signup.click()

   time.sleep(1)  # Wait for Popup

   email_input = driver.find_element_by_class_name("input1")
   email_input.send_keys(random_string, "@jub0t.com")

   pass_input = driver.find_element_by_name("password")
   pass_input.send_keys("jub0t123")
   register = driver.find_element_by_id("register_button")
   register.click()

   time.sleep(2)  # Wait For Page to load

   driver.get(
       "https://www.codegrepper.com/api/follow.php?follow_user_id=" + user_Id + "&follow=1")

   audit_log = open(
       "C:/Users/0726abja/Documents/Code-Grepper/CG BOT/emails.txt", "a")
   audit_log.writelines("\n" + random_string + "@jub0t.com:jub0t123",)

   print('\033[34m', 'Follower Attempt', i, ":", '\033[32m', "Success")
   driver.quit()
