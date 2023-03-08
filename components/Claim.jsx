import { useContract, useContractWrite } from "@thirdweb-dev/react";

export default function BTNClaim(data) {
  const { contract } = useContract(
    "0x7b942Ee2fbDF56B2F99514F806689b2c124Da2Cc"
  );
  const { mutateAsync: claim, isLoading } = useContractWrite(contract, "claim");

  const call = async (data) => {
    try {
      const data = await claim([
        _receiver,
        _quantity,
        _currency,
        _pricePerToken,
        _allowlistProof,
        _data,
      ]);
      console.info("contract call successs", data);
    } catch (err) {
      console.error("contract call failure", err);
    }
  };
}
