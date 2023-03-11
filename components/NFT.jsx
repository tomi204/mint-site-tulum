import React, { useState } from "react";
import {
  ThirdwebNftMedia,
  useContract,
  useContractWrite,
  useNFT,
  useAddress,
  useClaimNFT,
  Web3Button,
} from "@thirdweb-dev/react";
import Link from "next/link";
import { BigNumber, ethers } from "ethers";
const NFT = () => {
  const address = useAddress();
  const [quantity, setQuantity] = useState(1);

  // Connect to your NFT contract
  const { contract } = useContract(
    "0x7b942Ee2fbDF56B2F99514F806689b2c124Da2Cc"
  );
  const { mutate: claimNft } = useClaimNFT(contract);

  // Load the NFT metadata from the contract using a hook
  const { data: nft, isLoading, error } = useNFT(contract, "0");
  console.log(nft, "metadata");
  if (isLoading) return <div>Loading...</div>;
  if (error || !nft) return <div>NFT not found</div>;
  const { name, description, external_url } = nft.metadata;
  console.log(nft.metadata, "metadata");
  return (
    <div className="flex flex-col md:w-6/12 w-full bg-white/20 rounded-2xl  backdrop-blur-xl p-4 mt-11 items-center  text-white justify-center">
      <h1 className="font-bold mb-4">
        NFT Tulum Crypto Fest - VIP Membership Passport
      </h1>
      <div className="flex w-full ">
        <ThirdwebNftMedia
          metadata={nft.metadata}
          className="w-6/12 rounded-2xl  "
        />
        <div className="flex flex-col w-6/12 justify-center items-center">
          <Web3Button
            contractAddress={"0x7b942Ee2fbDF56B2F99514F806689b2c124Da2Cc"}
            action={() =>
              claimNft({
                to: address, // Use useAddress hook to get current wallet address
                quantity: quantity,
                options: {
                  checkERC20Allowance: false,
                  currencyAddress: "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
                  pricePerToken: ethers.BigNumber.from(
                    "1000000000000000000000000000"
                  ),
                },
              })
            }
            className="bg-black rounded-2xl w-6/12 backdrop-blur-3xl flex mt-4 p-2  items-center justify-center"
          >
            <a className="text-white font-bold mt-4 mb-3">0.76 MATIC</a>
            <img
              src="https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/polygon/info/logo.png"
              alt="ethereum"
              className="w-4 h-4 ml-2 mt-4 mb-3"
            />
          </Web3Button>
          {/* <ClaimETH data={eth} /> */}
          <Web3Button
            contractAddress={"0x7b942Ee2fbDF56B2F99514F806689b2c124Da2Cc"}
            action={() =>
              claimNft({
                to: address, // Use useAddress hook to get current wallet address
                quantity: quantity,
              })
            }
            className="bg-black rounded-2xl w-6/12 backdrop-blur-3xl flex mt-4 p-2  items-center justify-center"
          >
            <a className="text-white font-bold mt-4 mb-3">0.76 WETH</a>
            <img
              src="https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/info/logo.png"
              alt="ethereum"
              className="w-4 h-4 ml-2 mt-4 mb-3"
            />
          </Web3Button>
          {/* <ClaimETH data={eth} /> */}
          <Web3Button
            contractAddress={"0x7b942Ee2fbDF56B2F99514F806689b2c124Da2Cc"}
            action={() =>
              claimNft({
                to: address, // Use useAddress hook to get current wallet address
                quantity: quantity,
                options: {
                  checkERC20Allowance: false,
                  currencyAddress: "0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619",
                  pricePerToken: ethers.BigNumber.from("750000000000000000"),
                },
              })
            }
            className="bg-black rounded-2xl md:w-4/12 w-4/12 backdrop-blur-3xl flex mt-4 p-2  items-center justify-center"
          >
            <a className="text-white font-bold mt-4 mb-3">1,111 USDT</a>
            <img
              src="https://imgs.search.brave.com/Tsyhj0t2TPKzJ8s94rNBHw-9vJbZTvgso2SvPxogSVg/rs:fit:200:200:1/g:ce/aHR0cHM6Ly9zMi5j/b2lubWFya2V0Y2Fw/LmNvbS9zdGF0aWMv/aW1nL2NvaW5zLzIw/MHgyMDAvODI1LnBu/Zw"
              alt="ethereum"
              className="w-4 h-4 ml-2 mt-4 mb-3"
            />
          </Web3Button>
        </div>
      </div>
      <input
        type="number"
        value={quantity}
        className="bg-black/20 rounded-2xl  backdrop-blur-3xl mt-4 w-6/12 placeholder-white text-white p-2"
        onChange={(e) => setQuantity(e.target.value)}
        placeholder="Quantity"
      />
      <Link href={external_url}>
        <a className="text-white font-bold mt-4">
          View on Tulum Crypto Fest page
        </a>
      </Link>
    </div>
  );
};

export default NFT;
