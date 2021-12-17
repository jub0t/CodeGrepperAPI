import time
import requests
import threading

GET = "https://www.codegrepper.com/api/get_answers_1.php?v=2&s=Grepper%20Gold&u=98467"
POST2 = "https://www.codegrepper.com/api/feedback.php?vote=1&search_answer_id=287352&search_answer_result_id=45039214&u=98467"
POST = "https://www.codegrepper.com/api/get_answers_2.php?v=2"

Body = {
    "results": [
        "https://www.codegrepper.com/documentation.php",
        "https://www.codegrepper.com/grepper-gold.php",
        "https://www.youtube.com/watch?v=C0zitBs5NvY",
        "https://stackoverflow.com/questions/63632131/grepper-code-extension-not-showing-suggestions-and-add-answer-option",
        "https://stackoverflow.com/questions/65890381/neovim-vim-grepper-shows-no-result",
        "http://www.agenzialapineta.it/otvpw-ALU-Anodized-Purple-Bar-44221/Sporting-Goods/",
        "https://www.smartcell.ly/Cycling-sdbhg-Vintage-ALU-Anodized-Purple-44761/",
        "https://www.linkedin.com/pulse/aus-abfall-wird-gold-yvan-grepper",
        "https://stack.sourcecodeaplikasi.info/host-https-www.codegrepper.com/code-examples/whatever/what+does+ftw+stand+for"
    ],
    "search": "Grepper Gold",
    "user_id": 98467
}
headers = {
    "cookie": 'a'
}


def REQUESTS():
    while True:
        SendGet = requests.get(GET)
        print(SendGet, "\n")
        SendPOST = requests.get(POST, headers=headers, data=Body)
        print(SendPOST, "\n")
        SendPOST2 = requests.get(POST2, headers=headers)
        print(SendPOST2, "\n")


for i in range(1, 11):
    t = threading.Thread(target=REQUESTS)
    t2 = threading.Thread(target=REQUESTS)
    t3 = threading.Thread(target=REQUESTS)

    t.start()
    t2.start()
    t3.start()

time.sleep(99)
