## Prezentacja: https://devmeetings.github.io/devmeeting-blockchain/
W chain.json jest skonfigurowana prywatna sieć etherum, która najpewniej już nie działa, więc zalecam skorzystać z sieci testowej Kovan/Ropsten lub stworzyć lokalną, np z użyciem Ganache: https://truffleframework.com/ganache

`restarter.sh` resetuje parity gdy się wysypie, a to zdarza się często, więc dobrze odpalać przez skrypt

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# incremental rebuild (webpack)
$ npm run webpack
$ npm run start:hmr

# production mode
$ npm run start:prod
```
