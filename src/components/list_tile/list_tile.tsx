import React, { Component } from "react";
import "./list_tile.css";

interface ListTileProps {
	class?: string;
}

interface ListTileState {}

export class ListTile extends Component<ListTileProps, ListTileState> {
	render() {
		return (
			<div
				className={`list-tile${
					this.props.class ? " " + this.props.class : ""
				}`}
			>
				{this.props.children}
			</div>
		);
	}
}

export default ListTile;
