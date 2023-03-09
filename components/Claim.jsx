import {
  useContract,
  useContractWrite,
  useAddress,
  Web3Button,
} from "@thirdweb-dev/react";

export default function Claim({ data }) {
  const address = useAddress();
  const { contract } = useContract(
    "0x7b942Ee2fbDF56B2F99514F806689b2c124Da2Cc"
  );
  const { mutateAsync: claim, isLoading } = useContractWrite(contract, "claim");

  const call = async (data) => {
    try {
      const data = await claim([
        address,
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

  return (
    <button
      onClick={() => {
        call(data);
      }}
      className="bg-black rounded-2xl w-6/12 backdrop-blur-3xl mt-4 p-2  "
    >
      <a className="text-white font-bold mt-4">Claim</a>
    </button>
  );
}
