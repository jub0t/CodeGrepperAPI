# Reset Password ✅

```yaml
# POST
https://www.codegrepper.com/api/reset_password.php
```

```js
const DataToSend = new FormData();
DataToSend.append("email", "example@example.com");

return fetch(`https://www.codegrepper.com/api/reset_password.php`, {
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
  "success": true,
  "errors": []
}
```

| Param   | Type   | Required | Description                                |
| ------- | ------ | -------- | ------------------------------------------ |
| `email` | String | **YES**  | Email to receive the password reset email. |
