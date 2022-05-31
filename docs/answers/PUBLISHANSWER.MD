| Param                | Required |
| -------------------- | -------- |
| `answer`             | **YES**  |
| `user_id`            | **YES**  |
| `langauge`           | **NO**   |
| `is_private`         | **YES**  |
| `source_url`         | **NO**   |
| `codeSearch.results` | **NO**   |
| `codeSearch.search`  | **YES**  |

```yaml
# POST
https://www.codegrepper.com/api/save_answer.php
```

```js
// Example Javascript Request

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
// Response
{
  "success": true,
  "grepper_gold": 0,
  "grepper_gold_total": 0
}
```
