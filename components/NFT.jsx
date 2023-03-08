import React from "react";
import { useContract, useContractMetadata } from "@thirdweb-dev/react";

const NFT = () => {
  const { contract, isLoading } = useContract(
    "0x7b942Ee2fbDF56B2F99514F806689b2c124Da2Cc"
  );
  const { data: contractMetadata, isLoading: loading } =
    useContractMetadata(contract);

  console.log(contractMetadata, "CONTRACT METADATA");

  return <div>NFT</div>;
};

export default NFT;
