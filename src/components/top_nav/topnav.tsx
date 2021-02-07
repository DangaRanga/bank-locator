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
            <div
            id="top-nav-bar"
            >
                <Menu></Menu>
                
                <nav id="top-nav">{icons.Search(colours.grey3, "24px")}
                <img id="profile-pic" src={profilepic} alt="profile"/>
                </nav>
            </div>
        );
    }
}

export default TopNav;