# Uniswap-Clone
Uniswap Project

To run this web app, follow these instructions.
Pull from this repo.

On Command-Line/Terminal, execute these commands:
//Dependencies to install
npm install --global yarn

//cd into client directory. To run server.
yarn dev

//cd to studio. install sanity
npm install -g @sanity/cli

// navigate to smart_contract dir. run this to get deployed address
npx hardhat run scripts/deploy.js --network rinkeby

//copy address to ../lib/constants.js

//sanity localhost run. navigate to studio.
sanity start

