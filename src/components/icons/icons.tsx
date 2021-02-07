import React, { Component } from "react";
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

export function Home(
	fill: string,
	size: string,
	onClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
) {
	return (
		<Icon
			height={size}
			width={size}
			onClick={onClick}
			class="home"
			svg={
				<svg
					xmlns="http://www.w3.org/2000/svg"
					height="24"
					viewBox="0 0 24 24"
					width="24"
				>
					<path d="M0 0h24v24H0z" fill="none" />
					<path fill={fill} d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
				</svg>
			}
		/>
	);
}

export function Favourite(
	fill: string,
	size: string,
	onClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
) {
	return (
		<Icon
			height={size}
			width={size}
			onClick={onClick}
			class="fav"
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
						d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
					/>
				</svg>
			}
		/>
	);
}

export function Settings(
	fill: string,
	size: string,
	onClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
) {
	return (
		<Icon
			height={size}
			width={size}
			onClick={onClick}
			class="settings"
			svg={
				<svg
					xmlns="http://www.w3.org/2000/svg"
					enable-background="new 0 0 24 24"
					height="24"
					viewBox="0 0 24 24"
					width="24"
				>
					<g>
						<path d="M0,0h24v24H0V0z" fill="none" />
						<path
							fill={fill}
							d="M19.14,12.94c0.04-0.3,0.06-0.61,0.06-0.94c0-0.32-0.02-0.64-0.07-0.94l2.03-1.58c0.18-0.14,0.23-0.41,0.12-0.61 l-1.92-3.32c-0.12-0.22-0.37-0.29-0.59-0.22l-2.39,0.96c-0.5-0.38-1.03-0.7-1.62-0.94L14.4,2.81c-0.04-0.24-0.24-0.41-0.48-0.41 h-3.84c-0.24,0-0.43,0.17-0.47,0.41L9.25,5.35C8.66,5.59,8.12,5.92,7.63,6.29L5.24,5.33c-0.22-0.08-0.47,0-0.59,0.22L2.74,8.87 C2.62,9.08,2.66,9.34,2.86,9.48l2.03,1.58C4.84,11.36,4.8,11.69,4.8,12s0.02,0.64,0.07,0.94l-2.03,1.58 c-0.18,0.14-0.23,0.41-0.12,0.61l1.92,3.32c0.12,0.22,0.37,0.29,0.59,0.22l2.39-0.96c0.5,0.38,1.03,0.7,1.62,0.94l0.36,2.54 c0.05,0.24,0.24,0.41,0.48,0.41h3.84c0.24,0,0.44-0.17,0.47-0.41l0.36-2.54c0.59-0.24,1.13-0.56,1.62-0.94l2.39,0.96 c0.22,0.08,0.47,0,0.59-0.22l1.92-3.32c0.12-0.22,0.07-0.47-0.12-0.61L19.14,12.94z M12,15.6c-1.98,0-3.6-1.62-3.6-3.6 s1.62-3.6,3.6-3.6s3.6,1.62,3.6,3.6S13.98,15.6,12,15.6z"
						/>
					</g>
				</svg>
			}
		/>
	);
}

export function StarFilled(
	fill: string,
	size: string,
	onClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
) {
	return (
		<Icon
			height={size}
			width={size}
			onClick={onClick}
			class="star-filled"
			svg={
				<svg
					xmlns="http://www.w3.org/2000/svg"
					height="24"
					viewBox="0 0 24 24"
					width="24"
				>
					<path d="M0 0h24v24H0z" fill="none" />
					<path d="M0 0h24v24H0z" fill="none" />
					<path
						fill={fill}
						d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
					/>
				</svg>
			}
		/>
	);
}
