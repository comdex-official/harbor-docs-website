import React from "react";
import { Link } from "react-router-dom";
import "./index.less";

import { SvgIcon } from "../../common";

const NavigationBar = () => {
	return (
		<>
			<div className="logo">
				<Link to="/">
					<SvgIcon name="harbor-logo" viewbox="0 0 169 60" />
				</Link>
			</div>
		</>
	);
};

export default NavigationBar;