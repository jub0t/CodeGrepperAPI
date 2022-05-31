# Get Team Answers ✅

```yaml
# GET
https://www.codegrepper.com/api/get_team_answers.php
```

### Query Params

| Param     | Type          | Required |
| --------- | ------------- | -------- |
| `team_id` | String/Number | **YES**  |
| `offset`  | String/Number | **YES**  |
| `sort_by` | String        | **NO**   |

```json
{
  "answers": [
    {
      "answer_user_id": 9895,
      "is_others_answer": 1,
      "search_answer_user_id": 9895,
      "fun_name": "ayaan",
      "i_upvoted": "0",
      "upvotes": "1",
      "downvotes": "0",
      "score": "0.7778",
      "total_answer_hits": 3,
      "term": "when does localstorage get cleared",
      "created_at": "05/30/2022",
      "bounty": null,
      "answer": "/* For Chrome, if your browsing data is cleared, then localStorage will expire and\nalso get cleared. If you delete cookies or temporary files, this may also\ncause localStorage to be cleared. */",
      "language": "javascript",
      "bounty_approved": null,
      "id": 493948
    }
  ],
  "total_count": 612
}
```
