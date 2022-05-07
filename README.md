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
  
//copy and paster address to ../lib/constants.js  
  
//sanity localhost run. navigate to studio.  
sanity start  

On a web browser, go to localhost:3000 to interact with the Uniswap interface.
Go to localhost:3333 to interact with the user/transaction tracker supported by the Sanity.io interface.
