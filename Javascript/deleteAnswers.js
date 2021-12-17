/* 
    Since The Grepper Contributor Coin System is Poping out, I Guess
    I need to get rid of my negative answers.

    Paste in Console, While on Codegrepper.com. (Page Doesnt Matter)
    Preview: https://i.gyazo.com/c042932310fe6a510317107624526026.png

    NOTE: Make sure to use a vpn as you might get IP Banned.
*/

setInterval(function () {
    const minimumScore = 0; // Show Answers Like & Less Than This.
    function userID() {
        if (localStorage.user_id) {
            return localStorage.user_id;
        }
    }

    fetch(`https://www.codegrepper.com/api/get_all_users_answers2.php?&offset=0&sort_by=score_asc`)
        .then((response) => {
            return response.json();
        })
        .then((Data) => {
            if (Data.answers.length <= 0) return;
            for (i = 0; i < Data.answers.length; i++) {
                const answerScore = Data.answers[i].score
                console.log(`${Data.answers[i].term} Has ${Data.answers[i].score} Scores`)
                if (parseFloat(answerScore) <= minimumScore || answerScore == null) {
                    fetch(`https://www.codegrepper.com/api/get_all_users_answers2.php?&search=${encodeURI(Data.answers[i].term)}&offset=0&sort_by=score_asc`)
                        .then((response) => {
                            return response.json();
                        })
                        .then((JSON) => {
                            if (JSON.answers.length > 0) {
                                for (j = 0; j < JSON.answers.length; j++) {
                                    fetch(`https://www.codegrepper.com/api/delete.php?id=${encodeURI(JSON.answers[j].id)}&u=${userID()}`, {
                                        method: 'POST',
                                        headers: { 'Content-Type': 'application/json' },
                                    })
                                        .then((res) => res.json())
                                        .then((data) => {
                                            console.log(data)
                                            console.log(`${JSON.answers[j].id} Answer Deleted, Had ${JSON.answers[j].score} Score`)
                                        })
                                        .catch((err) => { });
                                }
                            }
                        });
                } else {
                    console.log(`Score is Higher Than Expected, Ignoring`)
                }
            }
        });
}, 2000)