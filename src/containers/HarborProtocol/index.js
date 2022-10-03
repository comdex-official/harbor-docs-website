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
        $HARBOR is the cosmos native token of the protocol which has 2 primary functions.
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
        <br />
        <li>
          <p>
            $HARBOR as a recapitalization source: Complementing its function as a governance token, $HARBOR token is also intended to maintain the health of the system in case of exceeding debt in the system and be the final backstop to re-peg Composite token in secondary markets ( during catastrophic events such as the black swan event).          </p>
          <p>
            If there are a multitude of bad debts existing in the system which do not generate revenue with the expected interest, the system surplus will start depleting. If the system surplus falls below a certain safety limit, then new $HARBOR tokens are minted and auctioned off via Debt Auctions in exchange for $CMST which stabilizes the surplus.
          </p>
          <p>
            Inversely, if the system is in a healthy state and if the surplus is growing at a steady-state and crosses above the surplus limits, then this is distributed to $veHARBOR token holders. This concept enables the protocol to align with long-term token holders, incentivize borrowers, and boost user participation and engagement with the system.          </p>
          <p>
            This nature of burning and minting $HARBOR token gives each holder a strong incentive to govern the system well.
          </p>
        </li>
      </ul>
      {/* <h3>Emissions</h3> */}
      {/* <p>
        In order to encourage $CMST adoption, 70% of the total supply will be handed to users in the form of various incentives. These 700 million tokens would be distributed over the course of roughly six years.
      </p>
      <p>
        Emissions will start at 2% of the total 700M allocated that make it 14M for the first week. For the subsequent week the remaining 686M (700M - 14M emissions from previous week) will be used and 2% of 686M will be emitted which makes the next week's emissions to 13,720,000.
      </p>
      <p>
        The amount of $HARBOR tokens locked in comparison to the circulating supply has a direct impact on the rate of emissions and reward distribution. However, regardless of the quantity of $HARBOR locked up, the long-term outlook is for emissions to decrease in the future.
        <ul>
          <li>
            $HARBOR token emission velocity is dynamic and is based on the percentage of the total supply that is locked in $veHARBOR.
          </li>
          <li>
            The bigger the proportion of $HARBOR tokens locked in $veHARBOR, the less intensive the distribution of emissions to $CMST borrowers.
          </li>
        </ul>
      </p>
      <p>
        $veHARBOR holders receive a rebase proportional to the weekly emissions to borrowers and the ratio of $veHARBOR to $HARBOR supply.
      </p>
      <p>
        The weekly rebase amount is calculated with the following formula: ,<br />
        <b>Weekly rebase </b> = Pending rewards *  emission rate * $veHARBOR locked ratio
      </p>
      <p>
        <b>$veHARBOR locked ratio</b> = Total $veHARBOR supply / (circulating harbor + total $veHARBOR supply)
      </p>
      <p>Sheet with different $veHARBOR locked ratio simulations:</p>
      <a href="https://docs.google.com/spreadsheets/d/1_8SVWjI7h_YS5MDKb-IQ27sPX8aEBqUR7-cssNoS5AM/edit#gid=0 " target="_blank">https://docs.google.com/spreadsheets/d/1_8SVWjI7h_YS5MDKb-IQ27sPX8aEBqUR7-cssNoS5AM/edit#gid=0 </a>
      <p>
        The amount of $HARBOR locked as $veHARBOR and the inflation rate of $HARBOR emissions have an inverse relationship. For instance, if only 0% of the $HARBOR is locked, all emissions will go to the vault owners, but if 100% of the $HARBOR is locked, emissions will completely go to $veHARBOR lockers.
      </p>
      <p>
        This ve(3,3) feature provides a general incentive for all users to lock as many $HARBOR tokens as possible so that the result is reduced circulating supply, reduced emissions, and consequently, fewer $HARBOR tokens available on the market.
      </p>
      <p>
        Due to the declining inflation design, annual inflation relative to the total supply will be lower in the long run than it is currently, regardless of the $HARBOR's future circulation supply and locking ratio.
      </p> */}
      {/* <h3>Vault voting</h3>
      <p>
        Incentive Voting for emissions is where users vote to determine the distribution of the weekly Harbor incentives across the different vaults.Users with $veHARBOR can participate in these votes.Votes are reset to zero each week and the voting cycle starts again.
      </p>
      <p>
        Holders of $veHARBOR vote on their chosen vaults to determine which vaults receive emissions during a particular week. Harbor emissions will be allocated in line with the total number of votes each vault receives. In return, voters receive 100% of the fees and external incentives gathered through the vaults.
      </p> */}
      {/* <h3>Rewards and incentives</h3>
      <p>
        Locking Harbor for $veHARBOR entitles you to earn protocol revenue that is earned from the fees collected from interests from borrowers, draw down fees and also liquidation fees that is earned from $CMST borrowers after the surplus threshold is crossed.
      </p>
      <p>
        These incentives would be sent to $veHARBOR lockers in the form of Harbor tokens, that is all the fees accumulated will be used to buy Harbor from market and distribute that Harbor to $veHARBOR lockers. All fees and protocol revenue would be sent in the form of Harbor tokens.
      </p>
      <h3>Incentives you earn for $veHARBOR lockers:</h3>
      <ol>
        <li>
          Part of the interest and fees that a protocol earns with adoption of $CMST is redistributed to $veHARBOR lockers.
        </li>
        <li>
          Weekly rebase amount of $veHARBOR is distributed based on the $veHARBOR to Harbor ratio, in this way your original position will stay undiluted with increasing emissions.This rebase amount in the form of $veHARBOR is proportionally locked for from the time received for the lock period chosen by user at time of locking.
        </li>
        <li>
          Protocols can incentivise minting of CMST with their token and also earn a larger amount of Harbor emissions for their tokens by incentivizing the $veHARBOR lockers to vote for their vaults. The external incentives work similar to the concept of ‘bribing’. Bribes can be added to whitelisted vaults and are distributed only to voters on that vault, proportionally to their share of vault votes.
        </li>
        <li>
          These rewards are available for claim after every week and are proportional to the voting power cast by a voter.
        </li>
        <li>
          Harbor incentive matrix:
          <p>
            <img src={incentiveMatrix} alt="Incentive Matrix" />
          </p>
        </li>
      </ol> */}
    </div>
  );
};

export default HarborProtocol;