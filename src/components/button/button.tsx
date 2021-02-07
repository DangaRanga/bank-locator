import React, { Component } from "react";
import "./button.css";


interface ButtonProps {
    variant: "primary" | "accent";
    text: string;
    class?:string
}

interface ButtonState {
}

export class Button extends Component<ButtonProps,ButtonState> {
    render() {
        return (
            <span className={`button ${this.props.variant}${
                this.props.class ? " " + this.props.class : ""
            }`}>
                <p>{this.props.text}</p>
            </span>
        );
    }
}

export default Button;