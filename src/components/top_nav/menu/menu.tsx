import React, { Component } from "react";
import "./menu.css";
import * as icons from "../../icons/icons";
import colours from "../../../global/colours";

interface MenuProps {}

interface MenuState {}

export class Menu extends Component<MenuProps, MenuState> {
	render() {
		return (
			<div id="drawer">
				{icons.Menu(colours.primary, "24px", (e)=>{
          const menu = document.getElementById("menu-items");
          menu?.classList.toggle("hidden");
        })}
				<div id="menu-items" className='hidden'>
					<ul>
						<li>
							<a href="/banks">Banks Near You</a>
						</li>
						<li>
							<a href="/search">Find Banks Near You</a>
						</li>
						<li>
							<a href="/login">Login</a>
						</li>
						<li>
							<a href="/signup">Sign up</a>
						</li>
					</ul>
				</div>
			</div>
		);
	}
}

export default Menu;
