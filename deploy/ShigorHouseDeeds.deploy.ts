import { ethers } from "hardhat";

async function main() {
    const ShigorHouseDeeds = await ethers.getContractFactory("ShigorHouseDeeds");
    const shigorHouseDeeds = await ShigorHouseDeeds.deploy();
    await shigorHouseDeeds.deployed();

    console.log(`ShigorHouseDeeds address: ${shigorHouseDeeds.address}`);
}

main();
