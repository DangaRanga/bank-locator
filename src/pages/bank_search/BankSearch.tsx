import React from "react";
import BottomNav from "../../components/bottom_nav/bottom_nav";
import Button from "../../components/button/button";
import List from "../../components/list/list";
import ListTile from "../../components/list_tile/list_tile";

import BankMap from "../../components/Map/BankMap";
import StarRating from "../../components/star_rating/star_rating";
import TopNav from "../../components/top_nav/topnav";
import "./bank_search.css";

import bank1 from "../../assets/bank1.png";
import bank2 from "../../assets/bank2.png";
import bank3 from "../../assets/bank3.png";
import bankData from "../../data/bankData.json";

function BankSearch() {
	var featuredBanks = [];

	for (const bank of bankData) {
		featuredBanks.push(
			<ListTile>
				<img className="bank-pic" src={bank1} alt="" />
				<p className="bank-name">{bank.name}</p>
				<StarRating />
				<p className="bank-address">189 West 10th St, New York</p>
				<Button class="call-bank" text="Call" variant="primary" />
				<Button class="message-bank" text="Message" variant="primary" />
				<Button class="more-info" text="Open" variant="accent" />
				<p className="distance">10 min drive</p>
			</ListTile>
		);
	}
	return (
		<div id="bank-search">
			<TopNav />
			<div id="content">
				<BankMap></BankMap>
				<h2>Featured Banks</h2>
				<List
					direction="vertical"
					class="featured-banks"
					elements={featuredBanks}
				/>
			</div>
			<BottomNav />
		</div>
	);
}

export default BankSearch;
