import React, { Component } from "react";
import "./nav.css";
import colours from "../../global/colours";
import Menu  from "./menu/menu";
import * as icons from "../icons/icons";


interface NavProps {

}

interface NavState {
    
}

export class Nav extends Component<NavProps,NavState> {
    render() {
        return (
            <nav
            id="nav"
            >
                <Menu></Menu>
                {icons.Search(colours.grey3, "24px")}
                <img src="" alt="profile"/>
            </nav>
        );
    }
}