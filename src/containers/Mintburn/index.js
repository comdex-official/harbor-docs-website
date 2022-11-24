import React from "react";
import { BottomNav } from "../../components/common";
import "./index.less";

const Mintburn = () => {
  return (
    <div>
      <h2>Tokenmint</h2>
      <p>
        In the tokenmint module, when the system reaches a debt threshold, it mints HARBOR token for $CMST. This has been discussed in detail in the Auction module.
      </p>
      <p>
        Tokenmint is also used to mint the genesis supply of Harbor tokens. 
      </p>

      <BottomNav 
        preNavLink="emergency-shutdown"
        prevNavText="Emergency Shutdown"
        nextNavLink="risk"
        nextNavText="Risk"
      />

    </div>
  );
};

export default Mintburn