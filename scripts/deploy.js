// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//

const hre = require("hardhat");

async function main() {
  await hre.run('compile');

  const First = await hre.ethers.getContractFactory("First");
  const first = await First.deploy("Hello, Hardhat!");

  await first.deployed();

  console.log("first deployed to:", first.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
