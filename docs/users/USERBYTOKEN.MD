# Get My Info 🔒

```yaml
# GET
https://www.codegrepper.com/api/account.php
```

```js
const token = String;
const UserID = Number;

fetch(`https://www.codegrepper.com/api/account.php`, {
  headers: {
    "Content-Type": "application/json",
    "x-auth-token": String,
    "x-auth-id": Number,
  },
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
  "donate_link": "https://paypal.me/jareer12",
  "fun_name": "Undefined",
  "subscription_type": 3,
  "subscription_started_on": null,
  "subscription_expired": 0,
  "earnings_allowed": 0,
  "earnings_enabled": 0,
  "hide_grepper_button": 0,
  "email_feature_updates": 1,
  "shortcut_key": 0,
  "notify_on_comments": 1
}
```

| Param          | Type   | Required | Description                 |
| -------------- | ------ | -------- | --------------------------- |
| `x-auth-token` | String | **YES**  | Access token of the account |
| `x-auth-id`    | String | **YES**  | UserID of the account       |
