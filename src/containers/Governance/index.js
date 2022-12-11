import React from "react";
import { BottomNav } from "../../components/common";
import "./index.less";

const Governance = () => {
  return (
    <div>
      <h2>Governance</h2>
      <p>
        $HARBOR protocols governance and tokenomics model adheres to ve (3,3). Holders of $HARBOR tokens have the option to lock their tokens for up to four months in exchange for veHARBOR, it gives increased voting power to determine which vault receives the most veHARBOR emissions for borrowing $CMST. $HARBOR protocol's governance will become increasingly decentralised and diverse. veHARBOR will be used to confer voting power. The success of decentralised governance depends on the alignment of governance token holders and system stakeholders. People who lock their $HARBOR tokens are the people who interact with the protocol in some way, are invested in its future growth, and want a say in how it is governed.      </p>
      <p>
        veHARBOR token holders are the primary stakeholders of the protocol. Every unit of the veHARBOR token entitles its holder to 1 vote, which is cast in governance polls that any veHARBOR owner can initiate.
      </p>
      <p>
        It is the responsibility of veHARBOR holders and the community to govern the system with competence to ensure a healthy overcollateralized system with minimum bad debt.
      </p>
      <ul>
        <li>
          Some of the decisions a veHARBOR token holder can initiate a poll for and vote on are (Note:-Not an exhaustive list):
            <ol type="A">
              <li>Whitelisting/Blacklisting an asset to be used as collateral</li>
              <li>Whitelisting/Blacklisting an asset to be used for StableMint</li>
              <li>Choose the oracles for a given asset</li>
              <li>Modifying debt and earning interest rates for an asset class</li>
              <li>Updating the liquidation penalty protocol wide</li>
              <li>Modifying the debt floor and debt ceiling per asset class</li>
            </ol>
        </li>
      </ul>

      <BottomNav
        preNavLink="tokenomics"
        prevNavText="Tokenomics"
        nextNavLink="Faq"
        nextNavText="Faq"
      />

    </div>
  );
};

export default Governance