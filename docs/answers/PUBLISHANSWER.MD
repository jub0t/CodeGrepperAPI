```yaml
# POST
https://www.codegrepper.com/api/save_answer.php
```

```js
const token = String;
const userId = Number;

const data = {
  answer: String,
  user_id: Number,
  team_ids: Number,
  language: String,
  is_private: Boolean,
  source_url: String,
  codeSearch: {
    results: Array,
    search: String,
  },
};

return fetch(`https://www.codegrepper.com/api/save_answer.php`, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "x-auth-token": token,
    "x-auth-id": userId,
  },
  body: JSON.stringify(data),
})
  .then((response) => {
    if (response.status !== 200) {
      return {
        Success: false,
        Message: `Server Returned an invalid response.`,
      };
    }
    return response.json();
  })
  .then((response) => {
    console.log(response);
  })
  .catch((err) => {
    console.log(err);
  });
```

```json
{}
```
