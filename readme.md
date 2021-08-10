# Code Grepper

**Code Grepper** information, Bugs and Vulnerablities and tricks are posted here, Star this repo and visit frequently. Follow me(**Jareer**) on **[Code Grepper][Profile]**


## APIs

List Code Grepper APIs. Below is a table that shows what type of request does the API receive.

| Symbol | Type |
|---|---|
| 🟢 |  **`GET`** |
| 🔵 |  **`PUT`** |
| 🔴 |  **`POST`** |
| ⚪ |  **`DELETE`** |
| ⚫ |  **`OPTIONS`** |

### Application Pages

Application search API returns HTML/Text response.

```yaml
https://www.codegrepper.com/search.php?q= 🟢
```

View a user's profile with their userId.

```yaml
https://www.codegrepper.com/app/profile.php?id=98467 🟢
```

View a user's profile with their username(real_name)

```yaml
https://www.codegrepper.com/profile/jareer 🟢
```

### Answers

saves an answer to the codegrepper website,

```yaml
https://www.codegrepper.com/api/save_answer.php 🔴
```

Publish/save an answer.

```yaml
https://www.codegrepper.com/api/save_comment.php 🔴
```

Updates the answer.

```yaml
https://www.codegrepper.com/api/update_answer.php 🔴
```

Retrieves the comment(s) of an answer.

```yaml
https://www.codegrepper.com/api/get_answers_comments.php?aid=287391&u=98467 🟢
```

Returns answers for a specific search.

```yaml
https://www.codegrepper.com/api/search.php?q=grepper&search_options=search_titles 🟢
```

### User

Returns user's belt stats, this includes previous belt, next belt & current belt percentage.

```yaml
https://www.codegrepper.com/api/get_user_stats.php?uid=98467 🟢
```

Returns JSON data for a user's profile. Like `profile_image`, `fun_name`, `real_name`, `donate_link` etc.

```yaml
https://www.codegrepper.com/api/profile.php?id=98467 🟢
```

This API is used to follow a user, you must be authenticated to do this.

```yaml
https://www.codegrepper.com/api/follow.php?follow_user_id=98467&follow=1 🟢
```

### Teams

This API adds users to your team.

```yaml
https://www.codegrepper.com/api/add_team_members.php 🔴
```

### Settings

The update privacy API is used to update your privacy settings, you can either set it to `true` or `false`, 0 means false 1 means true.

```yaml
https://www.codegrepper.com/api/update_extension_privacy.php 🔴
```

### Other

The feedback api, used to send feedback to the Code grepper devs.

```yaml
https://www.codegrepper.com/api/send_feedback.php 🔴
```

An Auto-completor for the [**Search**](https://www.codegrepper.com/search.php) page.

```yaml
https://www.codegrepper.com/api/search_autocomplete.php?q=js 🟢
```

Just a random route used as a CDN returns Images, these images are used in the meta tags of the search page.

```yaml
https://www.codegrepper.com/codeimages/for-loop-javascript.png 🟢
```

[Profile]: https://www.codegrepper.com/app/profile.php?id=98467
