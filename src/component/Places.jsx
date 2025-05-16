import React from "react";
import Baku from "../assets/Baku.png";
import istanbul from "../assets/istanbul.png";
import sydney from "../assets/sydney.png";

import plasty from "../style/Places.module.css";
import Subplace from "./Subplace";
export default function Places() {
  const place = [
    {
      destination: "Istanbul, Turkey",
      image_url: istanbul,
      services: ["Flights", ".", "Hotels", ".", "Tours"],
    },
    {
      destination: "Paris, France",
      image_url: sydney,
      services: ["Flights", ".", "Hotels", ".", "Tours"],
    },
    {
      destination: "Kyoto, Japan",
      image_url: Baku,
      services: ["Flights", ".", "Hotels", ".", "Tours"],
    },
    {
      destination: "New York, USA",
      image_url: sydney,
      services: ["Flights", ".", "Hotels", ".", "Tours"],
    },
    {
      destination: "Rome, Italy",
      image_url: Baku,
      services: ["Flights", ".", "Hotels", ".", "Tours"],
    },
    {
      destination: "Bangkok, Thailand",
      image_url: istanbul,
      services: ["Flights", ".", "Hotels", ".", "Tours"],
    },
    {
      destination: "Dubai, UAE",
      image_url: istanbul,
      services: ["Flights", ".", "Hotels", ".", "Tours"],
    },
    {
      destination: "Cape Town, South Africa",
      image_url: sydney,
      services: ["Flights", ".", "Hotels", ".", "Tours"],
    },
    {
      destination: "Rio de Janeiro, Brazil",
      image_url: Baku,
      services: ["Flights", ".", "Hotels", ".", "Tours"],
    },
  ];
  return (
    <div className={plasty.places}>
      <div className="container cus_container">
        <div className={`row ${plasty.top_place}`}>
          {place.map((subplc, index) => (
            <div key={index} className="col-lg-4 col-md-6">
              <Subplace
                destination={subplc.destination}
                image_url={subplc.image_url}
                services={subplc.services}
                plasty={plasty}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
