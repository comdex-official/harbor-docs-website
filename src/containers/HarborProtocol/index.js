import React from "react";
import { Link } from "react-router-dom";
import "./index.less";

const HarborProtocol = () => {
  return (
    <div>
      <h2>Harbor Protocol (Native token: $HARBOR)</h2>
      <p>
        Harbor protocol is the dApp on the Comdex chain (powered by the Cosmos SDK and CosmWasm smart contracts) that enables safelisted assets to be locked in Vaults and mint Composite. The protocol also facilitates users to earn interest by depositing Composite in its Locker module. The protocol also enables market makers and users to capitalize on arbitrage opportunities with its StableMint feature ensuring Composite maintains its peg in secondary markets.
      </p>
      <p>
        $HARBOR is the native CW20 token of the protocol which has 2 primary functions.
      </p>
      <ul>
        <li>
          <p>
            $HARBOR as a governance token: $HARBOR token holders are the primary stakeholders of the protocol. Every unit of the $HARBOR token entitles its holder to 1 vote, which is cast in governance polls that any $HARBOR owner can initiate.
          </p>
          <p>
            It is the responsibility of  $HARBOR holders and the community to govern the system with competence to ensure a healthy overcollateralized system with minimum bad debt.
          </p>
          <p>
            Some of the decisions a $HARBOR token holder can initiate a poll for and vote on are (Note:-Not an exhaustive list):
          </p>
          <ol type="A">
            <li>Whitelisting/Blacklisting an asset to be used as collateral</li>
            <li>Whitelisting/Blacklisting an asset to be used for StableMint</li>
            <li>Choose the oracles for a given asset</li>
            <li>Triggering an Emergency shutdown in case of an attack</li>
            <li>Modifying debt and earning interest rates for an asset class</li>
            <li>Updating the liquidation penalty protocol wide</li>
            <li>Modifying the debt floor and debt ceiling per asset class</li>
            <li>Spending from Surplus in case of special cases</li>
          </ol>
        </li>
        <li>
          <p>
            $HARBOR as a recapitalization source: Complementing its function as a governance token, $HARBOR token is also intended to maintain the health of the system in case of exceeding debt in the system and be the final backstop to re-peg Composite token in secondary markets ( during catastrophic events such as the black swan event).
          </p>
          <p>
            If there are a multitude of bad debts existing in the system which do not generate revenue with the expected interest, the system surplus will start depleting. If the system surplus falls below a certain safety limit, then new $HARBOR tokens are minted and auctioned off via Debt Auctions in exchange for $CMST which stabilizes the surplus. This action dilutes the share of $HARBOR token holders.
          </p>
          <p>
            Inversely, if the system is in a healthy state and if the surplus is growing at a steady-state, above certain surplus limits $CMST can be auctioned off in exchange for $HARBOR tokens via Surplus Auctions. The received $HARBOR tokens are burned off reducing the supply of the same and concentrating a token holder’s share.
          </p>
          <p>
            This nature of burning and minting $HARBOR token gives each holder a strong incentive to govern the system well.
          </p>
        </li>
      </ul>
    </div>
  );
};

export default HarborProtocol;