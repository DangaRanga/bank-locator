import React from "react";

import Card from "../Card/Card";

import locationData from "../../data/bankData.json";

function Featured() {
  return (
    <div>
      {locationData.map((bankLocation) => (
        <Card
          bankImg={bankLocation.imgUrl}
          description={bankLocation.description}
          name={bankLocation.name}
        ></Card>
      ))}
    </div>
  );
}

export default Featured;
