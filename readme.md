# CodeGrepper API Docs[Unofficial]

Also check out our Code Grepper npm modules at [NPM/YARN package](https://github.com/jareer12/grepper).

## Table of Contents

- [Answers](#Answers)
- [Users](#Users)

## [Application Pages][mainpage]

Fetch answers.

```yaml
# GET
https://www.codegrepper.com/search.php?q={query}
```

View a user's profile with their username(slug_name)

```yaml
# GET
https://www.codegrepper.com/profile/jareer
```

View a user's profile with their userId. This API requires `id` parameter.

```yaml
# GET
https://www.codegrepper.com/app/profile.php
```

## [Answers][mainpage]

Publish a new answer.

```yaml
# POST
https://www.codegrepper.com/api/save_answer.php
```

This API is used to submit a reply to a comment. Payload example is below. If the request was successful `1` will be return as response else `0`.

```yaml
# POST
https://www.codegrepper.com/api/save_comment.php
```

```json
{
  "comment": "Really helpful i search times million times a day",
  "answer_id": 23,
  "user_id": 98467
}
```

Updates the answer.

```yaml
# POST
https://www.codegrepper.com/api/update_answer.php
```

The get_terms_needing_answers shows what answers are needed, these answers can reward you with belt percentage.

```yaml
# GET
https://www.codegrepper.com/api/get_terms_needing_answers.php
```

```json
[
  {
    "id": 74776,
    "term": "error: the sandbox is not in sync with the podfile.lock. run 'pod install' or update your cocoapods installation.",
    "bonus_points": 500,
    "bonus": 0
  },
  {
    "id": 54345,
    "term": "library: 'pem routines', function: 'get_name', reason: 'no start line', code: 'err_ossl_pem_no_start_line'",
    "bonus_points": 0,
    "bonus": 0
  }
]
```

This API return all the comments from an answer.

```yaml
https://www.codegrepper.com/api/get_answers_comments.php?aid=287391 🟢
```

```yaml
{
  "comments":
    [
      {
        "id": 467,
        "user_id": 98467,
        "comment": "testing 123 hello",
        "created_at": "2021-07-16 23:43:41",
        "profile_slug": "jareer",
        "fun_name": "Undefined",
        "t_upvotes": null,
        "t_downvotes": null,
        "i_upvoted": null,
        "i_downvoted": null,
      },
    ],
}
```

This API returns answers for a query, the API has 3 versions, the `v1` returns a few answers(or somtimes none), while `v2` and `v3` return an extra array called `more_answers`. The `s` parameter is the search query and the. The `u` parameter is optional that identifies the user that used the API.

```yaml
https://www.codegrepper.com/api/get_answers_1.php?v=3&s=grepper 🟢
```

```yaml
{
  "answers": [{}],
  "products": [],
  "language_guess": "whatever",
  "more_answers": [],
}
```

Returns answers for a specific search. Uses the `q` & `search_options` parameters(`?q=grepper&search_options=search_titles`).

```yaml
https://www.codegrepper.com/api/search.php 🟢
```

## [Users][mainpage]

Shows how many people did the user helped & and the ammount of problems solved and developers helped.

```yaml
https://www.codegrepper.com/api/profile_helped_stats.php?id=98467 🟢
```

```yaml
{ "developers_helped": "75294", "hits": "109101" }
```

Returns JSON data for a user's profile. Like `profile_image`, `fun_name`, `real_name`, `donate_link` etc.

```yaml
https://www.codegrepper.com/api/profile.php?id=98467 🟢
```

```yaml
{
  "profile_image": "98467_hKuVkwhdUxieQAfc5lVurPuwSPTQFiVSnWEIS8l4gecLZdSa0g3vba4.gif",
  "fun_name": "Undefined",
  "real_name": "Jareer",
  "twitter_name": "",
  "donate_link": "https://jareer.xyz/donate",
  "how_to_help": "My Grepper Experience has been really POG, looking forward to collaborate. Rigby#6654(discord)",
  "location": "Mars",
  "is_rank_private": 0,
  "is_activity_private": 1,
  "is_expertise_private": 0,
  "is_daily_activity_private": 1,
  "enable_coding_activity": 1,
}
```

Here is the user activity API, this api is ussed to make the Codegrepper heatmap chart(contribution board).

```yaml
https://www.codegrepper.com/api/get_user_activity_stats.php?user_id=98467 🟢
```

```yaml
{
  "a": [{ "ymd": "2021-01-01" }],
  "s": [["whatever", 86, "Whatever"]],
  "f": [["Unity", 116, "unity"]],
}
```

This API shows what Programming language(s) does the user use, returns an array in JSON. The Data includes `SucessCode`, `Name` etc.

```yaml
https://www.codegrepper.com/api/get_user_code_languages.php 🟢
```

```yaml
{
  "success": true,
  "ucl": [{ "lkey": "String", "name": "String", "enabled": 0 }],
}
```

Returns user's belt stats, this data includes Previous Belt, Next Belt & current belt percentage.

```yaml
https://www.codegrepper.com/api/get_user_stats.php?uid=98467 🟢
```

```yaml
{
  "coding_belt": ["String", 0.000, "String"],
  "is_rank_private": "0",
  "success": true,
}
```

Shows user's feed, requires auth

```yaml
https://www.codegrepper.com/api/get_my_feed.php 🟢
```

```yaml
{
  "activity":
    [
      {
        "feed_type": "recent_answer",
        "answer_created_at": "2021-10-01 04:52:16",
        "answer": "int a = 80;\nint b = 20;\nint addition(int number1, int number2)\n{\n\tint result = number1 + number2;\n\treturn result;\n}\nConsole.WriteLine(addition( a,  b));",
        "user_id": "262702",
        "id": 333666,
        "answer_title": "function in c# to do addition",
        "fun_name": "Empire of programmers ",
        "profile_slug": "vishnu",
        "profile_image": "262702_IeIHn2AeTy0QlU1cf7V8LWlIMouvwH0PjZA4UVKk5gw8mw952eozbZN.gif",
        "answer_user_id": 262702,
      },
    ],
}
```

Shows all the users on the community page, requires auth. This data includes `UserId`, `Username`, `BeltScore`, `BeltRank` etc.

```yaml
https://www.codegrepper.com/api/get_belt_users.php?offset=0&limit=500 🟢
```

```yaml
{
  "users":
    [
      {
        "user_id": 0,
        "fun_name": "String",
        "is_rank_private": 0,
        "belt_score": 0,
        "profile_slug": "String",
        "profile_image": "String",
        "belt_rank": "String",
      },
    ],
}
```

This API is used to follow a user, you must be authenticated to do this. This API returns either `1` or `0`.

```yaml
https://www.codegrepper.com/api/follow.php?follow_user_id=98467&follow=1 🟢
```

```yaml
1
```

## [Teams][mainpage]

This API is used to join a team.

```yaml
https://www.codegrepper.com/api/join_team.php 🔴
```

```yaml
{ team_member_id: 0000 }
```

This API adds users to your team.

```yaml
https://www.codegrepper.com/api/add_team_members.php 🔴
```

An auto completor for the team search users. This API can be used to get user's ID by their username.

```yaml
https://www.codegrepper.com/api/autocomplete_users_search.php?team_id=1&q=Jareer 🟢
```

```yaml
[
  {
    "is_team_member": null,
    "fun_name": "Undefined",
    "id": 98467,
    "real_name": "Jareer",
    "profile_image": "98467_hKuVkwhdUxieQAfc5lVurPuwSPTQFiVSnWEIS8l4gecLZdSa0g3vba4.gif",
  },
]
```

Shows all the Team answers, you need to be authenticated & in the team to retreive proper data.

```yaml
https://www.codegrepper.com/api/get_team_answers.php?&offset=0&sort_by=id_desc&team_id=348 🟢
```

```yaml
{
  "answers":
    [
      {
        "answer_user_id": "String",
        "is_others_answer": 0,
        "search_answer_user_id": 0,
        "fun_name": "String",
        "i_upvoted": "String",
        "upvotes": "String",
        "downvotes": "String",
        "score": "String",
        "total_answer_hits": 19,
        "term": "Question",
        "created_at": "String",
        "bounty": null,
        "answer": "String",
        "language": "String",
        "bounty_approved": null,
        "id": 0,
      },
    ],
  "total_count": 88,
}
```

## [Settings][mainpage]

The update privacy API is used to update your privacy settings, you can either set it to `true` or `false`, 0 means false 1 means true.

```yaml
https://www.codegrepper.com/api/update_extension_privacy.php 🔴
```

Updates your **[My programming language][settings]** settings.

```yaml
https://www.codegrepper.com/api/update_my_code_languages.php?l=whatever&enabled=1 🟢
```

Updates your **[Notifications][settings]** settings.

```yaml
https://www.codegrepper.com/api/update_notification_settings.php 🔴
```

```json
{
  "update_name": "notify_on_comments",
  "update_value": 1 // 0 for disable
}
```

## [Other][mainpage]

API used while logging in.

```yaml
https://www.codegrepper.com/api/login.php 🔴
```

```yaml
{
  "chrome_grepper_id": "",
  "user_id": "",
  "email": "Jareer@gmail.com",
  "password": "adwsawdsa",
}
```

API to register users.

```yaml
https://www.codegrepper.com/api/register.php 🔴
```

```yaml
{
  "chrome_grepper_id": "",
  "user_id": "",
  "email": "Jareer@gmail.com",
  "password": "adwsawdsa",
}
```

API used to log users out

```yaml
https://www.codegrepper.com/api/logout.php 🟢
```

The reset password API.

```yaml
https://www.codegrepper.com/api/reset_password.php 🔴
```

```yaml
{ "chrome_grepper_id": "", "user_id": "", "email": "Jareer@gmail.com" }
```

The feedback api, used to send feedback to the Code grepper devs.

```yaml
https://www.codegrepper.com/api/send_feedback.php 🔴
```

Get who to follow, something that the algorithm mines from the database. Basically follow recommendation.

```yaml
https://www.codegrepper.com/api/get_who_to_follow.php 🟢
```

```yaml
{
  "users":
    [
      {
        "fun_name": "The Frenchy",
        "belt_score": 197824,
        "profile_slug": "al",
        "is_rank_private": 0,
        "user_id": 113653,
        "profile_image": null,
        "belt_rank": "blue",
      },
    ],
}
```

Shows top profile answers.

```yaml
https://www.codegrepper.com/api/profile_top_answers.php?id=98467 🟢
```

```yaml
{
  "top_answers":
    [
      {
        "id": 196274,
        "answer": "",
        "created_at": "2021-02-09 21:36:30",
        "total_results": 53,
        "search_term": "server info discord.js",
        "score": "5.1138000",
        "downvotes": 0,
        "upvotes": 5,
      },
    ],
}
```

An Auto-completor for the [**Search**](https://www.codegrepper.com/search.php) page.

```yaml
https://www.codegrepper.com/api/search_autocomplete.php?q=js 🟢
```

Just a random route used as a CDN returns Images, these images are used in the meta tags of the search page.

```yaml
https://www.codegrepper.com/codeimages/for-loop-javascript.png 🟢
```

This API shows all the users answer stats.

```yaml
https://www.codegrepper.com/api/get_user_answer_stats.php?statstype=views&answer_id=null&daterange=null 🟢
```

```yaml
{
  "views":
    [{ "created_at": "2020-10-15", "views": 0, "copies": 0, "upvotes": 0 }],
}
```

## Dealing with Authorization(s)

Every user on Code Grepper has a unique `PHPSSESID` which is used to authenticate users. Follow the steps below To retrieve this token.

### Usage

- > Open Application from DevConsoles
- > Open Cookies
- > Copy The `PHPSESSID`
- > The auth can then be used with POST request like `PHPSESSID=${Cookie}`

```js
fetch(`https://www.codegrepper.com/`, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    cookie: `PHPSESSID=${Cookie}`,
  },
  body: JSON.stringify({
    Data: "Payload",
  }),
})
  .then((res) => res.json())
  .then((data) => {
    try {
      console.log(data);
    } catch {
      console.log(`No Data Returned`);
    }
  })
  .catch((err) => console.log(err));
```

### Token Authorization

There is a token-based authorization that I just found out about

```js
fetch(`https://www.codegrepper.com/api/account.php`, {
  headers: {
    "Content-Type": "application/json",
    "x-auth-token": token, // Secret token, get it from localStorage. Or use https://www.npmjs.com/package/grepper for node.js
    "x-auth-id": userId, // 98467
  },
})
  .then((response) => {
    return response.text();
  })
  .then((myJson) => {
    try {
      Data = JSON.parse(myJson);
      console.log(Data);
      if (Data) {
      } else {
        console.log(`No Data Fetched`);
      }
    } catch {
      console.log(`No Data Fetched`);
    }
  })
  .catch((err) => {
    return {
      Success: false,
      Message: err,
    };
  });
```

[mainpage]: https://jubot.site/
[taylorprofile]: https://github.com/TaylorHawkes
[profile]: https://www.codegrepper.com/app/profile.php?id=98467
[settings]: https://www.codegrepper.com/app/settings-code-languages.php
