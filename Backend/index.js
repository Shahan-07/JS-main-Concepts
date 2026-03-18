require('dotenv').config() 
const express = require('express')
const app = express()
const port = 3000

const githubdata = {
  "login": "Shahan-07",
  "id": 114918076,
  "node_id": "U_kgDOBtmCvA",
  "avatar_url": "https://avatars.githubusercontent.com/u/114918076?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/Shahan-07",
  "html_url": "https://github.com/Shahan-07",
  "followers_url": "https://api.github.com/users/Shahan-07/followers",
  "following_url": "https://api.github.com/users/Shahan-07/following{/other_user}",
  "gists_url": "https://api.github.com/users/Shahan-07/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/Shahan-07/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/Shahan-07/subscriptions",
  "organizations_url": "https://api.github.com/users/Shahan-07/orgs",
  "repos_url": "https://api.github.com/users/Shahan-07/repos",
  "events_url": "https://api.github.com/users/Shahan-07/events{/privacy}",
  "received_events_url": "https://api.github.com/users/Shahan-07/received_events",
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
  "public_repos": 7,
  "public_gists": 0,
  "followers": 4,
  "following": 12,
  "created_at": "2022-10-03T10:38:01Z",
  "updated_at": "2025-12-15T13:30:07Z"
}

app.get('/github',(req,res)=>{
    res.json(githubdata);
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter',(req,res)=>{
    res.send('my twitter account');
})

app.get('/youtube',(req,res)=>{
    res.send('Welcome to youtube');
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})


console.log('welcome to node');
