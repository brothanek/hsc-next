"use client"

import { EthereumClient, w3mConnectors, w3mProvider } from "@web3modal/ethereum"
import { Web3Modal } from "@web3modal/react"
import { configureChains, createClient, WagmiConfig } from "wagmi"
import { mainnet, sepolia } from "wagmi/chains"
import React, { ReactNode } from "react"

const chains = [mainnet, sepolia]
const projectId = process.env.WALLETCONNECT_PROJECT_ID!
// Wagmi client
const { provider } = configureChains(chains, [w3mProvider({ projectId })])

const wagmiClient = createClient({
  autoConnect: true,
  connectors: w3mConnectors({ projectId, version: 1, chains }),
  provider,
})

// Web3Modal Ethereum Client
const ethereumClient = new EthereumClient(wagmiClient, chains)

export function Providers({ children }: { children: ReactNode }) {
  return (
    <React.Fragment>
      <WagmiConfig client={wagmiClient}>{children}</WagmiConfig>
      <Web3Modal
        projectId={process.env.WALLETCONNECT_PROJECT_ID!}
        ethereumClient={ethereumClient}
      />
    </React.Fragment>
  )
}
