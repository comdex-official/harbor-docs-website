import React from "react";
import { Link } from "react-router-dom";
import "./index.less";

import liquidationImg from '../../assets/images/liquidation2.jpeg';

const Liquidations = () => {
  return (
    <div>
      <h2>Liquidations</h2>
      <p>
        Liquidation is the process of selling a user’s collateral to compensate for the Composite borrowed from a vault in case the collateral locked drops in value or if the interest that has been accrued overtime is not paid off.. Liquidation is triggered when the user's collateral in the vault decreases in the amount due to a drop in the value of the collateral or if the net borrowed $CMST (inclusive of interest accrued) increases. This will cause the amount of $CMST borrowed against the loan increase in value which ultimately leads to his Collateralization ratio dropping below a set Liquidation ratio initiating a liquidation. The user's collateral will be auctioned off to bring the collateralization ratio back up to the safety level. The collateral is auctioned off to recapitalize $CMST debt + liquidation penalty to ensure the system is sufficiently collateralized.
      </p>
      <p>
        The liquidation mechanism is designed to be impartial and fair. When a vault gets liquidated, only a limited portion of the collateral is sold to recover the debt and restore the collateralization ratio to minimum safety levels. <br />
        There is also a liquidation penalty charged based on the amount of Composite debt to be recovered. The formula of the same is:
        <img className="my-2" src={liquidationImg} alt="Liquidations" /> 
        Until the auction is completed and the collateral ratio is restored for a vault, the vault is locked and a user cannot access it.  
      </p>
    </div>
  );
};

export default Liquidations;