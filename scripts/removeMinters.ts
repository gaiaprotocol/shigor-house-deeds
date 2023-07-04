import { ethers } from "hardhat";

async function main() {
    const ShigorHouseDeeds = await ethers.getContractFactory("ShigorHouseDeeds");
    const shigorHouseDeeds = ShigorHouseDeeds.attach("0x455Ee7dD1fc5722A7882aD6B7B8c075655B8005B");
    await shigorHouseDeeds.revokeRole("0x9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a6", "0x524042c0C330F8db80adcD671965445366C48cb5");
    await shigorHouseDeeds.revokeRole("0x9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a6", "0x7d9ed01Ad0bbb047608E9De408995a429188bd58");

    console.log("Remove Minters");
}

main();
