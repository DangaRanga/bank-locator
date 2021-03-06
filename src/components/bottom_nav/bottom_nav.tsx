import React, { Component } from "react";
import "./bottom_nav.css";
import * as icons from "../icons/icons";
import colours from "../../global/colours";
import { Link } from "react-router-dom";

interface BottomNavProps {}

interface BottomNavState {}

export class BottomNav extends Component<BottomNavProps, BottomNavState> {
	render() {
		return (
			<div id="bottom-nav">
				{icons.Favourite(colours.grey4, "24px")}
				<div id="feature-home">
					<Link to="/home">{icons.Home(colours.onDark, "36px")}</Link>
				</div>
				{icons.Settings(colours.grey4, "24px")}
			</div>
		);
	}
}

export default BottomNav;
