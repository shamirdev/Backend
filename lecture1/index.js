require('dotenv').config();
const express = require('express')
const app = express();
const port = 3000;

const gitHubData ={
    "login": "shahmirDev",
    "id": 141479057,
    "node_id": "U_kgDOCG7MkQ",
    "avatar_url": "https://avatars.githubusercontent.com/u/141479057?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/shahmirDev",
    "html_url": "https://github.com/shahmirDev",
    "followers_url": "https://api.github.com/users/shahmirDev/followers",
    "following_url": "https://api.github.com/users/shahmirDev/following{/other_user}",
    "gists_url": "https://api.github.com/users/shahmirDev/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/shahmirDev/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/shahmirDev/subscriptions",
    "organizations_url": "https://api.github.com/users/shahmirDev/orgs",
    "repos_url": "https://api.github.com/users/shahmirDev/repos",
    "events_url": "https://api.github.com/users/shahmirDev/events{/privacy}",
    "received_events_url": "https://api.github.com/users/shahmirDev/received_events",
    "type": "User",
    "user_view_type": "public",
    "site_admin": false,
    "name": null,
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 3,
    "public_gists": 0,
    "followers": 0,
    "following": 0,
    "created_at": "2023-08-05T06:44:48Z",
    "updated_at": "2024-10-11T23:03:31Z"
}

app.get('/github', (req, res) => {
    res.json(gitHubData);
}); 

app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.get('/twitter', (req, res) => {
    res.send("Geoo");
})

app.get('/login', (req, res) => {
    res.send("<h1>Login</h1>");
})

app.get('/geo', (req, res) => {
    res.send("<h2>Geography</h2>");
})

app.listen(process.env.PORT || port, () => {
    console.log(`Example app listening on port ${port}`);
})
