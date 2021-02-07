import React from "react";

import BankMap from "../components/Map/BankMap";
import Featured from "../components/Featured/Featured";
import TopNav from "../components/top_nav/topnav";
import BottomNav from "../components/bottom_nav/bottom_nav";

function BankSearch() {
  return (
    <div>
      <TopNav></TopNav>
      <BankMap></BankMap>
      <Featured></Featured>
      <BottomNav></BottomNav>
    </div>
  );
}

export default BankSearch;
