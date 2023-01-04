import React from "react";
import { BottomNav } from "../../components/common";
import "./index.less";

const PriceOracles = () => {
  return (
    <div>
      <h2>Price Oracles</h2>
      <p>
        The band oracle module fetches the prices of assets listed on the cAsset app. A band packet is created containing the list of assets symbols for which price is to be fetched. Then the packet is relayed to the band chain, where the request is acknowledged, and the price is validated. Following this, the price is being sent to our chain through the packets using the same channel. After receiving the packets, the prices are mapped to the corresponding assets. The packets are relayed after every 20 blocks; hence prices are updated after every 20 blocks.
      </p>

      <BottomNav
        preNavLink="auctions"
        prevNavText="Auctions"
        nextNavLink="emergency-shutdown"
        nextNavText="Emergency Shutdown"
      />

    </div>
  );
};

export default PriceOracles