import React from "react";
import { useLocation } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { SvgIcon } from "../../common";
import { Menu } from "antd";
import "./index.less";
import Scrollbar from "react-scrollbars-custom";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const SideBar = () => {
  const location = useLocation();
  return (
    <div className="sidebar-inner">
      <div className="sidebar-menu">
        <Scrollbar style={{ height: 'calc(100vh - 105px)' }}>
          <Menu mode="inline">
            <Menu.Item key="m1" icon={<SvgIcon name="intro-icon" viewbox="0 0 33.007 36.341" />}>
              <NavLink
                to="/introduction"
                className={location.pathname === "/introduction" ? "selected" : ""}
              >
                Introduction
              </NavLink>
            </Menu.Item>
            <Menu.Item key="m2" icon={<SvgIcon name="composite-icon" viewbox="0 0 18.283 18.226" />}>
              <NavLink
                to="/composite"
                className={location.pathname === "/composite" ? "selected" : ""}
              >
                Composite
              </NavLink>
            </Menu.Item>

            <Menu.SubMenu key="m3" title="Harbor Protocol Overview" icon={<SvgIcon name="protocol-icon" viewbox="0 0 36 36" />}>
              <Menu.Item key="m3" icon={<SvgIcon name="protocol-icon" viewbox="0 0 36 31.5" />}>
                <NavLink
                  to="/harbor-protocol"
                  className={location.pathname === "/harbor-protocol" ? "selected" : ""}
                >
                  Introducing Harbor
                </NavLink>
              </Menu.Item>

              <Menu.Item key="m3-1" icon={<SvgIcon name="emmision-icon" viewbox="0 0 36 31.5" />}>
                <NavLink
                  to="/emissions"
                  className={location.pathname === "/emissions" ? "selected" : ""}
                >
                  Emissions
                </NavLink>
              </Menu.Item>

              <Menu.Item key="m3-2" icon={<SvgIcon name="vaults-icon" viewbox="0 0 36 31.5" />}>
                <NavLink
                  to="/vault-voting"
                  className={location.pathname === "/vault-voting" ? "selected" : ""}
                >
                  Voting
                </NavLink>
              </Menu.Item>

              <Menu.Item key="m3-3" icon={<SvgIcon name="reward-icon" viewbox="0 0 36 31.5" />}>
                <NavLink
                  to="/reward-incentive"
                  className={location.pathname === "/reward-incentive" ? "selected" : ""}
                >
                  Rewards and incentives
                </NavLink>
              </Menu.Item>

            </Menu.SubMenu>


            <Menu.Item key="m5" icon={<SvgIcon name="usecase-icon" viewbox="0 0 25.567 31.198" />}>
              <NavLink
                to="/use-cases"
                className={location.pathname === "/use-cases" ? "selected" : ""}
              >
                Use Cases
              </NavLink>
            </Menu.Item>
            <Menu.SubMenu key="m6" title="Modules" icon={<SvgIcon name="vaults-icon" viewbox="0 0 36 36" />} >
              <Menu.Item key="m6-1" icon={<SvgIcon name="vaults-icon" viewbox="0 0 36 36" />} >
                <NavLink
                  to="/vaults"
                  className={location.pathname === "/vaults" ? "selected" : ""}
                >
                  Vaults
                </NavLink>
              </Menu.Item>
              <Menu.Item key="m6-2" icon={<SvgIcon name="locker-icon" viewbox="0 0 30 33" />}>
                <NavLink
                  to="/locker"
                  className={location.pathname === "/locker" ? "selected" : ""}
                >
                  Locker
                </NavLink>
              </Menu.Item>
              <Menu.Item key="m6-3" icon={<SvgIcon name="interestrates-icon" viewbox="0 0 33.957 28.352" />}>
                <NavLink
                  to="/collector"
                  className={location.pathname === "/collector" ? "selected" : ""}
                >
                  Collector
                </NavLink>
              </Menu.Item>
              <Menu.Item key="m6-4" icon={<SvgIcon name="reward-icon" viewbox="0 0 30.264 26.656" />}>
                <NavLink
                  to="/rewards"
                  className={location.pathname === "/rewards" ? "selected" : ""}
                >
                  Rewards
                </NavLink>
              </Menu.Item>
              <Menu.Item key="m6-5" icon={<SvgIcon name="liquidationmechanism-icon" viewbox="0 0 32.235 28.492" />}>
                <NavLink
                  to="/liquidations"
                  className={location.pathname === "/liquidations" ? "selected" : ""}
                >
                  Liquidations
                </NavLink>
              </Menu.Item>
              <Menu.Item key="m6-6" icon={<SvgIcon name="auction-icon" viewbox="0 0 30 30" />}>
                <NavLink
                  to="/auctions"
                  className={location.pathname === "/auctions" ? "selected" : ""}
                >
                  Auctions
                </NavLink>
              </Menu.Item>
              <Menu.Item key="m6-9" icon={<SvgIcon name="priceoracles-icon" viewbox="0 0 26.028 19.28" />}>
                <NavLink
                  to="/price-oracles"
                  className={location.pathname === "/price-oracles" ? "selected" : ""}
                >
                  Price Oracles
                </NavLink>
              </Menu.Item>
              <Menu.Item key="m6-10" icon={<SvgIcon name="shutdown-icon" viewbox="0 0 31.524 26.269" />}>
                <NavLink
                  to="/emergency-shutdown"
                  className={location.pathname === "/emergency-shutdown" ? "selected" : ""}
                >
                  Emergency Shutdown
                </NavLink>
              </Menu.Item>
              <Menu.Item key="m6-11" icon={<SvgIcon name="mint2-icon" viewbox="0 0 39.009 39" />}>
                <NavLink
                  to="/mintburn"
                  className={location.pathname === "/mintburn" ? "selected" : ""}
                >
                  Tokenmint
                </NavLink>
              </Menu.Item>
            </Menu.SubMenu>

            <Menu.Item key="m8" icon={<SvgIcon name="risk-icon" viewbox="0 0 30 28.451" />}>
              <NavLink
                to="/risk"
                className={location.pathname === "/risk" ? "selected" : ""}
              >
                Risk
              </NavLink>
            </Menu.Item>
            <Menu.Item key="m9" icon={<SvgIcon name="tokenomics-icon" viewbox="0 0 32.584 26.527" />}>
              <NavLink
                to="/tokenomics"
                className={location.pathname === "/tokenomics" ? "selected" : ""}
              >
                Tokenomics
              </NavLink>
            </Menu.Item>

            <Menu.Item key="m6-7" icon={<SvgIcon name="governance-icon" viewbox="0 0 32.584 26.527" />}>
              <NavLink
                to="/governance"
                className={location.pathname === "/tokenomics" ? "selected" : ""}
              >
                Governance
              </NavLink>
            </Menu.Item>


            <Menu.Item key="m4" icon={<SvgIcon name="faq-icon" viewbox="0 0 33.846 33.846" />}>
              <NavLink
                to="/Faq"
                className={location.pathname === "/Faq" ? "selected" : ""}
              >
                FAQs
              </NavLink>
            </Menu.Item>
            <Menu.Item key="m10" icon={<SvgIcon name="glossary-icon" viewbox="0 0 32 29" />}>
              <NavLink
                to="/glossary"
                className={location.pathname === "/glossary" ? "selected" : ""}
              >
                Glossary
              </NavLink>
            </Menu.Item>
            <Menu.Item key="m11" icon={<SvgIcon name="contracts-icon" viewbox="0 0 28.5 24.429" />}>
              <NavLink
                to="/security-docs"
                className={location.pathname === "/security-docs" ? "selected" : ""}
              >
                Security and Developer Docs
              </NavLink>
            </Menu.Item>
          </Menu>
          <div className="social-footer">
            <Link to={{ pathname: "https://twitter.com/Harbor_Protocol" }} target="_blank">
              <SvgIcon name="twitter" viewbox="0 0 25.617 20.825" />
            </Link>
            <Link to={{ pathname: "https://t.me/Composite_Money" }} target="_blank">
              <SvgIcon name="telegram" viewbox="0 0 24.635 20.66" />
            </Link>
            <Link to={{ pathname: "/" }}>
              <SvgIcon name="discord" viewbox="0 0 29.539 22.155" />
            </Link>
          </div>
        </Scrollbar>
      </div>
    </div>
  );
};

export default SideBar;
