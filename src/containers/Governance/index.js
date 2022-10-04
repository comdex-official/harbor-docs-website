import React from "react";
import { BottomNav } from "../../components/common";
import "./index.less";

const Governance = () => {
  return (
    <div>
      <h2>Governance</h2>
      <p>
        The HARBOR governance system and selection of the Locker Savings Rate (LSR) is a multi-step process that begins with the Harbor Protocol issuing a poll to HARBOR token holders. The poll is used to gather opinions on a number of risk parameters including the LSR. Once a poll has closed (after a couple of days), it can be used to influence a subsequent “Executive Vote” that, once passed by HARBOR token holders, implements the changes voted on.
      </p>
      <p>
        Total proposals: 12+1(for ESM)
      </p>
      <ul>
        <li>
          Create Pairs and Parameters for collateral Asset and CMST (Extended Pair vault)
        </li>
        <li>
          Update Pairs and parameters for collateral Asset and CMST
        </li>
        <li>
          Collector 
          <div>
            <div className="pl-2">Create</div>
            <ol>
              <li>Asset Pair</li>
              <li>Threshold ( upper and lower)</li>
              <li>LSR</li>
              <li>Lot size</li>
              <li>Bid factor</li>
            </ol>
          </div>
        </li>
        <li>
          Collector 
          <div>
            <div className="pl-2">Change</div>
            <ol>
              <li>LSR</li>
              <li>Threshold (upper and lower)- to be updated</li>
              <li>Lot size</li>
              <li>Bid factor</li>
            </ol>
          </div>
        </li>
        <li>
          Locker- create
          <ol >
            <li>Asset whitelist</li>
          </ol>
        </li>
        <li>Locker Rewards - Activate</li>
        <li>Locker Rewards - Deactivate</li>
        <li>Activate Liquidations throughout app</li>
        <li>Deactivate Liquidations throughout app</li>
        <li> Stabiity Fees - Activate throughout app</li>
        <li>Stabiity Fees - DeActivate throughout app</li>
        <li> Surplus/ Debt Auctions true or false per asset.</li>
        <li>ESM-to do</li>
      </ul>

      <BottomNav 
        preNavLink="auctions"
        prevNavText="Auctions"
        nextNavLink="stable-mint"
        nextNavText="StableMint"
      />

    </div>
  );
};

export default Governance