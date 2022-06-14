import React from "react";
import { Link } from "react-router-dom";
import "./index.less";

const Vaults = () => {
  return (
    <div>
      <h2>Vaults</h2>
      <p>
        Vault is one of the fundamental modules of the protocol which facilitates the locking of collateral and enables the generation of $CMST. Users can deposit their safelisted IBC assets in this module as collateral and mint new $CMST. <br />
        Users can also interact with their open vaults and can repay/withdraw $CMST and deposit/withdraw their assets at will (this is subject to vault rules being met).
      </p>
      <p>
        There are multiple types of vaults available to any User and are classified on the basis of asset type and risk type. These vaults have different liquidation ratios, min collateral ratios, and stability fees which are set after due diligence and assessment of the assets that are whitelisted. There is also a drawdown fee charged per withdrawal of $CMST which is common across all vaults and is a percentage value of $CMST being borrowed. <br />
        The various parameters and assessment processes are listed in this file.
      </p>
      <p>
        It is important to note that the Drawdown and Stability fees are dynamic values and can change for existing vaults too through governance polling. Users should be aware of these risks before opening vaults and should regularly supervise their existing vaults to avoid uncalculated risks.
      </p>
      <p>
        Drawdown Fees: The drawdown fee is a fixed amount of $CMST collected from the user's debt at every withdrawal of $CMST. The drawdown fee is deducted in $CMST and sent to the collector module, while the rest is transferred to the user.
      </p>
      <p>
        If a user withdraws 10000 $CMST, and the drawdown fees interest is at 0.5%. <br />
        Then, the user gets 9950 $CMST in his wallet, and 50 $CMST is sent to the collector module. The user’s due $CMST is $10000.
      </p>
      <p>
        Stability Fees: Stability fees are accrued on the $CMST debt of a user's vault and are compounded.
      </p>
      <p>
        EG: If the Stability Fee rate is set to 10%, the value will compound per block in such a way that at the end of the year the stability fee will be exactly 10 of the principle%. <br />
        Assuming a user withdraws 100 $CMST, at the end of 1st year they will have to pay 110 $CMST back ( 100 $CMST Principle and 10 $CMST Interest), and at the end of 2nd year, they will owe 121 $CMST ( 100 $CMST Principle and 21 $CMST Interest).
      </p>
      <p>
        Users are also advised to be coherent with the liquidation ratios when opening vaults. If the vault’s collateral ratio falls below the liquidation ratio, then their vaults are liquidated incurring a liquidation fee, and their assets will be auctioned off to reclaim $CMST and to bring their vault position back to min collateral ratio. For the ease of a user, the liquidation price is calculated and displayed on the dApp which is a function of the debt borrowed, the quantity of asset locked, and $CMST due. It is important to note that this liquidation price is just an approximation and not the exact value as the $CMST borrowed incurs interest per block increasing the debt and in turn increasing the $CMST due. More detailed information about liquidations is discussed in the Liquidations section.
      </p>
      <p>
        Each of the vaults has a minimum borrow amount. The maximum borrow amount is applied globally across vault types. These rules are applied to ensure a healthy ecosystem and to prevent spam attacks. If a user chooses to repay their debt, they are only allowed to repay until the borrowed $CMST is greater than or equal to the min borrow amount of the vault. On the other hand, for a certain vault type, if users have already borrowed up to the ceiling for a particular vault type (or if the borrowable $CMST is less than the debt floor), then a particular user will be unable to borrow more from that vault type be it a new vault or an existing vault. In such a scenario, the user will have to:
        <ol type="a">
          <li>choose a different vault type or,</li>
          <li>have to wait for some of the debt to be repaid for this vault type or,</li>
          <li>Wait for a governance proposal to increase the ceiling for the vault type.</li>
        </ol>
      </p>
      <p>
        When a user repays their debt, the outstanding interest is deducted first and sent to the Collector module, and then the principal debt is reduced. This ensures accrual of $CMST in the collector module. As the interest is calculated per block on the total $CMST due (which is the sum of Principal and Interest accrued till the last block), collecting the interest first does not negatively affect the user’s loan position as his principal (total debt) is still the same for the next block.
        <br />
        Eg:
        <br />
        Github Link: 
      </p>
    </div>
  );
};

export default Vaults;