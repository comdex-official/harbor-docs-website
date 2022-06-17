import React from "react";
import { BottomNav } from "../../components/common";
import "./index.less";

const Mintburn = () => {
  return (
    <div>
      <h2>Mintburn</h2>
      <p>
        In the mintburn module, when the system reaches a surplus or debt threshold, it mints and burns Harbor token for $CMST. This has been discussed in detail in the Auction module. 
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