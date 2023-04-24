export const priceFeedsAbi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "getLatestBtcPrice",
    outputs: [
      {
        internalType: "int256",
        name: "",
        type: "int256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getLatestEthPrice",
    outputs: [
      {
        internalType: "int256",
        name: "",
        type: "int256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getLatestLinkPrice",
    outputs: [
      {
        internalType: "int256",
        name: "",
        type: "int256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getLatestPrices",
    outputs: [
      {
        internalType: "int256",
        name: "ethPrice",
        type: "int256",
      },
      {
        internalType: "int256",
        name: "btcPrice",
        type: "int256",
      },
      {
        internalType: "int256",
        name: "linkPrice",
        type: "int256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
]
