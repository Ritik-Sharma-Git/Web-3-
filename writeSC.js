const ethers= require("ethers");
const abi = require("./abi.json");
require("dotenv").config();
const {Wallet} = require("ethers");

async function writeContract() {
  const provider = new ethers.JsonRpcProvider("https://ethereum-sepolia-rpc.publicnode.com");
  const contractAddress = "0x5497123F78BD3543e1c5807Aa4A292caDA2d58c6";
  const privateKey = process.env.PRIVATE_KEY; 
  const wallet = new ethers.Wallet(privateKey, provider);
  const contractInstance = new ethers.Contract(contractAddress, abi, wallet);
  await contractInstance.store(1000);
  console.log("Transaction successful");
}

writeContract()