//  hardhat.config.js

require("@nomiclabs/hardhat-ethers");
require("@openzeppelin/hardhat-upgrades");
require("@nomiclabs/hardhat-etherscan");
// require("@nomiclabs/hardhat-waffle");

// const { ethers } = require("hardhat");
let secret = require("./secret");

task("accounts", "Prints the list of accounts", async () => {
  const accounts = await ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

module.exports = {
  solidity: "0.8.2",
  networks: {
    ropsten: {
      url: secret.url,
      accounts: [secret.key],
    },
  },
  etherscan: {
    // Your API key for Etherscan
    // Obtain one at https://etherscan.io/
    apiKey: "9BC2IPE3VF84Z1AX9ZXYGEKSX6I1CUZQ1T",
  },
};
