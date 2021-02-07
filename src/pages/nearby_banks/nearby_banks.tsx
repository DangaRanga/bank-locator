import React, { Component } from "react";
import BottomNav from "../../components/bottom_nav/bottom_nav";
import List from "../../components/list/list";
import ListTile from "../../components/list_tile/list_tile";
import StarRating from "../../components/star_rating/star_rating";
import TopNav from "../../components/top_nav/topnav";
import "./nearby_banks.css";
import bank1 from "../../assets/bank1.png";
import bank2 from "../../assets/bank2.png";
import bank3 from "../../assets/bank3.png";
import bank4 from "../../assets/bank4.png";
import bank5 from "../../assets/bank5.png";
import Button from "../../components/button/button";

interface NearbyBanksProps {}

interface NearbyBanksState {}

export class NearbyBanks extends Component<NearbyBanksProps, NearbyBanksState> {
	render() {
		const banks = [
			<ListTile>
				<img className="bank-pic" src={bank1} alt="" />
				<p className="bank-name">Big Bank Ltd</p>
				<StarRating />
				<p className="bank-address">189 West 10th St, New York</p>
				<Button class="call-bank" text="Call" variant="primary" />
				<Button class="message-bank" text="Message" variant="primary" />
				<Button class="more-info" text="Open" variant="accent" />
				<p className="distance">10 min drive</p>
			</ListTile>,
			<ListTile>
				<img className="bank-pic" src={bank2} alt="" />
				<p className="bank-name">Capital Bank Ltd</p>
				<StarRating />
				<p className="bank-address">189 West 10th St, New York</p>
				<Button class="call-bank" text="Call" variant="primary" />
				<Button class="message-bank" text="Message" variant="primary" />
				<Button class="more-info" text="Open" variant="accent" />
				<p className="distance">5 min drive</p>
			</ListTile>,
			<ListTile>
				<img className="bank-pic" src={bank3} alt="" />
				<p className="bank-name">Creative Savings Ltd</p>
				<StarRating />
				<p className="bank-address">189 West 10th St, New York</p>
				<Button class="call-bank" text="Call" variant="primary" />
				<Button class="message-bank" text="Message" variant="primary" />
				<Button class="more-info" text="Open" variant="accent" />
				<p className="distance">20 min drive</p>
			</ListTile>,
			<ListTile>
				<img className="bank-pic" src={bank4} alt="" />
				<p className="bank-name">Savings Coop</p>
				<StarRating />
				<p className="bank-address">189 West 10th St, New York</p>
				<Button class="call-bank" text="Call" variant="primary" />
				<Button class="message-bank" text="Message" variant="primary" />
				<Button class="more-info" text="Open" variant="accent" />
				<p className="distance">35 min drive</p>
			</ListTile>,
			<ListTile>
				<img className="bank-pic" src={bank5} alt="" />
				<p className="bank-name">Clean Money Ltd</p>
				<StarRating />
				<p className="bank-address">189 West 10th St, New York</p>
				<Button class="call-bank" text="Call" variant="primary" />
				<Button class="message-bank" text="Message" variant="primary" />
				<Button class="more-info" text="Open" variant="accent" />
				<p className="distance">15 min drive</p>
			</ListTile>,
		];
		return (
			<div id="banks-page">
				<TopNav />
				<div id="content">
					<p id="title">Banks Near You</p>
					<List class="banks" direction="vertical" elements={banks} />
				</div>
				<BottomNav />
			</div>
		);
	}
}

export default NearbyBanks;
