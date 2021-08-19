const fetch = require("node-fetch")
const fs = require("fs")

FetchUrl = `https://www.codegrepper.com/api/get_belt_users.php?offset=0&limit=3000`
Cookie = `G_ENABLED_IDPS=google; _ga=GA1.2.150553002.1627922480; _gid=GA1.2.248965547.1628805310; grepper_web_access_token=182ae2422d9842dadff2967a0ec7b8793c3622d4118919773add82304c397b5eaecbed5c995dd875edc8082173e8aa2ed8393050756df58095e6418a3dde90b0; g_state={"i_p":1628896242009,"i_l":1}; cto_bundle=kgSMv185RzJMSGdhUnVhQ1Rsb0ptTVN1N3B1NjBxNmkxaG94Ykp4UE01anlYbWlpcmszQkJVb1UxanpEckRwUTVBVGVnYWhYREs5V1lwSFpXSmpnWnY3bzdiOHpxYk5DY3dwRVk4aU9hdFh5YzVIdEFXbXNFV3JLbyUyRnp2RGdHMlB4VWR4R0lXckxsc3Vob0ZmVHpmTVolMkZnWDVnJTNEJTNE; __gads=ID=024885f7befc2633-22e91fceabc9001b:T=1628518617:RT=1629024900:S=ALNI_MbtUnUOavfqSsqJHYpM-CMbIBzx1g; PHPSESSID=t4c95hj0o6bfssvl66bebmj5kh`
Users = []

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