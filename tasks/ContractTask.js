
task("balance", "Prints an account's balance")
  .addParam("contract", "The contract")
  .setAction(async (taskArgs) => {
    const contractAddr = taskArgs.contract;
    const First = await ethers.getContractFactory('First');

    const accounts = await ethers.getSigners();
    const signer = accounts[0];
    const First2 = await new ethers.Contract(contractAddr, First.interface, signer)

    let result = await First2.greet();

    console.log('Result is ' + result);
  });

module.exports = {};