import React from "react";
import { Link } from "react-router-dom";
import "./index.less";

import tokenomicsImg from '../../assets/images/Tokenomics_1.png';

const Tokenomics = () => {
  return (
    <div>
      <h2>Tokenomics</h2>
      <p>
        The supply of the HARBOR token will be 1 Billion tokens which are distributed as follow:
      </p>
      <ul>
        <li>
          <b>70% Emissions</b> will be distributed as incentives over a period of 6 years to the community which will be split into CMST minters and $veHARBOR lockers.
        </li>
        <li>
          <b>15% Airdrop</b>  to various communities based on different tasks
        </li>
        <li>
          <b>15% for the Team </b>  to be vested for 2 years with a 6 month cliff
          <p className="harbor_distribution_container">
            <img src={tokenomicsImg} alt="Harbor Distribution" className="ml-4 harbor_distribution" />
          </p>
        </li>
      </ul>
      <p>
        With nearly 85% of the tokens being given away as community incentives, $HARBOR has the most distinctive and community-focused tokenomics.
      </p>
      <p>
        From the allocated emissions, 5% of the actual emissions that are distributed each week depending on the $veHARBOR/Harbor ratio will be sent to the team address in order to finance ongoing costs and all upcoming development activities.
      </p>
      <p>
        To manage its governance and utility, $HARBOR will use two tokens:
      </p>
      <ul>
        <li>
          $HARBOR — Protocol utility token
        </li>
        <li>
          $veHARBOR — Curve pioneered the use of Ve (Vote Escrow), a model that allows tokens to be distributed in alignment with long-term token holders and protocol supporters. The lock period for $veHARBOR tokens is in the form of an NFT (non-fungible token).
        </li>
      </ul>
      <p>
        $CMST borrowers on the $HARBOR protocol are rewarded with $HARBOR through emissions.
      </p>
      <p>
        $HARBOR holders can lock their tokens and receive $veHARBOR (also known as a veNFT) in exchange. Additional tokens can be added to the veNFT at any time.The longer they lock for, the more $veHARBOR they receive. You can participate in governance by locking.
      </p>
      <p>
        Here’s an example of how the locking would work
      </p>
      <ul>
        <li>
          1000 $HARBOR locked for 4 years will become 1000 $veHARBOR
        </li>
        <li>
          1000 $HARBOR locked for 1 year will become 250 $veHARBOR
        </li>
        <li>
          1000 $HARBOR locked for 1 week will become nearly 4.79 $veHARBOR
        </li>
      </ul>
      <h3>Calculations:</h3>
      <p>
        1 week = 1000/208 (208 weeks in 4 years) <br />
        1 month = 1000/48 (48 months is 4 years) <br />
        1 year =1000/4 ( to calculate single year) <br />
        4 year = 1000
      </p>
      <p>
        The longer the vesting time, the higher the voting power (voting weight) and rewards the $veHARBOR holder receives.
      </p>
      <h3>The concept of ve(3,3):</h3>
      <p>
        The ve(3,3) concept, which was first proposed by Andre Cronje and then implemented in Solidly, requires that weekly token emissions be adjusted to a portion of the circulating supply. ve(3,3) is a combination of vote escrowed model conceptualised by curve and the (3,3) concept by olympus dao.
      </p>
      <h3>Read more about how the ve(3,3) model works here:</h3>
      <a href="https://andrecronje.medium.com/solidly-feature-updates-and-launch-date-97be7e50e282" target="_blank">https://andrecronje.medium.com/solidly-feature-updates-and-launch-date-97be7e50e282 </a>
    </div>
  );
};

export default Tokenomics