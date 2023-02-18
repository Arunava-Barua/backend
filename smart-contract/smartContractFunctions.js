const { ethers } = require("ethers");
const hre = require("hardhat");
const dotenv = require("dotenv");

const ContractJson = require("./NFTRent.json");

dotenv.config();

const abi = ContractJson.abi;
const API_KEY_MUMBAI = process.env.API_KEY_MUMBAI ;
const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS;

const verify = async (_nftHash, _renter) => {
  const alchemy = new hre.ethers.providers.AlchemyProvider(
    "maticmum",
    API_KEY_MUMBAI
  );

    const contract = new ethers.Contract(
      CONTRACT_ADDRESS,
      abi,
      alchemy
    );

    const txRes = await contract.verify(_nftHash, _renter);

    console.log("Response From contract interaction: ", txRes);

    return txRes;
  
};

module.exports = {verify};
