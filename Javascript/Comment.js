/* 
    This Script Add Comment To an Answer
*/

function addComment(Cookie, Comment, AnswerID, UserID) {
    fetch(`https://www.codegrepper.com/api/save_comment.php`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'cookie': `PHPSESSID=${Cookie}`
        },
        body: JSON.stringify({
            "answer_id": AnswerID,
            "comment": Comment,
            "user_id": UserID
        }),
    })
        .then((res) => res.json())
        .then((data) => {
            try {
                console.log(data)
            } catch {
                console.log(`No Data Returned`)
            }
        })
        .catch((err) => console.log(err));
}

addComment('qffepefonobog0eqql72f8unhf', "Thanks For The Code, Helps A Lot", 23, 98467)