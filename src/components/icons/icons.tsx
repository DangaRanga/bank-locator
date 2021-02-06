import { Component } from "react";
import "./icons.css";

interface IconProps {
	height: string | "auto";
	width: string | "auto";
	class?: string;
	id?: string;
	onClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
	svg: JSX.Element;
}

interface IconState {}

class Icon extends Component<IconProps, IconState> {
	render() {
		return (
			<div
				id={this.props.id}
				className={`icon${
					this.props.class ? " " + this.props.class : ""
				}`}
				onClick={this.props.onClick}
				style={{
					width: this.props.width,
					height: this.props.height,
				}}
			>
				{this.props.svg}
			</div>
		);
	}
}

export function Search(
	fill: string,
	size: string,
	onClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
) {
	return (
		<Icon
			height={size}
			width={size}
            onClick={onClick}
			class="search"
			svg={
				<svg
					xmlns="http://www.w3.org/2000/svg"
					height="24"
					viewBox="0 0 24 24"
					width="24"
				>
					<path d="M0 0h24v24H0z" fill="none" />
					<path
						fill={fill}
						d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
					/>
				</svg>
			}
		/>
	);
}

export function Menu(
	fill: string,
	size: string,
	onClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
) {
	return (
		<Icon
			height={size}
			width={size}
            onClick={onClick}
			class="menu"
			svg={
				<svg
					xmlns="http://www.w3.org/2000/svg"
					height="24"
					viewBox="0 0 24 24"
					width="24"
				>
					<path d="M0 0h24v24H0z" fill="none" />
					<path
						fill={fill}
						d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"
					/>
				</svg>
			}
		/>
	);
}
