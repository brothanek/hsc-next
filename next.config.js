/** @type {import('next').NextConfig} */
const { WALLETCONNECT_PROJECT_ID, } = process.env

const nextConfig = {
  experimental: {
    appDir: true,
  },
  env: {
    WALLETCONNECT_PROJECT_ID,
  },
}

module.exports = nextConfig
