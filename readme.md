# ⚡ **Code Grepper API Documentation**

<img align="right" width="250" style="margin-left: 10px;" height="250" src="./assets/Grepper%20Logo.png">

**NOTE:** You can find the older documentation [here](./old.md).

[Code Grepper][cgurl] also known as Grepper is a platform to help developers solve technical problems. [Grepper][cgurl] is powered by an amazing community of 200k(and growing fast) developers. Developers within the community contribute answers to technical problems primarily through the [Grepper][cgurl] browser extension which allows a user to quickly add a “code snippet” as an answer to a problem they ran into and recently solved. At present the community has put in 318k answers, which together have been viewed over 62 million times.

[cgurl]: https://codegrepper.com

## **Table Of Contents**

- [NPM Package](https://www.npmjs.com/package/grepper)
- [Users](./docs/users/)
  - [Get User](./docs/users/GETUSER.MD)
  - [Get User Belt](./docs/users/GETUSERBELT.MD)
  - [Get User Stats](./docs/users/GETUSERSTATS.MD)
  - [Get My Info](./docs/users/USERBYTOKEN.MD)
  - [Search Users](./docs/users/SEARCHUSERS.MD)
  - [Get Who To Follow](./docs/users/WHOTOFOLLOW.md)
- [Answers](./docs/answers)
  - [Get Answers](./docs/answers/GETANSWERS.MD)
  - [Get Comments](./docs/answers/GETCOMMENTS.MD)
  - [Search Answers](./docs/answers/SEARCHANSWER.MD)
  - [Needed Answers](./docs/answers/NEEDEDANSWERS.MD)
  - [Publish Answer](./docs/answers/PUBLISHANSWER.MD)
  - [Similiar Queries](./docs/answers/SIMILIARQUERIES.MD)
- [Teams](./docs/teams)
  - [Invite User](./docs/teams/INVITEUSER.MD)
  - [Team Answers](./docs/teams/TEAMANSWERS.MD)
- [Auth](./docs/auth)
  - [Login](./docs/auth/LOGIN.MD)
  - [Register](./docs/auth/REGISTER.MD)
  - [Reset Password](./docs/auth/RESETPASSWORD.MD)
  - [Logout](./docs/auth/LOGOUT.MD)
  - [Access Token](./docs/auth/TOKEN.MD)
- [Vulnerabilities](./docs/vulnerabilities)
  - [Logout On Click](./docs/vulnerabilities/LOGOUT.MD)
- [Other](./docs/other)
  - [Feedback](./docs/other/FEEDBACK.MD)
  - [Leaderboard](./docs/other/LEADERBOARD.MD)

## Authorization

| Icon | Description                                                                                    |
| ---- | ---------------------------------------------------------------------------------------------- |
| ✅   | No authorization required.                                                                     |
| 🔒   | This API endpoint requires [Authorization](./docs/auth/TOKEN.MD).                              |
| 🔓   | Partially requires [Authorization](./docs/auth/TOKEN.MD). Different output when auth provided. |

## Developer Note

If you find any outdated, missing, or inaccurate content on this repository and would like to alter it, you can open an [Issue](https://github.com/jareer12/Code-Grepper-API-Documentation/issues) or send a [Pull Request](https://github.com/jareer12/Code-Grepper-API-Documentation/pulls). Typos, grammatical mistakes, etc are also expected to be corrected.
