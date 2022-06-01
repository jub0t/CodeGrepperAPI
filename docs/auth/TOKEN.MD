# **Access Token**

The `access_token` is easily accessible once you are logged in your account, there are different methods to access this token.

### Dev Tools

- Open Dev tools, to open dev tools press `F12` while being on the codegrepper site(any page works).
- Open **Application** tab and find `access_token`.
- Copy the token, now you have your account's token.

### By Request

You can send a `POST` request to the login api endpoint with the account username and password. This will return the `access_token` and `userId` in the body. Make sure you send FormData data and not any other type of data, application/json, etc.

```yaml
## POST
https://www.codegrepper.com/api/login.php
```

```js
const DataToSend = new FormData();
DataToSend.append("password", "example");
DataToSend.append("email", "example@example.com");

return fetch(`https://www.codegrepper.com/api/login.php`, {
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
