import React from "react";
import { Link } from "react-router-dom";
import { BottomNav } from "../../components/common";
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

      <h2>How the Peg is stabilized</h2>
      <p>
        In the Harbor Protocol, 1 $CMST is always treated as 1 USD. <br />
        However, in secondary markets this value may deviate from its peg based on $CMST’s supply and demand. <br />
        To stabilize the peg, there are various mechanisms in place as discussed below:
      </p>
      <ul>
        <li>
          Monetary Policy:
          <div className="pl-3">
            Every $CMST minted accrues a stability fee on it until it is repaid. <br />
            Similarly, $CMST locked in the LSR also accrues rewards, which is the Locker savings rate. <br />
            Now, when the demand for Composite in secondary markets is high, it will result in $CMST being traded above 1 USD. <br />
            If over time, the trend continues, then the Stability rates and the LSR will be decreased via governance by $HARBOR token holders. <br />
            Now this will incentivize users to mint more $CMST at cheaper rates and will disincentivize users locking up $CMST in Locker.
This would increase the supply of $CMST and stabilize the peg. <br /> <br />
            In the other scenario, when the demand for Composite in secondary markets is less, and the supply is more, it will result in $CMST being traded below 1 USD. <br />
            If over time, the trend continues, then the Stability rates and the LSR will be increased via governance by $HARBOR token holders. <br />
            Now this will disincentivize users to mint more $CMST and will incentivize users to lock up $CMST in Locker. Users with existing $CMST debt will also close their existing postings by buying $CMST from the markets. <br />
            This would decrease the supply of $CMST and stabilize the peg.  <br /> <br />
            It is important to note that the monetary policy has a slow burner effect and it takes time for the policy changes to repeg $CMST. 
          </div>
        </li>
      </ul>
      <p>
        If the market price of $CMST is above 1 USD, HARBOR holders can choose to gradually decrease the Locker Savings Rate, which will reduce demand and should reduce the market price of $CMST toward the 1USD Target Price.
      </p>

      <BottomNav 
        preNavLink="introduction"
        prevNavText="Introduction"
        nextNavLink="harbor-protocol"
        nextNavText="Introducing Harbor "
      />

    </div>
  );
};

export default Composite;