import React, { useState } from "react";
import {
  ThirdwebNftMedia,
  useContract,
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
    "0x3153274cbd4093b85F0b8730CeE1Fe4C2e0BC585"
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
            contractAddress={"0x3153274cbd4093b85F0b8730CeE1Fe4C2e0BC585"}
            action={() =>
              claimNft({
                to: address, // Use useAddress hook to get current wallet address
                quantity: quantity,
                // options: {
                //   checkERC20Allowance: false,
                //   currencyAddress: "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
                //   pricePerToken: ethers.BigNumber.from(
                //     "1000000000000000000000000000"
                //   ),
              })
            }
            className="bg-black rounded-2xl w-6/12 backdrop-blur-3xl flex mt-4 p-2  items-center justify-center"
          >
            <a className="text-white font-bold mt-4 mb-3">1115 BUSD</a>
            <img
              src="https://imgs.search.brave.com/aPXTzo0dLEB8pK64OH6nanfRqBgDaNoLn70bsS_QpPo/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9jcnlw/dG9sb2dvcy5jYy9s/b2dvcy9iaW5hbmNl/LXVzZC1idXNkLWxv/Z28ucG5n"
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
