/*
    @ https://github.com/jareer12/code-grepper
    @ This script crashes the like button of an answer on the grepper site.
    -----------------------------------------------------------------------
    @ Instructions: 
    1. Put your answer Id instead of "AnswerId".
    2. Go To the answer & upvote it manually
    3. Paste This code in console and enter 3x(three times)
    4. Remove your upvote from the answer.
    5. Paste This code in console and enter 3x(three times)
    6. Your answer like button is now broken refresh and spam your likes.
    -----------------------------------------------------------------------
    @ Get "SearchAnswerId(search_answer_id)" from this API: https://www.codegrepper.com/api/get_answers_1.php?v=2&s=font%20awsome%20css%20link&u=98467
*/

SearchAnswerId = 239291
fetch(`https://www.codegrepper.com/api/feedback.php?vote=1&search_answer_id=${SearchAnswerId}&search_answer_result_id=44341847&u=98467`, { method: 'POST', headers: { 'Content-Type': 'application/json' } }).then((res) => { console.log(res.status); res.json() }).then((data) => { console.log(data) }).catch((err) => console.log(err));
