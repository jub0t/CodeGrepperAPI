# Who To Follow

```yaml
# POST
https://www.codegrepper.com/api/get_who_to_follow.php
```

```js
const token = String;
const userId = Number;

return fetch(`https://www.codegrepper.com/api/get_who_to_follow.php`, {
  headers: {
    "Content-Type": "application/json",
    "x-auth-token": token,
    "x-auth-id": userId,
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
  "users": [
    {
      "fun_name": "Undefined",
      "profile_slug": "Undefined",
      "belt_score": null,
      "is_rank_private": 1,
      "user_id": 98467,
      "profile_image": null,
      "belt_rank": "no"
    }
  ]
}
```
