# kindly-app
48-hour hackathon project for DEVS 2022 Hackathon @ UOA

<img width="800" alt="image" src="https://user-images.githubusercontent.com/19633284/178218637-1d7e00d9-40f6-4ca4-af0c-7ceea9761a21.png">

### How to run

`.env` files inside `packages/client` and `packages/api` with the following contents.

```
# packages/client

REACT_APP_API_ENDPOINT=http://localhost:9000
HTTPS=true (required for Slack auto-redirect)

# packages/api

MONGO_URI=<mongo atlas/db connection string>
SLACK_BOT_TOKEN=<bot token from slack>
SLACK_SIGNING_SECRET=<slack signing secret>

```

Afterwards, run the following two processes `yarn dev-client` and `yarn dev-api`.

The website will now be deployed on `https://localhost:3000`.

NB: Some additional configuration needed on MongoDB atlas (creating a database named `kindly-dev`) and on Slack where direct URL is `https://localhost:3000/onboarding/slack`

### Tech stack

Written and developed in Typescript, Javascript and NodeJS using yarn workspaces.

Frameworks used include React, styled-components, Material UI, MongoDB, Express and Slack Bolt API.



### Contributors

- Raymond Feng
- Daniel Torrey
- Youxiang Lei
- Brendan Zhou
- Harshal Damania
- Eve Zhang

### Other screenshots of project

<img width="800" alt="Screen Shot 2022-07-11 at 8 11 46 PM" src="https://user-images.githubusercontent.com/19633284/178218753-e49ec7b4-75b1-4384-a506-6c9692ad4b8f.png">
<img width="800" alt="Screen Shot 2022-07-11 at 8 11 56 PM" src="https://user-images.githubusercontent.com/19633284/178218779-7f80e877-b010-4e79-96b1-8f7c58973f8a.png">
