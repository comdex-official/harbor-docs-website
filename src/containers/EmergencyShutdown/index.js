import React from "react";
import { BottomNav } from "../../components/common";
import "./index.less";

const EmergencyShutdown = () => {
  return (
    <div>
      <h2>Emergency Shutdown</h2>
      <p>
        To protect the safety of the Harbor protocol and its users, Emergency Shutdown is triggered in the event of a system update or a major emergency, such as a hack or a security breach. When the Emergency Shutdown is activated, the prices for all types of collateral in the system are immediately frozen, as are other aspects of the protocol such as asset minting, deposit, and withdrawal. The seriousness of the attack is evaluated, and the protocol will take further steps to protect the users' and protocol's interests.
      </p>
      <p>
      In certain cases, if need be, the protocol will calculate how much collateral must stay in each CDP to cover the outstanding $CMST generated for each. Outstanding $CMST is valued at par ( i.e., $1 USD per $CMST). Subsequently, CDP owners are allowed to withdraw all excess collateral from the CDP.  The remaining collateral is collected for each asset type is collected together and $CMST holders will then be given the opportunity to redeem their $CMST for the assets being auctioned off.
      </p>

      <BottomNav 
        preNavLink="price-oracles"
        prevNavText="Price Oracles"
        nextNavLink="mintburn"
        nextNavText="Mintburn"
      />

    </div>
  );
};

export default EmergencyShutdown