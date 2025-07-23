const ethers= require("ethers");
const abi = require("./abi.json");

async function readContract() {
   const provider = new ethers.JsonRpcProvider("https://ethereum-sepolia-rpc.publicnode.com");
   const contractAddress = "0x5497123F78BD3543e1c5807Aa4A292caDA2d58c6";
   const contractInstance = new ethers.Contract(contractAddress, abi, provider);
   const value =  await contractInstance.retrieve();
   console.log(value);
}

readContract()