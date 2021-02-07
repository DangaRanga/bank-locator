import React, { Component } from "react";
import "./topnav.css";
import colours from "../../global/colours";
import Menu  from "./menu/menu";
import * as icons from "../icons/icons";
import profilepic from "../../assets/man.jpg";


interface TopNavProps {

}

interface TopNavState {
    
}

export class TopNav extends Component<TopNavProps,TopNavState> {
    render() {
        return (
            <nav
            id="top-nav"
            >
                <Menu></Menu>
                <div>{icons.Search(colours.grey3, "24px")}
                <img id="profile-pic" src={profilepic} alt="profile"/>
                </div>
            </nav>
        );
    }
}

export default TopNav;