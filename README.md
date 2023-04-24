# Hybrid Smart Contracts Demo

This repository contains a live demo of a hybrid smart contract application that retrieves the latest cryptocurrency prices using Chainlink oracles. The frontend is built using Next.js.

[Live demo](https://hsc-next.vercel.app/)

## Prerequisites
- Node.js (LTS version recommended)
- Yarn (Optional, you can also use npm)
- [WalletConnect account](https://cloud.walletconnect.com/sign-in)

## Local Deployment

To deploy the application locally, follow these steps:

1. Clone the repository and navigate to the project directory:

`git clone https://github.com/your-username/hsc-next.git`
`cd hsc-next`

2. Install dependencies:

`yarn`
or
`npm i`

3. Create a `.env.local` file in the project root directory and enter your WalletConnect project ID obtained from WalletConnect Cloud.
WALLETCONNECT_PROJECT_ID=your_project_id_here

4. Run the development server:

`yarn dev`
or
`npm run dev`

5. Open your browser and navigate to http://localhost:3000 to see the application in action.




