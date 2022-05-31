```yaml
# GET
https://www.codegrepper.com/api/search_term_alternatives.php?q={query}
```

```js
const Query = String;

return fetch(
  `https://www.codegrepper.com/api/search_term_alternatives.php?q=${Query}`
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
  "related_terms": [
    {
      "term": "jaascript loop",
      "score": 0.9628877639770508
    },
    {
      "term": "javasript loop",
      "score": 0.9611862897872925
    },
    {
      "term": "javascript loop statement",
      "score": 0.9602680206298828
    }
  ]
}
```
