import React from "react";
import { BottomNav } from "../../components/common";
import "./index.less";

import liquidationImg from '../../assets/images/liquidation2.jpeg';

const Liquidations = () => {
  return (
    <div>
      <h2>Liquidations</h2>
      <p>
        Liquidation is the process of selling a user’s collateral to compensate for the Composite borrowed from a vault in case the collateral locked drops below a certain value or if the interest that has been accrued overtime is not paid off causing the vault to go below the minimum Collateralization ratio.
      </p>
      <p>
        Liquidation is triggered when the user's collateral in the vault decreases in the amount due to a drop in the value of the collateral or if the net borrowed $CMST (inclusive of interest accrued) increases.
      </p>
      <p>
        This will cause the amount of $CMST borrowed against the loan increase in value which ultimately leads to the users vaults Collateralization ratio dropping below a minimum CR required initiating a liquidation.
      </p>
      <p>
        The user's collateral will be auctioned off to collect the debt which the protocol owns and subsequently his vault will be closed. The collateral is auctioned off to recover the $CMST debt along with the liquidation penalty.
      </p>

      <BottomNav 
        preNavLink="rewards"
        prevNavText="Rewards"
        nextNavLink="auctions"
        nextNavText="Auctions"
      />

    </div>
  );
};

export default Liquidations;