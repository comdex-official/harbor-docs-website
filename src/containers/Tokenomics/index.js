import React from "react";
import { Link } from "react-router-dom";
import "./index.less";

import tokenomicsImg from '../../assets/images/tokenomics.png';

const Tokenomics = () => {
  return (
    <div>
      <h2>Tokenomics</h2>
      <p>The supply of the Harbor token will be 100 million tokens. </p>
      <p><b>20% Airdrop</b> to various communities based on different tasks.</p>
      <p><b>10% for the Team</b> to be vested for 2 years</p>
      <p><b>15% Reserves-</b> Will be utilized as and when needed by the protocol</p>
      <p><b>25% Public Sale</b> to get serious stakeholders who will invest and provide liquidity for $CMST </p>
      <p><b>30% Strategic Dao-</b> For the safety and effective working of the protocol, there will be different departments like <b>PolicyDAo, StabilityDao, MarketingDao, DevelopmentDao, TradefiDao</b> which will help run the the protocol independently and smoothly. Distribution and allocation of funds to each department will be revealed later.</p>
      <img src={tokenomicsImg} alt="tokenomicsImg" />
    </div>
  );
};

export default Tokenomics