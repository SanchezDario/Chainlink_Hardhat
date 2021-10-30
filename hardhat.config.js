require("@nomiclabs/hardhat-waffle");
require('dotenv').config();
require("@nomiclabs/hardhat-ethers");
require("./tasks/ContractTask.js");

const KOVAN_RPC = process.env.KOVAN_RPC;
const PRIVATE_KEY = process.env.PRIVATE_KEY;

module.exports = {

  defaultNetwork: 'kovan',
  networks: {
    hardhat: {},
    kovan: {
      url: KOVAN_RPC,
      accounts: [`0x${PRIVATE_KEY}`],
    }
  },

  solidity: {
    version: "0.8.7",
    // compilers: [
    //   {version: "0.6.7"},
    //   {version: "0.8.7"},
    // ]
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
    } } }
}