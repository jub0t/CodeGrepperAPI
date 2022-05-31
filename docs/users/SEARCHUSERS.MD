# Search User

Since Grepper doesn't have any official API endpoints to search for users we'll use the autocomlpete API from team invite.

```yaml
# GET
https://www.codegrepper.com/api/autocomplete_users_search.php?q=Undefined
```

```js
const Username = String;
return fetch(
  `https://www.codegrepper.com/api/autocomplete_users_search.php?q=${encodeURI(
    Username
  )}`
)
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

```json
[
  {
    "is_team_member": null,
    "fun_name": "Undefined",
    "id": 98467,
    "real_name": "Jareer",
    "profile_image": "98467_QQYVITZrlZf19i0SKj9YEbZaKOx627U1gyYL48O9C5yxrcODqE9MlrB.png"
  }
  ...
]
```

| Param | Type   | Required | Description                              |
| ----- | ------ | -------- | ---------------------------------------- |
| `q`   | String | **YES**  | Username of the user you want to search. |
