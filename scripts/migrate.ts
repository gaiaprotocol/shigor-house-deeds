import { ethers } from "hardhat";

async function main() {
    const Migration = await ethers.getContractFactory("Migration");
    const migration = Migration.attach("0x524042c0C330F8db80adcD671965445366C48cb5");
    await migration.deployed();
    
    for (let i = 0; i < 20; i += 1) {
        await (await migration.migrate(400 * i + 1, 400 * (i + 1))).wait();
        console.log(`Migrated ${400 * i + 1}-${400 * (i + 1)} ShigorSparrows`);
    }
    console.log("Migrated ShigorHouseDeeds");
}

main();
