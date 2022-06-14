import React from "react";
import { Link } from "react-router-dom";
import "./index.less";

const StableMint = () => {
  return (
    <div>
      <h2>StableMint</h2>
      <p>
        The stablemint module allows users to swap a whitelisted stablecoin directly for $CMST, rather than borrowing $CMST which will help the $CMST to maintain its peg to 1 dollar. 
      </p>
      <p>
        Users can directly call the “deposit stablemint” or “withdraw stablemint” function in the vault module to be able to access this feature. <br />
        The trades in stablemint are limited by $CMST ceiling and the number of other stablecoins which have been deposited. A user cannot swap for more $CMST once the $CMST ceiling has been reached. Similarly, a user cannot swap $CMST for other stablecoins if no collateral stablecoins exist in the stablemint.
      </p>
    </div>
  );
};

export default StableMint