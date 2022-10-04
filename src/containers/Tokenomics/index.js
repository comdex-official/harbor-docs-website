import React from "react";
import { BottomNav } from "../../components/common";
import "./index.less";

import tokenomicsImg from '../../assets/images/tokenomics.png';

const Tokenomics = () => {
  return (
    <div>
      <h2>Tokenomics</h2>
      <p>Coming Soon... </p>

      <BottomNav 
        preNavLink="risk"
        prevNavText="Risk"
        nextNavLink="glossary"
        nextNavText="Glossary"
      />

    </div>
  );
};

export default Tokenomics