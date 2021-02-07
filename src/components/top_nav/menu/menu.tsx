import React, { Component } from "react";
import "./menu.css";
import * as icons from "../../icons/icons";
import colours from "../../../global/colours";

interface MenuProps {}

interface MenuState {}

export class Menu extends Component<MenuProps, MenuState> {
  render() {
    return <div>{icons.Menu(colours.primary, "24px")}</div>;
  }
}

export default Menu;
