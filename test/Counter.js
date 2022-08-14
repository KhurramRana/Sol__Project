const { expect } = require("chai");
const { ethers } = require("hardhat"); //Ethers connect to talk to BlockChain and Its Nodes

describe("Counter", () => {
  it("stores the count", async () => {
    const Counter = await ethers.getContractFactory("Counter");
    const counter = await Counter.deploy("My Counter", 1);
    const count = await counter.count();
    expect(count).to.equal(1);
    //Fetch the Count
    //Check the Count to make sure it is working
  });
});
