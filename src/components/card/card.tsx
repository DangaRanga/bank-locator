import React, { Component } from "react";
import "./card.css";


interface CardProps {
    imgSrc:string;
    line1: JSX.Element;
    line2: JSX.Element;
}

interface CardState {
    
}

export class Card extends Component<CardProps,CardState> {
    render() {
        return (
            <div className='card'>
                <img className="feature-img" src={this.props.imgSrc} alt="feature"/>
                {this.props.line1}
                {this.props.line2}
            </div>
        );
    }
}

export default Card;