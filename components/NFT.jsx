import React, { useState } from "react";
import {
  ThirdwebNftMedia,
  useContract,
  useContractWrite,
  useNFT,
  useAddress,
} from "@thirdweb-dev/react";
import Link from "next/link";
import Claim from "./Claim";
const NFT = () => {
  const address = useAddress();
  const [quantity, setQuantity] = useState(1);
  const [modal, setModal] = useState(false);
  const [receiver, setReceiver] = useState("");
  const [allowlistProof, setAllowlistProof] = useState("");
  const [data, setData] = useState([]);

  // Connect to your NFT contract
  const { contract } = useContract(
    "0x7b942Ee2fbDF56B2F99514F806689b2c124Da2Cc"
  );
  // Load the NFT metadata from the contract using a hook
  const { data: nft, isLoading, error } = useNFT(contract, "0");
  console.log(nft, "metadata");
  if (isLoading) return <div>Loading...</div>;
  if (error || !nft) return <div>NFT not found</div>;
  const { name, description, external_url } = nft.metadata;

  return (
    <div className="flex flex-col w-6/12 bg-black/20 rounded-2xl  backdrop-blur-3xl mt-11 items-center justify-center">
      <h1 className="font-bold mb-4">{name}</h1>
      <ThirdwebNftMedia
        metadata={nft.metadata}
        className="w-6/12 rounded-2xl  "
      />
      <input
        type="number"
        value={quantity}
        className="bg-black/20 rounded-2xl  backdrop-blur-3xl mt-4 w-6/12 placeholder-white text-white p-2"
        onChange={(e) => setQuantity(e.target.value)}
        placeholder="Quantity"
      />
      <Claim />

      <Link href={external_url}>
        <a className="text-white font-bold mt-4">
          View on Tulum Crypto Fest page
        </a>
      </Link>
    </div>
  );
};

export default NFT;
