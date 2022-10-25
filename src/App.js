import React, { useState } from "react";
import SvgSprite from "./utils/SvgSpriteLoader";
import { Layout, Button } from "antd";
import SideBar from "./components/layout/SideBar";
import NavigationBar from "./components/layout/NavigationBar";
import { useMediaQuery } from "react-responsive";

//Svg Sprite
import svgFile from "./assets/images/svg/svg-sprite.svg";

import "./App.less";
import { SvgIcon } from "./components/common";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Switch } from "react-router-dom";

import Introduction from "./containers/Introduction";
import Faq from "./containers/Faq";
import Glossary from "./containers/Glossary";
import Home from "./containers/Home";
import Composite from "./containers/Composite";
import HarborProtocol from "./containers/HarborProtocol";
import UseCases from "./containers/UseCases";
import Vaults from "./containers/Vaults";
import Locker from "./containers/Locker";
import Collector from "./containers/Collector";
import Rewards from "./containers/Rewards";
import Liquidations from "./containers/Liquidations";
import Auctions from "./containers/Auctions";
import Governance from "./containers/Governance";
import StableMint from "./containers/StableMint";
import PriceOracles from "./containers/PriceOracles";
import EmergencyShutdown from "./containers/EmergencyShutdown";
import Mintburn from "./containers/Mintburn";
import Summary from "./containers/Summary";
import Risk from "./containers/Risk";
import Tokenomics from "./containers/Tokenomics";
import Scrollbar from "react-scrollbars-custom";
import Emissions from "./containers/Emissions";
import VaultVoting from "./containers/Vault_Voting";
import RewardAndIncentive from "./containers/Rewards_And_Incetives";
import SecurityDeveloperDocs from "./containers/SecurityDeveloperDocs";

const { Header, Content, Sider, Footer } = Layout;

const App = () => {
	const [collapsed, setCollapsed] = React.useState(false);
	const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
	const [isOpen, setIsOpen] = useState(!!isMobile);
	const toggleCollapsed = () => {
		setCollapsed(!collapsed);
		setIsOpen(!isOpen);
	};

	return (
		<>
			<SvgSprite url={svgFile} />
			<Router>
				<Layout>
					<Header className="header">
						<div className="header-inner">
							<Button
								className="menu-link"
								type="link"
								onClick={toggleCollapsed}
								style={{ marginBottom: 16 }}
							>
								{collapsed ? (
									<SvgIcon
										name="chevron-right"
										viewbox="0 0 5.333 9.333"
									/>
								) : (
									<SvgIcon
										name="chevron-left"
										viewbox="0 0 5.333 9.333"
									/>
								)}
							</Button>
							<NavigationBar />
						</div>
					</Header>
					<Layout className="main-content">
						<>
							<Sider
								width={380}
								breakpoint="lg"
      							collapsedWidth="80"
								theme="light"
								className="Harbor-sider"
								collapsed={isOpen}
								trigger={null}
							>
								<SideBar />
							</Sider>

							<Content className="right-content-wrapper">
								<div className="rightcontent-wrapperinner">
									<Scrollbar style={{ height: 'calc(100vh - 205px)' }}>
										<Switch>
											<Route exact path="/" component={Home} />
											<Route exact path="/introduction" component={Introduction} />
											<Route exact path="/composite" component={Composite} />
											<Route exact path="/harbor-protocol" component={HarborProtocol} />
											<Route exact path="/emissions" component={Emissions} />
											<Route exact path="/vault-voting" component={VaultVoting} />
											<Route exact path="/reward-incentive" component={RewardAndIncentive} />
											<Route path="/Faq" component={Faq} />
											<Route exact path="/use-cases" component={UseCases} />
											<Route exact path="/vaults" component={Vaults} />
											<Route exact path="/locker" component={Locker} />
											<Route exact path="/collector" component={Collector} />
											<Route exact path="/rewards" component={Rewards} />
											<Route exact path="/liquidations" component={Liquidations} />
											<Route exact path="/auctions" component={Auctions} />
											<Route exact path="/governance" component={Governance} />
											<Route exact path="/stable-mint" component={StableMint} />
											<Route exact path="/price-oracles" component={PriceOracles} />
											<Route exact path="/emergency-shutdown" component={EmergencyShutdown} />
											<Route exact path="/mintburn" component={Mintburn} />
											<Route exact path="/summary" component={Summary} />
											<Route exact path="/risk" component={Risk} />
											<Route exact path="/tokenomics" component={Tokenomics} />
											<Route path="/glossary" component={Glossary} />
											<Route path="/security-docs" component={SecurityDeveloperDocs} />
										</Switch>
									</Scrollbar>
								</div>
								<Footer className="main-footer">
									© 2022 Harbor All rights reserved.
								</Footer>
							</Content>
						</>
					</Layout>
				</Layout>
			</Router>
		</>
	);
};

export default App;
