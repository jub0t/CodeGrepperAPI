# Get User ✅

```yaml
# GET
https://www.codegrepper.com/api/profile_helped_stats.php
```

```js
const Id = 98467; // UserID

fetch(
  `https://www.codegrepper.com/api/profile_helped_stats.php?id=${encodeURI(Id)}`
)
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
  "developers_helped": "183882",
  "hits": "745634"
}
```

| Param | Type   | Required | Description |
| ----- | ------ | -------- | ----------- |
| `id`  | String | **YES**  | User's id.  |
