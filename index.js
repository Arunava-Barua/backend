const express = require("express");
const app = express();

const {verify} = require("./smart-contract/smartContractFunctions")

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/verify/:renter/:nft_hash", async (req, res) => {
  let {nft_hash, renter} = req.params;
  nft_hash= nft_hash.toString();
  renter = renter.toString();
  res.send(`Verified for renter: ${renter} NFT: ${nft_hash}`);

  const result = await verify(nft_hash, renter);
  console.log("Response From API call: ", result);

  return result;
});
 

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
