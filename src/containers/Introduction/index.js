import React from "react";
import { Link } from "react-router-dom";
import { BottomNav } from "../../components/common";
import "./index.less";

const Introduction = () => {
  return (
    <div>
      <h2>Introduction</h2>
      
      <p>
        From its inception, Comdex has aimed to have a vibrant ecosystem of solutions bringing DeFi to the Cosmos ecosystem and eventually bridging the gap between CeFi and DeFi. A key component to any thriving DeFi ecosystem is the presence of a robust, decentralized, and censorship-resistant stablecoin.
      </p>

      <p>
        The Cosmos ecosystem has seen tremendous growth in the past year with the emergence of a large ecosystem of solutions and assets. Assets and their owners seek liquidity, which is one of the primary functions of DeFi markets. Despite its growth, the ecosystem is yet to see the full-fledged emergence of DeFi. Composite ($CMST), a fully collateralized, IBC-enabled stablecoin, is built to bring liquidity to Cosmos assets and power DeFi on Cosmos.
      </p>

      <p>
        In the following document, we will discuss the Harbor protocol and Composite in detail. For further discussions, connect with our community and team.
      </p>

      <BottomNav 
        preNavLink="/"
        prevNavText="Home"
        nextNavLink="composite"
        nextNavText="Composite ($CMST)"
      />

    </div>
  );
};

export default Introduction;