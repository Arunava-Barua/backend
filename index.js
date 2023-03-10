const express = require("express");
const app = express();

const cors = require('cors');
app.use(cors({
  origin: '*'
}));

const { verify } = require("./smart-contract/smartContractFunctions");

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/verify/:renter/:nft_hash", async (req, res) => {
  let { nft_hash, renter } = req.params;
  nft_hash = nft_hash.toString();
  renter = renter.toString();
  const result = await verify(nft_hash, renter);
  res.json({ verified: result });

  console.log("Response From API call: ", result);

  return result;
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
