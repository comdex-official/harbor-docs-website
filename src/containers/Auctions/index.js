import React from "react";
import { Link } from "react-router-dom";
import "./index.less";

import auctionImg from '../../assets/images/liquidation2.jpeg';

const Auctions = () => {
  return (
    <div>
      <h2>Auctions</h2>
      <p>
        There are three types of auctions that will be taking place in the protocol which are Surplus Auction, Debt Auction, and Collateral Auction. <br />
      </p>
      <h3>Surplus auction</h3>
      <p>
        In Surplus auctions, the Harbor protocol auctions off excess $CMST for HARBOR in order to reduce the $CMST surplus that has built up in the Collector module primarily from stability and liquidation fees. The HARBOR token collected from the auction in exchange of the surplus $CMST will be burned by the Protocol, thereby reducing the HARBOR supply. Users can place bids strategically to get more $CMST in exchange for the HARBOR.
      </p>
      <p>
        The surplus auctions will be triggered automatically when the surplus $CMST in the collector module exceeds the upper ceiling by a certain level. The excess $CMST will then be auctioned off using the English auction. Users bid increasing amount of $HARBOR tokens in exchange for a fixed lot of $CMST.
        Once the auction is complete the $CMST is transferred to the users wallet and the $HARBOR collected is burned through the mintburn module.
      </p>
      <p>
        For example, if the current bid on a 1000 $CMST is 10 HARBOR (a price of 100 $CMST per HARBOR), then the next bid would need to be more than 10 HARBOR i.e 10.2 Harbor. The mechanics of the auction will require users to bid at least 2% more than the previous bid, so in this example, the next possible bid would be a minimum of 10.2 HARBOR. 
      </p>
      <h3>Debt Auction</h3>
      <p>
        A debt auction is the process in which the Harbor protocol will mint and auction new HARBOR tokens for $CMST in order to recover the debt that has built up in the system. The $CMST that is used to buy the HARBOR reduces its supply in secondary markets and is added to the Collector module to replenish it back to safe levels above the minimum threshold level. 
      </p>
      <p>
        The debt auctions follow a Reverse Auction. This means that users will bid a fixed amount of $CMST for decreasing amounts of HARBOR. <br />Once the auction is complete $CMST is transferred to the Collector module. New $HARBOR token is minted via the MINTBURN module and transferred to the user’s wallet.
      </p>
      <p>
        For example, if the current bid is 1000 HARBOR or a price of 1000 $CMST/HARBOR, the next bid would need to be less than 1000 HARBOR. The mechanics of the auction is designed to make users bid at least 2% less than the previous bid, so in this example, the next possible bid would be a maximum of 980 HARBOR.
      </p>
      <h3>Collateral Auction</h3>
      <p>
        The Harbor platform uses Maker’s Liquidations 2.0 Dutch styled auctions for insufficiently collateralized Vault which settle instantly.  When a vault's collateralization ratio falls below its liquidation ratio, the user will lose entire access to his vault until the auction is carried out and the protocol is able to recover the debt to bring the Collateralization ratio back up to the safety level.
        These auctions are settled instantaneously giving advantage to auction participants who are risk free from market volatility. The price of the asset being auctioned decreases as per a fixed linear function allowing users to take profitable trades compared to external markets.
      </p>
      <h3>The Process:</h3>
      <p>
        An auction is started promptly to sell the transferred collateral from the Liquidations module for $CMST in an attempt to recover bad debt and to recollateriize the user’s vault. It does so according to a price calculated from the initial price of the collateral which linearly decreases with time elapsed since the auction began. Users can then buy the collateral at a price where they find it profitable compared to the external market price of the collateral in exchange for $CMST.
      </p>
      <p>
        The Dutch auction resets on two conditions when the auction has run for a sufficiently large time without the collateral being purchased or when the price of the collateral being auctioned has fallen below more than 50% of the initial price. In such a scenario, the protocol will recalculate the debt that the users vault own the protocol and will restart the auction at a new price at that particular time.
      </p>
      <p>
        The below formula is used to determine the quantity of the collateral asset which will get auctioned out in exchange for $CMST.
        <img className="my-3" src={auctionImg} alt="auction" />
      </p>
    </div>
  );
};

export default Auctions;