const fetch = require("node-fetch")
const fs = require("fs")

FetchUrl = `https://www.codegrepper.com/api/get_belt_users.php?offset=0&limit=500`
Cookie = ``
Users = []

/* 
fetch(FetchUrl, {
    headers: {
        'cookie': Cookie,
    },
})
    .then((response) => {
        return response.json();
    })
    .then((myJson) => {
        for (i = 0; i < myJson.users.length; i++) {
            CurrentJson = {
                "team_id": "348",
                "user_id": `${myJson.users[i].user_id}`
            }, null, 4
            Users.push(CurrentJson)
            FormattedData = JSON.stringify(Users)
            fs.writeFile("users.json", FormattedData, function (err) {
                if (err) throw err;
            });
        }
    });
*/

console.log(Users)
fetch('https://www.codegrepper.com/api/add_team_members.php', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'cookie': Cookie,
    },
    body: JSON.stringify({
        Users
    }),
})
    .then((res) => {
        console.log(res.status)
    })
    .then((data) => {
        console.log(data)
    })
    .catch((err) => console.log(err));