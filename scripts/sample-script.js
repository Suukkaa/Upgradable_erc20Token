// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.

// const hre = require("hardhat");
const { ethers, upgrades } = require("hardhat");

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  // We get the contract to deploy

  const MyTokenV1 = await ethers.getContractFactory("MyTokenV1");
  // const MyTokenV2 = await ethers.getContractFactory("MyTokenV2");

  const TokenV1 = await upgrades.deployProxy(MyTokenV1, { kind: "uups" });
  // const TokenV2 = await upgrades.upgradeProxy(
  //   "0x106F869ee8Aa1D30f0c3449D20A33bfB1C485F9f",
  //   MyTokenV2
  // );

  // const MyTokenV1 = await hre.ethers.getContractFactory("MyTokenV1");
  // const TokenV1 = await MyTokenV1.deploy();
  // await TokenV1.deployed();

  console.log("MyTokenV1 deployed to:", TokenV1.address);
  // console.log("MyTokenV1 to MyTokenV2:", TokenV2.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
