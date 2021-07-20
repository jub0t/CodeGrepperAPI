# Code Grepper

## Improvements

There are 2 files called `main.css`, `popup.css` & `codegrepper.css` these are the minified versions of the Profile Page's stylesheets, Will help load the page faster.

## Bugs & Vulnerabilities

**Follow Yourself:** Go to your **[profile][Profile]** > Open Console > paste the code below > refresh page.

```js
    document.getElementById("followButton").click();
```

I don't know if this is a feature or bug but you can manipulate the **Donate** button with an auto follower, Try clciking the donate button on my [profile](https://www.codegrepper.com/app/profile.php?id=98467). Put the follow link in your doante button.

```yaml
    /api/follow.php?follow_user_id=98467&follow=1
```

Get follows 100/hour Set your fun name to the code below. This bug will redirect **EVERYONE** visiting the community page to a follow link which will give you a follow(really dangerous). If you are now trapped in that loop just install the **[Redirect Blocker](https://chrome.google.com/webstore/detail/redirect-blocker/kjkidapfdhbcllgoaoobklapepffmcca/related?hl=en)** Extension and change your username. Thats why they call me hacker 😎😎.

```html
    <script>window.location.href = `/api/follow.php?follow_user_id=98467&follow=1`</script>
```

## APIs

Code Grepper APIs(just for researching -__-)

```yaml
https://www.codegrepper.com/search.php?q=
```

```yaml
https://www.codegrepper.com/api/send_feedback.php
```

```yaml
https://www.codegrepper.com/api/update_answer.php
```

```yaml
https://www.codegrepper.com/api/save_answer.php
```

```yaml
https://www.codegrepper.com/api/save_comment.php
```

```yaml
https://www.codegrepper.com/app/profile.php?id=98467
```

```yaml
https://www.codegrepper.com/api/follow.php?follow_user_id=98467&follow=1
```

```yaml
https://www.codegrepper.com/api/get_answers_comments.php?aid=287391&u=98467
```

Follow on [Code Grepper][Profile]

[Profile]: https://www.codegrepper.com/app/profile.php?id=98467
