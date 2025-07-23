const ethers= require("ethers");
const abi = require("./abi.json");

async function readContract() {
   const provider = new ethers.JsonRpcProvider("https://ethereum.publicnode.com");
   const contractAddress = "0xE6889ae4600113cb058b1bCd2152Efa1c4CFFe27";
   const contractInstance = new ethers.Contract(contractAddress, abi, provider);
   const value = contractInstance.retrieve();
   console.log(value);
}

readContract()