import React from "react";
import { Link } from "react-router-dom";
import "./index.less";

const Composite = () => {
  return (
    <div>
      <h2>Composite ($CMST)</h2>
      <p>
        Composite ($CMST) is a stablecoin designed to represent purchasing power and is therefore soft pegged to $1; however, as the global macro landscape develops, that may be subject to change in the future.
      </p>
      <p>
        Inspired mainly by the robust and reliable model built by MakerDao, $CMST can be minted permissionless-ly as a debt against over-collateralized CDPs. Over-collateralized in nature, every Composite stablecoin generated is backed by excess collateral, and hence its supply is always less than the value of collateral locked in Harbor Protocol.
      </p>
      <p>
        Composite serves similar properties to money. Its various use cases are as follows:
      </p>
      <ul>
        <li>
          Composite acts as a store of value: A store of value is an asset that does not depreciate over time. Composite is intended to be a stable representation of purchasing power. On the Harbor Protocol, a single Composite coin will always represent $1, which is only subject to change if there is a shift in the global macro landscape.
        </li>
        <li>
           Composite acts as a medium of exchange: To be classified as a medium of exchange, an asset must represent a stable value that can be used to facilitate the purchase, sale, or exchange of goods or services. The Composite token is intended to be used for all such transactions in the various Comdex and IBC-enabled DeFi platforms.
        </li>
        <li>
          Composite as a Unit of Account: A unit of account is a standardized measurement of value defining the price of goods and services. Composite is soft pegged to $1 and will act as a standard value on Comdex’s dApps and various other IBC-enabled chains.
        </li>
      </ul>
    </div>
  );
};

export default Composite;