import React from "react";
import { Link } from "react-router-dom";
import "./index.less";

const Summary = () => {
  return (
    <div>
      <h2>How the Peg is stabilized</h2>
      <p>
        In the Harbor Protocol, 1 $CMST is always treated as 1 USD. <br />
        However, in secondary markets this value may deviate from its peg based on $CMST’s supply and demand. <br />
        To stabilize the peg, there are various mechanisms in place as discussed below:
      </p>
      <ul>
        <li>
          Monetary Policy:
          <div className="pl-3">
            Every $CMST minted accrues a stability fee on it until it is repaid. <br />
            Similarly, $CMST locked in the LSR also accrues rewards, which is the Locker savings rate. <br />
            Now, when the demand for Composite in secondary markets is high, it will result in $CMST being traded above 1 USD. <br />
            If over time, the trend continues, then the Stability rates and the LSR will be decreased via governance by $HARBOR token holders. <br />
            Now this will incentivize users to mint more $CMST at cheaper rates and will disincentivize users locking up $CMST in Locker.
This would increase the supply of $CMST and stabilize the peg. <br /> <br />
            In the other scenario, when the demand for Composite in secondary markets is less, and the supply is more, it will result in $CMST being traded below 1 USD. <br />
            If over time, the trend continues, then the Stability rates and the LSR will be increased via governance by $HARBOR token holders. <br />
            Now this will disincentivize users to mint more $CMST and will incentivize users to lock up $CMST in Locker. Users with existing $CMST debt will also close their existing postings by buying $CMST from the markets. <br />
            This would decrease the supply of $CMST and stabilize the peg.  <br /> <br />
            It is important to note that the monetary policy has a slow burn effect and it takes time for the policy changes to repeg $CMST. 
          </div>
        </li>
      </ul>
      <p>
        If the market price of $CMST is above 1 USD, HARBOR holders can choose to gradually decrease the Locker Savings Rate, which will reduce demand and should reduce the market price of $CMST toward the 1USD Target Price.
      </p>
    </div>
  );
};

export default Summary