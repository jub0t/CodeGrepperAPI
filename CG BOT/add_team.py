import os
import time
import json
import requests
import secrets
import threading
from colorama import init
from termcolor import colored
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.chrome.options import Options

init()
Options = Options()
# Options.headless = True
Options.add_experimental_option('excludeSwitches', ['enable-logging'])

chrome_driver_path = "./assets/Driver.exe"

driver = webdriver.Chrome(chrome_driver_path, options=Options)
driver.get("https://www.codegrepper.com/index.php")

driver.execute_script("alert(1)")

time.sleep(10)