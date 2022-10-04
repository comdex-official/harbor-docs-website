import React from "react";
import { BottomNav } from "../../components/common";
import "./index.less";

import auctionImg from '../../assets/images/liquidation2.jpeg';

const Auctions = () => {
  return (
    <div>
      <h2>Auctions</h2>
      <p>
        There are two types of auctions that will be taking place in the protocol which are Debt Auction and Collateral Auction.
      </p>
      <h3>Debt Auction</h3>
      <p>
        A debt auction is the process in which the Harbor protocol will mint and auction new HARBOR tokens for $CMST in order to recover the debt that has built up in the system. The $CMST that is used to buy the HARBOR reduces its supply in secondary markets and is added to the Collector module to replenish it back to safe levels above the minimum threshold level.
      </p>
      <p>
        The debt auctions follow a Reverse Auction. This means that users will bid a fixed amount of $CMST for decreasing amounts of HARBOR.
      </p>
      <p>
        The Debt auction will run for the entire allotted duration unless only one bid is received till the bid duration. A bid duration is a time lesser than the auction duration and ensures if there is only one bid, then  the auction will close out and the user bidding will receive the HARBOR tokens rather than waiting for an entire auction duration.
      </p>
      <p>
        For example: Let's assume the auction duration is 6 hours and the bid duration is 3 hours. If the protocol receives only one bid during the first 3 hours then the auction will close out and the only bidder will receive the HARBOR tokens. However if there is more than one bid during the initial 3 hours then the auction will run for 6 hours with the last bidder receiving the HARBOR tokens.
      </p>
      <p>
        Once the auction is complete $CMST is transferred to the Collector module. New $HARBOR token is minted via the Tokenmint module and transferred to the user’s wallet.
      </p>
      <p>
        For example, if the current bid is 1000 HARBOR or a price of 1000 $CMST/HARBOR, the next bid would need to be less than 1000 HARBOR. The mechanics of the auction is designed to make users bid at least 2% less than the previous bid, so in this example, the next possible bid would be a maximum of 980 HARBOR.
      </p>

      <h3>Collateral Auction</h3>
      <p>
        The HARBOR platform uses Maker’s Liquidations 2.0 Dutch styled auctions for insufficiently collateralized Vault which settle instantly. When a user’s vault's collateralization ratio falls below the required minimum collateralization ratio, the user will lose entire access to his vault until the auction is carried out and the protocol is able to recover the debt.
      </p>
      <p>
        These auctions are settled instantaneously giving advantage to auction participants who are risk free from market volatility. The price of the asset being auctioned decreases as per a fixed linear function allowing users to take profitable trades compared to external markets.
      </p>

      <h3>The Process:</h3>
      <p>
        An auction is started promptly to sell the transferred collateral for $CMST in an attempt to recover debt. It does so according to a price calculated from the initial price of the collateral which linearly decreases with time elapsed since the auction began. Users can then buy the collateral at a price where they find it profitable compared to the external market price of the collateral in exchange for $CMST.
      </p>
      <p>
        The Dutch auction resets when it has run for the entire duration without sufficient collateral being purchased to recover the initial debt. In such a scenario, the protocol will recalculate the debt that the users vault own the protocol and will restart the auction at a new price at that particular time.
      </p>
      <p>
        The amount recovered by protocol after auctioning of the assets is given by the following formula :
      </p>
      <p>
        <b>$CMST recovered by protocol = </b>Users loan  amount+ Liquidation Penalty
      </p>
      <p>
        Any collateral left after the auction once the protocol has recovered its debt goes to the user's wallet whose vault had been liquidated.
      </p>
      <p>
        The protocol burns the the CMST collected from the auction to close out the user vault and the Liquidation penalty goes to the collector module of the protocol which is given as follow:
      </p>
      <p>
        <b>$CMST sent to Collector = </b>$CMST collected from Auction - $CMST Burnt
      </p>

      <BottomNav 
        preNavLink="liquidations"
        prevNavText="Liquidations"
        nextNavLink="governance"
        nextNavText="Governance"
      />

    </div>
  );
};

export default Auctions;