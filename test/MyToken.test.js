// test/MyToken.test.js

const { ethers, upgrades } = require("hardhat");
const assert = require("assert");

describe("tx0x1119", function () {
  it("deploys", async function () {
    const MyTokenV1 = await ethers.getContractFactory("MyTokenV1");
    // const MyTokenV2 = await ethers.getContractFactory("MyTokenV2");

    const tokenV1 = await upgrades.deployProxy(MyTokenV1, { kind: "uups" });
    assert((await tokenV1.name()) === "tx0x1119");
    const tokenV2 = await upgrades.upgradeProxy(tokenV1, MyTokenV2);
    assert((await tokenV2.version()) === "v2!");
  });
});
