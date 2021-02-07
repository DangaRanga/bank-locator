import React, { Component } from "react";
import "./Card.css";

const bank = "assets/bank.jpg";
const star = "assets/star.svg";
function Card() {
  return (
    <section>
      <img src={bank} alt="bank" />
      <div>
        <div className="box-1">
          <div>
            <p>Some Random Bank</p>
            <div className="stars">
              <img src={star} alt="stars" />
              <img src={star} alt="stars" />
              <img src={star} alt="stars" />
              <img src={star} alt="stars" />
              <span>12345 reviews</span>
            </div>
          </div>
          <button className="green" onClick={() => null}>
            Open
          </button>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur.</p>
        <div className="box-2">
          <button className="blue" onClick={() => null}>
            Call
          </button>
          <button className="blue" onClick={() => null}>
            Message
          </button>
          <button className="blue" onClick={() => null}>
            Locate
          </button>
        </div>
      </div>
    </section>
  );
}

export default Card;
