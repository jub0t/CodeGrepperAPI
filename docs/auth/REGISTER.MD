# Register 🔒

```yaml
# POST
https://www.codegrepper.com/api/register.php
```

```js
const DataToSend = new FormData();
DataToSend.append("password", "example");
DataToSend.append("email", "example@example.com");

return fetch(`https://www.codegrepper.com/api/register.php`, {
  method: "POST",
  body: DataToSend,
})
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
```

```json
{
  "errors": [],
  "success": true,
  "access_token": "",
  "user_id": 98467,
  "email": "example@example.com",
  "hide_grepper_button": 0,
  "grepper_user_langs": [
    {
      "lkey": "abap",
      "name": "Abap",
      "enabled": 1
    }
  ],
  "blacklists": [
    {
      "id": 6615,
      "user_id": 98467,
      "url": "localhost",
      "blacklist_type": 4
    }
  ]
}
```

| Param      | Type   | Required |
| ---------- | ------ | -------- |
| `username` | String | **YES**  |
| `password` | String | **YES**  |
