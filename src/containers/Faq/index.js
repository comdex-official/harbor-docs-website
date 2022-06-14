import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import "./index.less";

const Faq = () => {
  return (
    <div>
      
      <h3>What is Composite?</h3>
      <p>
        Composite ($CMST) is an IBC-native fully-collateralized stablecoin designed to represent purchasing power and is therefore soft pegged to $1; however, as the global macro landscape develops, that may be subject to change in the future.
      </p>

      <h3>What is a stablecoin?</h3>
      <p>
        Stablecoins are cryptocurrencies the value of which is pegged, or tied, to that of another currency, commodity or financial instrument. Stablecoins aim to provide an alternative to the high volatility cryptocurrencies like BTC, ETH, etc.
      </p>

      <h3>What is Harbor?</h3>
      <p>
        $HARBOR is the governance and recapitalization token for the Harbor protocol. <br />
        People holding $HARBOR token can take part in the crucial decision-making process of the protocol that includes setting - stability fees, earning interest rates, liquidation ratios, liquidation fees, risk management parameters, or submitting proposals to implement platform changes.
      </p>
      
      <h3>How do I interact with Harbor protocol?</h3>
      <p>
        You can interact with Harbor protocol by visiting <br /> <Link to={{ pathname: "https://harborprotocol.one" }} target="_blank">https://harborprotocol.one</Link>. 
      </p>

      <h3>Why mint on Harbor?</h3>
      <p>
        In order to take exposure to our stablecoin $CMST, people will mint.
      </p>

      <h3>Why deposit Composite on Harbor protocol?</h3>
      <p>
        One will deposit $CMST on Harbor protocol in order to earn interest on the deposited $CMST in the Locker module.
      </p>

      <h3>What is the cost of interacting with the Harbor protocol?</h3>
      <p>
        There are various fees involved for different types of actions on the protocol: <br />
        Drawdown Fee <br />
        Stability Fee <br />
        Liquidation Fee <br />
        Stablemint Fee
      </p>
      <p>
        In addition to these fees, for every transaction within the protocol, gas fees will be charged in terms of CMDX.
      </p>

      <h3>Where are my deposited funds stored?</h3>
      <p>
        The deposited funds are stored in the vault created using CDP when a person provides some collateral to mint $CMST.
      </p>

      <h3>What are the risks involved?</h3>
      <ul>
        <li>Liquidation risk </li>
        <li>Vault risk</li>
        <li>System risk</li>
        <li>Market risk</li>
        <li>Parameter risk</li>
        <li>Parameter Variability Risk</li>
      </ul>

      <h3>What triggers liquidations?</h3>
      <p>
        Liquidations are triggered if the value of your locked collateral goes below the minimum collateralization ratio.
      </p>

      <h3>What are the Collateral Auctions?</h3>
      <p>
        Once a specific vault is liquidated, the asset is sent for the auctions for a discounted price. People can buy that asset for a cheaper price than the market in the auction.
      </p>

      <h3>What are Surplus auctions?</h3>
      <p>
        In Surplus auctions, the Harbor protocol auctions off excess $CMST for HARBOR in order to reduce the $CMST surplus that has built up in the Collector module primarily from stability and liquidation fees.
      </p>

      <h3>What are debt auctions?</h3>
      <p>
        A debt auction is the process in which the Harbor protocol will mint and auction new HARBOR tokens for $CMST in order to recover the debt that has built up in the system.
      </p>

      <h3>Where can I participate in auctions?</h3>
      <p>
        Users can participate in the auctions directly on harborprotocol.one/auctions
      </p>

      <h3>How can I close my vault?</h3>
      <p>
        It can be done directly on the dApp in the Mint section.
      </p>

      <h3>How can I withdraw my deposited composite?</h3>
      <p>
        It can be done directly on the dApp in the the Earn section. Users need to go to withdraw menu and withdraw some or all of their deposited  $CMST.
      </p>

      <h3>What is StableMint?</h3>
      <p>
        StableMint is a feature of the protocol that allows market makers and users to capitalize on arbitrage opportunities ensuring Composite maintains its peg in secondary markets.
      </p>

      <h3>What is Governance?</h3>
      <p>
        The key decisions that are taken by the stakeholders of the protocol allowing them to take part in voting and having their say on the proposals is quoted as Governance.
      </p>

      <h3>Where can I vote?</h3>
      <p>
        On the Harbor app, there is a specific tab named “Governance” where one can take in governance and decision-making.
      </p>

      <h3>What does 1 Composite = 1 USD mean?</h3>
      <p>
        It simply means that the value of 1 $CMST is equal to $1. In other words, the value of $CMST is soft pegged to the US dollar.
      </p>

      <h3>How does Composite maintain its peg?</h3>
      <p>
        Composite implemented a five-layer defence mechanism to avoid debugging. Refer to our detailed blog to learn more about our defence mechanism : [LINK]
      </p>

      <h3>What is the Liquidation Price?</h3>
      <p>
        Based on the vault’s collateral ratio and the vault’s liquidation ratio, it is possible to predict the price at which the vault will get liquidated. This is the liquidation price.
      </p>

      <h3>What is the collateral ratio?</h3>
      <p>
        Collateral ratio is ratio of the value of asset locked and the amount of $CMST due for a Vault. This parameter helps evaluate the risk and also is used as a parameter to trigger liquidations when collateral ratio falls below safety levels.
      </p>
    </div>
  );
};

export default Faq;
