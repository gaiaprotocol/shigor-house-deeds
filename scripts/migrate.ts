import { ethers } from "hardhat";

async function main() {
    const Migration = await ethers.getContractFactory("Migration");
    const migration = Migration.attach("0x06c35ebf6b988636950bb3b87453d92E487D8b81");
    await migration.deployed();
    
    await (await migration.migrate(0, 0)).wait();
    console.log("Migrated ShigorHouseDeeds");
}

main();
