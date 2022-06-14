import React from "react";
import { List, Card } from 'antd';
import { useHistory, Link } from 'react-router-dom';
import "./index.less";
import { SvgIcon } from "../../components/common";

const data = [
  {
    icon: <SvgIcon name='intro-icon' viewbox='0 0 33.007 36.341' /> ,
    title: 'Introduction',
    description: 'The ability to seamlessly hold new assets gives new superpowers.',
    url: '/Introduction',
  },
  {
    icon: <SvgIcon name='protocol-icon' viewbox='0 0 36 31.5' /> ,
    title: 'Protocol',
    description: 'Harbor is a IBC native lending borrowing protocol on Cosmos.',
    url: '/harbor-protocol',
  },
  {
    icon: <SvgIcon name='reward-icon' viewbox='0 0 30.264 26.656' /> ,
    title: 'Rewards',
    description: ' To reward the early adopters there is a reward program.',
    url: '/rewards',
  },
  {
    icon: <SvgIcon name='risk-icon' viewbox='0 0 30 28.451' /> ,
    title: 'Risk',
    description: 'Harbor aspires to be among the top money markets.',
    url: '/risk',
  },
  {
    icon: <SvgIcon name='governance-icon' viewbox='0 0 32.076 28.288' /> ,
    title: 'Governance',
    description: 'Governance will follow a democratic approach.',
    url: '/governance',
  },
  {
    icon: <SvgIcon name='faq-icon' viewbox='0 0 33.846 33.846' /> ,
    title: 'Faq',
    description: 'Harbor is open-source and here are the smart contracts used.',
    url: '/faq',
  },
];

const Home = () => {
  const history = useHistory();
  return (
    <div>
      <h2 className="mb-0">Harbor Documentation</h2>
      <h4>A seamless borrowing and lending platform built on Comdex</h4>
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
          <Link to={{ pathname: "https://twitter.com/Harbor_Finance" }} target="_blank">
            <div className="card-items">
              <div className="arrow-link"><SvgIcon name='arrow-topright' viewbox='0 0 22.056 22.504' /></div>
              <SvgIcon name='harbor-icon' viewbox='0 0 21.395 28.5' />
              <h4>Harbor app</h4>
              <p>link to redirect <br /> traffic to app</p>
            </div>
          </Link>
          <Link to={{ pathname: "https://discord.gg/ypUb5Gyh7Z" }} target="_blank">
            <div className="card-items">
              <div className="arrow-link"><SvgIcon name='arrow-topright' viewbox='0 0 22.056 22.504' /></div>
              <SvgIcon name='discord' viewbox='0 0 29.539 22.155' />
              <h4>Discord</h4>
              <p>chat with community <br /> on discord</p>
            </div>
          </Link>
          <Link to={{ pathname: "/" }}>
            <div className="card-items">
              <div className="arrow-link"><SvgIcon name='arrow-topright' viewbox='0 0 22.056 22.504' /></div>
              <SvgIcon name='help-icon' viewbox='0 0 27 31.5' />
              <h4> Found an issue?</h4>
              <p>improve this page by adding <br /> suggestion on Github</p>
            </div>
          </Link>
        </div>
    </div>
  );
};

export default Home;
