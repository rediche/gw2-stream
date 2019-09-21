# GW2 Stream

GW2 Stream is a GW2 API to plain text, usually useful for streaming chatbots like Nightbot, Streamlabs Chatbot and Streamlabs Cloudbot.

## API

### Account

- [x] Name `/account/name`
- [x] Age `/account/age`
- [x] Server `/account/server` or `/account/world`

#### Mastery Points
- [x] Total `/account/mastery/points`
- [x] Core `/account/mastery/points/tyria`
- [x] Heart of Thorns `/account/mastery/points/maguuma`
- [x] Path of Fire `/account/mastery/points/desert`

#### Wallet

- [x] Gold `/account/wallet/gold`
- [x] Karma `/account/wallet/karma`
- [x] Laurels `/account/wallet/laurels`
- [x] Gems `/account/wallet/gems`
- [x] Badges of Honor `/account/wallet/badges-of-honor`
- [x] Skirmish Claim Tickets `/account/wallet/skirmish-claim-tickets`
 
### WvW
- [x] Rank `/account/wvw-rank`
- [x] Missing XP to rank 10K `/account/wvw-rank/missing-xp`
- [x] Kills `/wvw/stats/kills`
- [x] Matchup `/wvw/stats/matchup` or `/wvw/stats/match`

### PvP
- [x] Rank `/pvp/stats/rank`
- [ ] Rating `/pvp/stats/rating`

## Install

`npm i`

## Developing

`npm run serve` will give you hot-reloading through `nodemon`.

`npm start` will give you a regular node process.