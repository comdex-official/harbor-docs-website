import React from "react";
import { Link } from "react-router-dom";
import { BottomNav } from "../../components/common";
import "./index.less";

const HarborProtocol = () => {
  return (
    <div>
      <h2>Harbor Protocol (Native token: $HARBOR)</h2>
      <p>
        HARBOR protocol is the dApp on the Comdex chain (powered by the Cosmos SDK and CosmWasm smart contracts) that enables safelisted assets to be locked in Vaults and mint Composite. The protocol also facilitates users to earn interest by depositing Composite in its Locker module. The protocol also enables market makers and users to capitalise on arbitrage opportunities with its StableMint feature ensuring Composite maintains its peg in secondary markets.
      </p>

      <h2>veHARBOR as a governance token</h2>
      <p>
        veHARBOR token holders are the primary stakeholders of the protocol. Every unit of the veHARBOR token entitles its holder to 1 vote, which is cast in governance polls that any veHARBOR owner can initiate. More on this in the Governance section.
      </p>
      <h2>$HARBOR as a recapitalization source</h2>
      <p>
        Complementing its function as a governance token, $HARBOR token is also intended to maintain the health of the system in case of exceeding debt in the system and be the final backstop to re-peg Composite token in secondary markets ( during catastrophic events such as the black swan event).
      </p>
      <p>
        If there are a multitude of bad debts existing in the system which do not generate revenue with the expected interest, the system surplus will start depleting. If the system surplus falls below a certain safety limit, then new $HARBOR tokens are minted and auctioned off via Debt Auctions in exchange for $CMST.
      </p>

      <p>
        Inversely, if the system is in a healthy state and if the surplus is growing at a steady-state and crosses above the surplus limits, then this is distributed to $veHARBOR token holders.
      </p>

      <p>
        This concept enables the protocol to align with long-term token holders, incentivize borrowers, and boost user participation and engagement with the system.
      </p>

      <BottomNav
        preNavLink="composite"
        prevNavText="Composite ($CMST)"
        nextNavLink="emissions"
        nextNavText="Emissions"
      />

    </div>
  );
};

export default HarborProtocol;