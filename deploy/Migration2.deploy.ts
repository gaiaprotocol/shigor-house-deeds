import { ethers } from "hardhat";

async function main() {
    const Migration = await ethers.getContractFactory("Migration2");
    const migration = await Migration.deploy(
        "0x29d05593116c443da54dabfb4e5322dea2fff8cd", // old
        "0x455Ee7dD1fc5722A7882aD6B7B8c075655B8005B", // new
    );
    await migration.deployed();

    const ShigorHouseDeeds = await ethers.getContractFactory("ShigorHouseDeeds");
    const shigorHouseDeeds = ShigorHouseDeeds.attach("0x455Ee7dD1fc5722A7882aD6B7B8c075655B8005B");
    await shigorHouseDeeds.grantRole("0x9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a6", migration.address);

    console.log(`Migration address: ${migration.address}`);
}

main();
