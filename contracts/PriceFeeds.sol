// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";

contract PriceFeeds {
    AggregatorV3Interface internal ethPriceFeed;
    AggregatorV3Interface internal btcPriceFeed;
    AggregatorV3Interface internal linkPriceFeed;

    /**
     * Network: Sepolia
     * Aggregator: ETH/USD
     * Address: 0x694AA1769357215DE4FAC081bf1f309aDC325306
     * Aggregator: BTC/USD
     * Address: 0x1b44F3514812d835EB1BDB0acB33d3fA3351Ee43
     * Aggregator: LINK/USD
     * Address: 0xc59E3633BAAC79493d908e63626716e204A45EdF
     */
    constructor() {
        ethPriceFeed = AggregatorV3Interface(
            0x694AA1769357215DE4FAC081bf1f309aDC325306
        );
        btcPriceFeed = AggregatorV3Interface(
            0x1b44F3514812d835EB1BDB0acB33d3fA3351Ee43
        );
        linkPriceFeed = AggregatorV3Interface(
            0xc59E3633BAAC79493d908e63626716e204A45EdF
        );
    }

    /**
     * Returns the latest Ether price.
     */
    function getLatestEthPrice() public view returns (int256) {
        (, int256 price, , , ) = ethPriceFeed.latestRoundData();
        // Returns int256 with 8 implied decimal points, as Solidity does not support floating-point numbers.
        // To convert the returned value to a human-readable format, divide it by 10^8 outside the contract.
        return price;
    }

    /**
     * Returns the latest Bitcoin price.
     */
    function getLatestBtcPrice() public view returns (int256) {
        (, int256 price, , , ) = btcPriceFeed.latestRoundData();
        // Returns int256 with 8 implied decimal points, as Solidity does not support floating-point numbers.
        // To convert the returned value to a human-readable format, divide it by 10^8 outside the contract.
        return price;
    }

    function getLatestLinkPrice() public view returns (int256) {
        (, int256 price, , , ) = linkPriceFeed.latestRoundData();
        // Returns int256 with 8 implied decimal points, as Solidity does not support floating-point numbers.
        // To convert the returned value to a human-readable format, divide it by 10^8 outside the contract.
        return price;
    }

    /**
     * Returns the latest Ether and Bitcoin prices.
     */
    function getLatestPrices()
        public
        view
        returns (int256 ethPrice, int256 btcPrice, int256 linkPrice)
    {
        ethPrice = getLatestEthPrice() / 1e8;
        btcPrice = getLatestBtcPrice() / 1e8;
        linkPrice = getLatestLinkPrice() / 1e8;
    }
}
