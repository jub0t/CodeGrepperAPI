/* 
    Since The Grepper Contributor Coin System is Poping out, I Guess
    I need to get rid of my negative answers.

    Paste in Console, While on Codegrepper.com. (Page Doesnt Matter)
    Preview: https://i.gyazo.com/c042932310fe6a510317107624526026.png
    After: Manually Delete The Answers

    NOTE: Make sure to use a vpn as you might get IP Banned.
*/

const minimumScore = 0; // Show Answers Like & Less Than This.
function userID() {
    if (localStorage.user_id) {
        return localStorage.user_id;
    }
}

setInterval(function () {
    fetch(`https://www.codegrepper.com/api/get_all_users_answers2.php?sort_by=score_asc`)
        .then((response) => {
            return response.json();
        })
        .then((Data) => {
            for (i = 0; i < Data.answers.length; i++) {
                const answerScore = parseFloat(Data["answers"][i].score)
                if (answerScore <= minimumScore) {
                    fetch(`https://www.codegrepper.com/api/get_answers_1.php?v=3&s=${Data["answers"][i].term}&u=${userID()}`)
                        .then((response) => {
                            return response.json();
                        })
                        .then((JSON) => {
                            for (j = 0; j < JSON.answers.length; j++) {
                                console.log(`${JSON.answers.length - j} Answers Left`)
                                if (JSON.answers[j]) {
                                    if (JSON.answers[j].user_id == userID()) {
                                        fetch(`https://www.codegrepper.com/api/delete.php?id=${JSON.answers[j].id}&u=${userID()}`, {
                                            method: 'POST',
                                            headers: { 'Content-Type': 'application/json' },
                                        })
                                            .then((res) => res.json())
                                            .then((data) => {
                                                console.log(`${JSON.answers[j].id} Answer Deleted`)
                                            })
                                            .catch((err) => {
                                                if (JSON.answers[j]) {
                                                    console.log(`Was Unable To Delete ${JSON.answers[j].id}`)
                                                } else {
                                                    console.log(`Was Unable To Delete`)
                                                }
                                            });
                                    } else {
                                        console.log(`Answer Fetch But You Are Not The Owner, Ignore`)
                                    }
                                }
                            }
                        });
                }
            }
        });
}, 3000)