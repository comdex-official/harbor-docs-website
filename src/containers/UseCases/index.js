import React from "react";
import { BottomNav } from "../../components/common";
import "./index.less";

const UseCases = () => {
  return (
    <div>
      <h2>Use Cases of the HARBOR Protocol</h2>
      <ul>
        <li>
          The process of minting composite begins with the opening of vaults by depositing collateral. The various vaults are classified on the basis of two characteristics:
          <ol type="a">
            <li>The collateral asset</li>
            <li>Vault’s risk type</li>
          </ol>
        </li>
        <li>
          There is a <b>drawdown fee</b> deducted on every vault <b>opening</b> which is a fixed percentage charged on the Composite borrowed. The drawdown fee is also charged on every subsequent borrow of Composite from open vaults. The drawdown fee collected is sent to the Collector module.
        </li>
        <li>
          Opening a vault creates a Vault ID specific to the wallet address.
        </li>
        <li>
          The outstanding Composite debt accrues interest per block which is added back to the outstanding composite debt. These interest rates vary across asset types and vault risk types, with the riskier combinations having higher interest rates.
        </li>
        <li>
          With the edit Vault feature, a user can modify his open Vault by either withdrawing his collateral, depositing more collateral, borrowing more Composite, or repaying his existing debt.
          <ol type="a">
            <li>
              Withdraw Collateral: A user can withdraw deposited collateral as long as the collateral ratio is above min collateral ratio
            </li>
            <li>
              Add Collateral: A user can deposit more collateral
            </li>
            <li>
              Repay Debt: A user can repay borrowed composite as long as the debt is above the debt floor
            </li>
            <li>
              Draw Debt: A user can draw more debt from the vault, as long as the collateral ratio is above min collateral ratio. Doing so also incurs a drawdown fee
            </li>
          </ol>
        </li>
        <li>
          Close Vault: With this functionality, a user can close his vault. The composite to be returned ( subject to availability in the wallet) is returned and the locked collateral is transferred to the user’s wallet.
        </li>
        <li>
          When debt is repaid, first the interest is deducted and transferred to the collector and then the debt is reduced.
        </li>
        <li>
          In the Earn feature, the User can deposit Composite in the Locker module and earn interest which is compounded and added back to the locker module. There is no bonding period, and the user can withdraw composite at any time.
        </li>
        <li>
          The interest earned in the locker module is subject to change for existing lockers, and this is reviewed periodically and changed via governance.
        </li>
        <li>
          Users can also interact with the Stablemint feature to make use of arbitrage opportunities by swapping USDC with $CMST
        </li>
        <li>
          The stablemint feature will have some basic transaction fee which will be a percentage of the transaction of the value being traded.
        </li>
        <li>
          Users can also partake in two types of auctions:
          <ol type="a">
            <li>Collateral Auctions,</li>
            <li>Debt Auctions</li>
          </ol>
        </li>
      </ul>

      <BottomNav
        preNavLink="reward-incentive"
        prevNavText="Rewards and incentives"
        nextNavLink="vaults"
        nextNavText="Vaults"
      />

    </div>
  );
};

export default UseCases;