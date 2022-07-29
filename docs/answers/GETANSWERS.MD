# Get Answers ✅

```yaml
# GET
https://www.codegrepper.com/api/get_answers_1.php
```

```js
const Query = "javascript loop";
const APIVersion = 3; // No idea what versions are but 3 gives best answers.

return await fetch(
  `https://www.codegrepper.com/api/get_answers_1.php?v=${APIVersion}&s=${encodeURI(
    Query
  )}`
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
// Response
{
  "answers": [
    {
      "id": 286865,
      "search_id": null,
      "user_id": 393862,
      "nickname": null,
      "language": "javascript",
      "created_at": "2021-07-16 03:14:23",
      "updated_at": "2022-05-09 08:26:33",
      "bounty": null,
      "bounty_approved": null,
      "solution_urls": "https://www.google.com/",
      "source_id": 2,
      "is_deleted": 0,
      "source_url": "",
      "do_hide": 0,
      "do_hide_r": null,
      "do_hide2": null,
      "do_hide2_r": null,
      "is_private": 0,
      "is_widget": 0,
      "video_name": "",
      "t_upvotes": 28,
      "t_upvotes_d": 25,
      "t_downvotes": 3,
      "t_downvotes_d": 0,
      "t_copies": 602,
      "t_follow_up_searches": 0,
      "t_no_follow_up_searches": 0,
      "t_other_answer_clicked": 498,
      "t_score": "0.3161161",
      "did_help_per": "0.0535000",
      "t_total_results": 4950,
      "t_users_count": 2228,
      "cluster_id": "javascript_29",
      "desp_for_ans": 0,
      "lang_prob": null,
      "humor_prob": "-0.162",
      "new_sa_count": 9,
      "t_scorecat1": null,
      "t_ttr_cat1": null,
      "t_scorecat2": null,
      "t_ttr_cat2": null,
      "t_scorecat3": null,
      "t_ttr_cat3": null,
      "t_scorecat4": null,
      "t_ttr_cat4": null,
      "t_scorecat5": null,
      "t_ttr_cat5": null,
      "t_comments": 1,
      "answer_md5": "59ef5987ebeb79643f87b14a1cb8872d",
      "fun_name": "MattDESTROYER",
      "profile_slug": "matthew-ukrjcjx42pm9",
      "search_answer_id": 284597,
      "donate_link": "",
      "term": "js for loop",
      "raw_score": "0.3161161",
      "score": "0.3161161",
      "total_results": 4950,
      "upvotes": 28,
      "downvotes": 3,
      "i_upvoted": null,
      "i_downvoted": null,
      "is_my_answer": 0,
      "search_answer_result_id": "103815156"
    }
  ],
  "grepcc_tips_left": 0
}
```

| Param | Type          | Required | Description                               |
| ----- | ------------- | -------- | ----------------------------------------- |
| `s`   | String        | **YES**  | The query, whatever you want to search    |
| `v`   | String/Number | **YES**  | The version of API, 3 is the best option. |
