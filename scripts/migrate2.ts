import { ethers } from "hardhat";

async function main() {
    const Migration = await ethers.getContractFactory("Migration2");
    const migration = Migration.attach("0x7d9ed01Ad0bbb047608E9De408995a429188bd58");
    await migration.deployed();
    
    for (let i = 0; i < 20; i += 1) {
        await (await migration.migrate(400 * i + 1, 400 * (i + 1))).wait();
        console.log(`Migrated ${400 * i + 1}-${400 * (i + 1)} ShigorSparrows`);
    }
    console.log("Migrated ShigorHouseDeeds");
}

main();
