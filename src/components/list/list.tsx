import React, { Component } from "react";
import "./list.css";

interface ListProps {
	elements: JSX.Element[];
	direction: "vertical" | "horizontal";
    maxHeight?: string;
    maxWidth?: string;
	class?: string;
}

interface ListState {}

export class List extends Component<ListProps, ListState> {
	render() {
		return (
			<div
            style={{
                maxHeight: this.props.maxHeight,
                maxWidth: this.props.maxWidth
            }}
				className={`list ${this.props.direction}${
					this.props.class ? " " + this.props.class : ""
				}`}
			>{this.props.elements}</div>
		);
	}
}

export default List;
