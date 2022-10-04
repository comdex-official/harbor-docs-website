import React from "react";
import { BottomNav } from "../../components/common";
import "./index.less";

const Risk = () => {
  return (
    <div>
      <h2>Risk</h2>
      <h3>Vault Risk</h3>
      <p>For any user on the protocol, owning a Vault is inherently risky. There are different types of risks associated with owning a Vault which are categorized as: <b>Market Risks, System Exposure Risks</b>, and <b>Parameter Variability Risk</b>.</p>
      <h3>Market Risks</h3>
      <p>
        Using a Vault entails minting $CMST and transferring ownership of a user's assets to a smart-contract that can sell a user's asset if the market falls. All $CMST producing vaults have a separate Liquidation Price, which is the price at which a user's vault would be liquidated if the Collateralization ratio was not maintained.
      </p>
      <p>
        Maintaining a high Collateralization Ratio is a typical strategy among users to protect themselves from Market Risks and, as a result, Liquidation.
      </p>
      <h3>System Exposure Risks</h3>
      <p>The following are some of the system dangers linked with the Harbor Protocol's operation:</p>
      <ul>
        <li>Malicious hacks/attacks against the smart-contract infrastructure or Harbor protocol</li>
        <li>Black Swan events involving one or more collateral assets</li>
      </ul>
      <h3>Parameter Variability Risk</h3>
      <p>The owners of Vaults should be informed of the modifications to the Harbor protocol's numerous parameters that regulate the system. This translates to a financial risk for the vault owner, as the parameters will change over time and will not be the same as they were when the vault was first opened. The following is a list of few key parameters that are subject to change through governance :</p>
      <ul>
        <li>Stability Fees</li>
        <li>Debt Ceiling</li>
        <li>Liquidation Penalty</li>
      </ul>

      <BottomNav 
        preNavLink="mintburn"
        prevNavText="Mintburn"
        nextNavLink="tokenomics"
        nextNavText="Tokenomics"
      />

    </div>
  );
};

export default Risk