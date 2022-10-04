import React from "react";
import { BottomNav } from "../../components/common"; 
import "./index.less";

const Locker = () => {
  return (
    <div>
      <h2>Locker</h2>
      <p>
        The Locker module allows any $CMST holder to earn variable interest on their principal by locking their $CMST into the Locker vault in the Harbor Protocol. Users aren’t required to deposit a minimum amount of $CMST to earn the interest from the vault and they can withdraw any or all of their $CMST from the vault at any time.
      </p>
      <p>
        Locker Stability Rate ( LSR) is the term used to define the interest rate applied in the Locker module. This interest rate is also compounded per block ( just like the stability fee) and added back per block to the principal in the user’s locker. This sum now becomes the principal for the next block. To estimate the calculations easily, LSR should be calculated annually as per the equation and example below. The calculation of the interest earned per block is computed with the Rewards module. <br />
      </p>
      <p>Eg:<br />
        Locker’s primary goal is to maintain $CMST’s peg. The Locker Savings Rate will be used used in tandem with the Stability Fee to balance the supply and demand of $CMST as it incentivizes users to reduce the supply of $CMST by locking it in the locker module.
      </p>
      <p>
        It is important to note that the LSR will be reviewed periodically and changed through governance polling frequently, affecting the existing locker positions too. Locker users are advised to keep up to date with the governance proposals and monitor the app frequently for changed LSR.
      </p>

      <BottomNav 
        preNavLink="vaults"
        prevNavText="Vaults"
        nextNavLink="collector"
        nextNavText="Collector"
      />

    </div>
  );
};

export default Locker;