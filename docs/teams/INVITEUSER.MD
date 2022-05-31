# Invite User(s) To Team 🔒

```yaml
# POST
https://www.codegrepper.com/api/add_team_members.php
```

```js
const token = tokenData.token;
const userId = tokenData.userId;

const Data = [
  {
    team_id: 1,
    user_id: 98467,
  },
];

return fetch(`https://www.codegrepper.com/api/add_team_members.php`, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "x-auth-token": token,
    "x-auth-id": userId,
  },
  body: JSON.stringify(Data),
})
  .then((response) => {
    return response.text();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
```

```yaml
# Empty Response
```
