import React from "react";
import { List, Card } from 'antd';
import { useHistory, Link } from 'react-router-dom';
import "./index.less";
import { SvgIcon } from "../../components/common";

const data = [
  {
    icon: <SvgIcon name='intro-icon' viewbox='0 0 33.007 36.341' />,
    title: 'Introduction',
    description: 'Introducing $CMST, the over-collaterized stablecoin',
    url: '/Introduction',
  },
  {
    icon: <SvgIcon name='protocol-icon' viewbox='0 0 36 31.5' />,
    title: 'Protocol',
    description: 'Mint $CMST, Earn interest, Take part in Auctions & Governance',
    url: '/harbor-protocol',
  },
  {
    icon: <SvgIcon name='reward-icon' viewbox='0 0 30.264 26.656' />,
    title: 'Locker Savings Rate',
    description: ' Deposit your $CMST to earn interest compounded per block!',
    url: '/locker',
  },
  {
    icon: <SvgIcon name='risk-icon' viewbox='0 0 30 28.451' />,
    title: 'Risk',
    description: 'Different types of risks associated with using the Protocol',
    url: '/risk',
  },
  {
    icon: <SvgIcon name='governance-icon' viewbox='0 0 32.076 28.288' />,
    title: 'Governance',
    description: 'Governance will follow a democratic approach',
    url: '/governance',
  },
  {
    icon: <SvgIcon name='faq-icon' viewbox='0 0 33.846 33.846' />,
    title: 'FAQs',
    description: 'Some Frequently asked questions answered',
    url: '/faq',
  },
];

const Home = () => {
  const history = useHistory();
  return (
    <div>
      <h2 className="mb-0">Harbor Documentation</h2>
      <h4 style={{ fontSize: "20px", color: "gray" }}>Harbor protocol enables safelisted assets to be locked in Vaults and Composite to be minted</h4>
      <h2 className="mb-0 mt-4">Explore Harbor</h2>
      <List
        className="home-list"
        grid={{
          gutter: 16,
          xs: 1,
          sm: 2,
          md: 2,
          lg: 2,
          xl: 3,
          xxl: 3,
        }}
        dataSource={data}
        renderItem={item => (
          <List.Item onClick={() => { history.push(`${item.url}`) }}>
            <List.Item.Meta
              avatar={item.icon}
              title={item.title}
              description={item.description}
            />
          </List.Item>
        )}
      />
      <div className="bottom-cards">
        <Link to={{ pathname: "https://harborprotocol.one" }} target="_blank">
          <div className="card-items">
            <div className="arrow-link"><SvgIcon name='arrow-topright' viewbox='0 0 22.056 22.504' /></div>
            <SvgIcon name='harbor-icon' viewbox='0 0 21.395 28.5' />
            <h4>Harbor app</h4>
            <p>Link to redirect <br /> to the app </p>
          </div>
        </Link>
        <Link to={{ pathname: "https://discord.gg/comdexofficial" }} target="_blank">
          <div className="card-items">
            <div className="arrow-link"><SvgIcon name='arrow-topright' viewbox='0 0 22.056 22.504' /></div>
            <SvgIcon name='discord' viewbox='0 0 29.539 22.155' />
            <h4>Discord</h4>
            <p>Chat with the community <br /> on Discord</p>
          </div>
        </Link>
        <Link to={{ pathname: "https://forum.comdex.one/c/site-feedback/2" }} target="_blank">
          <div className="card-items">
            <div className="arrow-link"><SvgIcon name='arrow-topright' viewbox='0 0 22.056 22.504' /></div>
            <SvgIcon name='help-icon' viewbox='0 0 27 31.5' />
            <h4> Found an issue?</h4>
            <p>Improve this page by adding <br />suggestion on Forum </p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Home;
