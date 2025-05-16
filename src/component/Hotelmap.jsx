import Baku from "../assets/Baku.png";
import istanbul from "../assets/istanbul.png";
import sydney from "../assets/sydney.png";

import plasty from "../style/Places.module.css";
import Subplace from "./Subplace";
export default function Hotelmap() {
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
  ];
  return (
    <div className={plasty.map_section}>
      <div className="container cus_container">
        <div className={`row ${plasty.top_place}`}>
          {place.map((subplc, index) => (
            <div key={index} className="col-lg-3 col-md-6 col-sm-6">
              <Subplace
                destination={subplc.destination}
                image_url={subplc.image_url}
                services={subplc.services}
                plasty={plasty}
                cnogap={plasty.cnogap}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
