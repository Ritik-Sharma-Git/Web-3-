const ethers = require("ethers");

async function fetchAccountBalance(){
  const provider = new ethers.JsonRpcProvider("https://ethereum.publicnode.com");
  const balance = await provider.getBalance("0xbB4C064fe823f912617B507E1bC8c6F739a6B7eF");
  const etherBalance = ethers.formatEther(balance);
  console.log(etherBalance);
}
fetchAccountBalance()