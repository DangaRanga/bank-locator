import React, { Component } from "react";
import colours from "../../global/colours";
import { StarFilled } from "../icons/icons";
import "./star_rating.css";


interface StarRatingProps {
    
}

interface StarRatingState {
    
}

export class StarRating extends Component<StarRatingProps,StarRatingState> {
    render() {
        var arr =[];
        for (let i = 0; i < 5; i++) {
            arr.push(StarFilled(colours.star, "10px"))
        }
        return (
            <span className="star-rating">
                {arr}
            </span>
        );
    }
}

export default StarRating;