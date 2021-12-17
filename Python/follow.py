import os
import time
import json
import secrets
import threading
from colorama import init
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
                ░╚════╝░░╚═════╝░  ╚═╝░░░░░░╚════╝░╚══════╝╚══════╝░╚════╝░░░░╚═╝░░░╚═╝░░╚══════╝╚═╝░░╚═╝""")
print('\033[33m' """
                ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
                ▌          Code Grepper Follower Bot By @Jub0t on Instagram & jareer12 on Github.      ▌
                ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
                ▌          By Using this Bot you agree to the ToS & License. Only for Personal Use     ▌
                ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
""")

config = open(os.path.dirname(
    os.path.realpath(__file__)) + '/assets/config.json').read()

user_Id = json.loads(config)['user_id']
max_followers = json.loads(config)['max_followers']

Options = Options()
Options.headless = True
Options.add_experimental_option('excludeSwitches', ['enable-logging'])

redirector = "https://www.codegrepper.com/login-required.php?jump_to=https://www.codegrepper.com/api/follow.php?follow_user_id=98467&follow=1"

print('\033[34m', "Target Id:" + '\033[32m', user_Id,
      '\033[34m', "Estimated Time To Deliver All" + '\033[32m', max_followers, "Follows:", '\033[32m' + str(round(max_followers * 9 / 60)) + " Minutes")

for i in range(0, max_followers):
    random_string = secrets.token_hex(nbytes=16)
    chrome_driver_path = "./assets/Driver.exe"

    driver = webdriver.Chrome(chrome_driver_path, options=Options)
    driver.get("https://www.codegrepper.com/index.php")

    signup = driver.find_element_by_xpath("//*[text()='Signup']")
    signup.click()
    time.sleep(2)

    email_input = driver.find_element_by_class_name("input1")
    email_input.send_keys(random_string, "@jub0t.com")

    pass_input = driver.find_element_by_name("password")
    pass_input.send_keys("jub0t123")

    register = driver.find_element_by_id("register_button")
    register.click()
    time.sleep(2)

    driver.get(
        "https://www.codegrepper.com/api/follow.php?follow_user_id=" + str(user_Id) + "&follow=1")

    print('\033[34m', 'Follower Attempt', i + 1, ":", '\033[32m', "Success")
    driver.quit()

print('\033[34m', '<▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ Task Complete  ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬>')
