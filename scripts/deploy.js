// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
// const hre = require("hardhat");

// async function main() {
//   const currentTimestampInSeconds = Math.round(Date.now() / 1000);
//   const unlockTime = currentTimestampInSeconds + 60;

//   const lockedAmount = hre.ethers.utils.parseEther("0.001");

//   const Lock = await hre.ethers.getContractFactory("Lock");
//   const lock = await Lock.deploy(unlockTime, { value: lockedAmount });

//   await lock.deployed();

//   console.log(
//     `Lock with ${ethers.utils.formatEther(
//       lockedAmount
//     )}ETH and unlock timestamp ${unlockTime} deployed to ${lock.address}`
//   );
// }

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
// main().catch((error) => {
//   console.error(error);
//   process.exitCode = 1;
// });
const ethers =  require("ethers");
const url = "http://localhost:8545";
const provider = new ethers.providers.JsonRpcProvider(url);
const signer0 = provider.getSigner(0, provider);
const receiver = "0x58F464E287C832EaDB3EFdeC4a60a4255fc26026";

const testing_send_ether = async () => {
  const address = await signer0.getAddress();
  const params = [
    {
      from: address,
      to: receiver,
      value: ethers.utils.parseUnits("1", "ether").toHexString(),
    },
  ];

  const hash = await provider.send("eth_sendTransaction", params);
  console.log(hash);

  /* signer0
      .getBalance((blockTag = "latest"))
      .then((r) => console.log(ethers.utils.formatEther(r))); */
};

testing_send_ether();
