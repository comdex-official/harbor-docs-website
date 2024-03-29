import React from "react";
import { BottomNav } from "../../components/common";
import "./index.less";

const Collector = () => {
  return (
    <div>
      <h2>Collector</h2>
      <p>
        Collector module is where all the fees and income generated from the protocol will get accumulated. The Collector module will represent the surplus of the protocol. Drawdown, Stability, Stablemint and Liquidation fees are collected in this module and the LSR payout on the deposits in Locker is also sourced from this module.
      </p>
      <p>
        <b>Drawdown Fee:</b> The drawdown fee is a fixed amount of $CMST collected from the user's debt at every withdrawal of $CMST. The drawdown fee is deducted in $CMST and sent to the collector module, while the rest is transferred to the user.
      </p>
      <p>
        <b>Stability Fee:</b> This is the fee incurred by users who mint $CMST from their vaults. Upon repayment of their debt, the interest is deducted from their borrowed position and sent to the collector module.
      </p>
      <p>
        <b>Liquidation Penalty:</b> If a user gets liquidated, the asset auctioned off to recover the bad debt is slightly more than the debt by a fixed percentage. This extra $CMST received is sent to the collector module.
      </p>
      <p>
        <b>Stablemint Fee:</b> For every transaction with the stablemint module there is a fee charged in $CMST. This is accrued in the collector Module.
      </p>
      <p>
        <b>Locker Savings Rate:</b> This is the only deduction component of the collector module, where the interest earned by users is sourced from the collector module.
      </p>
      <p>
        This module has a Surplus Threshold and a Debt Threshold. In the ideal scenario, the $CMST will continue to accrue in this module and eventually exceed the Surplus Threshold, above which the protocol will buy back and burn Harbor tokens via Surplus auctions.
      </p>
      <p>
        In the case of bad debt, the $CMST in this module will continue to deplete, eventually going below the Debt Threshold. In such a scenario, HARBOR will be auctioned in a reverse style auction for fixed lots of $CMST. The $CMST will be sent to the Collector module to replenish it, while new HARBOR tokens will be minted and given to the winning bidder.
      </p>

      <BottomNav 
        preNavLink="locker"
        prevNavText="Locker"
        nextNavLink="rewards"
        nextNavText="Rewards"
      />

    </div>
  );
};

export default Collector;