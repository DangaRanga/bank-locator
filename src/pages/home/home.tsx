import React, { Component } from "react";
import BottomNav from "../../components/bottom_nav/bottom_nav";
import Card from "../../components/card2/card2";
import Chip from "../../components/chip/chip";
import List from "../../components/list/list";
import TopNav from "../../components/top_nav/topnav";
import "./home.css";
import fimg1 from "../../assets/money_in_hand.jpg";
import fimg2 from "../../assets/money_tree.jpg";
import woman from "../../assets/woman.jpg";
import man from "../../assets/man.jpg";

interface HomeProps {}

interface HomeState {}

export class Home extends Component<HomeProps, HomeState> {
	render() {
		const categories = [
			<Chip text="Savings" class="active" />,
			<Chip text="Investments" />,
			<Chip text="Tips & Tricks" />,
			<Chip text="Stocks" />,
		];

		const articles = [
			<Card
				imgSrc={fimg1}
				line1={<p>Saving 101 - Where to start</p>}
				line2={
					<div className="author">
						<img src={man} className="author-img" alt="author" />
						<p>Jim Johnson</p>
					</div>
				}
			/>,
			<Card
				imgSrc={fimg2}
				line1={<p>Saving 101 - This is</p>}
				line2={
					<div className="author">
						<img src={woman} className="author-img"  alt="author" />
						<p>Stacy Smith</p>
					</div>
				}
			/>
		];

		return (
			<div id="home-page">
				<TopNav></TopNav>
				<div id="content">
					<p id="welcome">Hey, John</p>
					<p id="subtitle">Latest Finance Podcasts</p>
					<List
						direction="horizontal"
						class="categories"
						elements={categories}
					/>
					<List
						direction="horizontal"
						class="articles"
						elements={articles}
					/>
                    <div id="latest-blogs">
                        <p className="section-title">Latest Blogs</p>
                        <p className="link">View All</p>

                    </div>
				</div>
				<BottomNav></BottomNav>
			</div>
		);
	}
}

export default Home;
