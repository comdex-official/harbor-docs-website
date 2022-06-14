import React from "react";
import { Link } from "react-router-dom";
import "./index.less";

import rewardImg from '../../assets/images/reward-img.png';

const Rewards = () => {
  return (
    <div>
      <h2>Rewards</h2>
      <p>The rewards module is where the interest is calculated. The various modules that call this module are Locker and Vault.</p>
      <p>
        The value calculated is through the basic compound interest formula which is:
      </p>
      <p>
        <div><i>Amount = Principle  (1 + Rate)<sup>Time</sup></i></div>
        <div><i>Interest = Amount - Principle</i></div>
      </p>
      <p>
        The interest rate per block is calculated per block as per below:
        <img src={rewardImg} alt="Reward" />
      </p>
      <p>
        For both Locker and Vault, the interest is calculated through Rewards per block and is compounded per block ( and in effect compounded yearly).
      </p>
      <p>
        For the Vault: The sum of the total $CMST borrowed from the vault and the total stability fees due in the vault act as the principle in the rewards formula to calculate the stability fees generated in the next block. The interest that is accrued is sent back to locker module to add to the outstanding Stability fees on borrowed debt. For the next block, the $CMST borrowed and the new stability fee value acts as the principle.
      </p>
      <p>
        Eg: <br />
        If the Stability Fee rate is set to 10%, the value will compound per block in such a way that at the end of the year the stability fee will be exactly 10 of the principle%.
      </p>
      <p>
        Assuming a user withdraws 100 $CMST, at the end of 1st year they will have to pay 110 $CMST back ( 100 $CMST Principle and 10 $CMST Interest), and at the end of 2nd year, they will owe 121 $CMST ( 100 $CMST Principle and 21 $CMST Interest).
      </p>
      <p>
        For the Locker: The sum of the total $CMST deposited in the locker and the total LSR accrued in the locker act as the principle in the rewards formula to calculate the LSR generated in the next block. This interest is sent back to the locker to add to the total LSR earned, and the new sum is used to calculate the LSR in the next block.
      </p>
      <p>
        Eg: <br />
        If the Locker savings rate is set to 5%, the value will compound per block in such a way that at the end of the year the LSR interest will be exactly 5% of the principle.
      </p>
      <p>
        Assuming a user deposits 100 $CMST, at the end of 1st year they will have 105 $CMST ( 100 $CMST Principle and 5 $CMST Interest) in their locker, and at the end of 2nd year, they will have 110.25 $CMST ( 100 $CMST Principle and 10.25 $CMST Interest). <br />
        Github Link: 
      </p>
    </div>
  );
};

export default Rewards;