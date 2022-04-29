require("@nomiclabs/hardhat-waffle");

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  networks: {
    rinkeby: {
      url: 'https://eth-rinkeby.alchemyapi.io/v2/7NhziRg791MIe-n95Zt0dtlrvq51Njdd',
      accounts: [
        '3dc2bac359b54741040ae8b4f44a189d6c6d458a8ec2206a1d89cde8f71bbc9b',
      ],
    }
  }
};
