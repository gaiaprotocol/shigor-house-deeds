import { ethers } from "hardhat";

async function main() {
    const ShigorHouseDeeds = await ethers.getContractFactory("ShigorHouseDeeds");
    const shigorHouseDeeds = ShigorHouseDeeds.attach("0x455Ee7dD1fc5722A7882aD6B7B8c075655B8005B");
    await shigorHouseDeeds.deployed();
    
    await (await shigorHouseDeeds.setBaseURI("https://app-server.gaia.cc/metadata/standard/shigor-house-deeds/")).wait();
    console.log("Set base URI");
}

main();
