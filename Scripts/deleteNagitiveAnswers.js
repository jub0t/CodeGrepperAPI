/* 
    Paste in Console, While on Codegrepper.com. (Page Doesnt Matter)
    Preview: https://i.gyazo.com/c042932310fe6a510317107624526026.png
    After: Manually Delete The Answers
*/

const minimumScore = 0; // Show Answers Like & Less Than This.
const queryPulls = 5; // Logs Around 5(5 * 10) Queries, 5 means fetches 5 times.
for (i = 0; i < queryPulls; i++) {
    if (i <= queryPulls) {
        fetch('https://www.codegrepper.com/api/get_all_users_answers2.php?&offset=100&sort_by=score_asc')
            .then((response) => {
                return response.json();
            })
            .then((Data) => {
                for (i = 0; i < Data.answers.length; i++) {
                    const answerScore = parseFloat(Data["answers"][i].score)
                    if (answerScore <= minimumScore) {
                        console.log(`[${answerScore}]: https://www.google.com/search?q=${encodeURI(Data["answers"][i].term.toString())}`)
                    }
                }
            });
    }
}