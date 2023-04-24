"use client"

import { Web3Button } from "@web3modal/react"
import { useAccount, useContractRead } from "wagmi"
import { priceFeedsAbi } from "@contracts/priceFeedsAbi.js"
import { useEffect, useState } from "react"

export const PriceFeeds = () => {
  const [priceArray, setPriceArray] = useState<undefined | string[]>(undefined)
  const { isConnected } = useAccount()
  const { data, isLoading } = useContractRead({
    address: "0x47A664cE40668B8822C366faBE9cb82AE4b1Bb8C", // deployed PriceFeeds contract on Sepolia
    abi: priceFeedsAbi,
    chainId: 11155111, // sepolia chain id
    functionName: "getLatestPrices",
  })

  useEffect(() => {
    setPriceArray(data?.toString().split(","))
  }, [data])

  return (
    <div className="flex flex-col gap-16 items-center">
      <Web3Button />
      {isConnected ? (
        <div>
          {!isLoading && priceArray ? (
            <div className="min-w-full table-auto max-w-lg">
              <table className="table-fixed w-full text-white text-shadow">
                <thead>
                  <tr className="bg-gray-800 text-left text-white">
                    <th className="px-6 py-3 text-sm font-semibold">Asset</th>
                    <th className="px-6 py-3 text-sm font-semibold">
                      Price in USD
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-gray-600">
                    <td className="px-6 py-4 text-sm">Ether</td>
                    <td className="px-6 py-4 text-sm ">{priceArray[0]}</td>
                  </tr>
                  <tr className="bg-gray-700">
                    <td className="px-6 py-4 text-sm ">Bitcoin</td>
                    <td className="px-6 py-4 text-sm ">{priceArray[1]}</td>
                  </tr>
                  <tr className="bg-gray-600">
                    <td className="px-6 py-4 text-sm ">LINK</td>
                    <td className="px-6 py-4 text-sm ">{priceArray[2]}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          ) : (
            <span>loading...</span>
          )}
        </div>
      ) : (
        <div className="flex flex-col text-center">
          <span>Connect your wallet</span> <br />
          <a
            className="text-sm text-blue-400"
            href="https://metamask.io/"
            target="_blank"
            rel="noreferrer"
          >
            {"Don't have a wallet? Get Metamask"}
          </a>
        </div>
      )}
    </div>
  )
}
