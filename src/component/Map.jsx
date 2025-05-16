import React from "react";
import jamesdoe from "../assets/jamesdoe.png";
import usermap from "../assets/usermap.png";
import Cardcom from "./Cardcom";

import mapsty from "../style/Map.module.css";

export default function Map() {
  const boardingPasses = [
    {
      id: 1,
      name: "James Doe",
      boardingPass: "№123",
      mainimage: jamesdoe,
      clos: ` ${mapsty.first}`,
    },
    {
      id: 2,
      name: "Alice Smith",
      boardingPass: "№456",
      mainimage: jamesdoe,
      clos: ` ${mapsty.second}`,
    },
    {
      id: 3,
      name: "Robert Lee",
      boardingPass: "№789",
      mainimage: jamesdoe,
      clos: ` ${mapsty.third}`,
    },
    {
      id: 4,
      name: "Maria Garcia",
      boardingPass: "№321",
      mainimage: jamesdoe,
      clos: ` ${mapsty.forth}`,
    },
    {
      id: 5,
      name: "Liam Johnson",
      boardingPass: "№654",
      mainimage: jamesdoe,
      clos: ` ${mapsty.fifth}`,
    },
  ];

  return (
    <section className={mapsty.map_section}>
      <div className="container cus_container">
        <img src={usermap} alt="World Map" className={mapsty.world_map} />

        <div className={mapsty.map_wrapper}>
          {boardingPasses.map((card) => (
            <div key={card.id}>
              <Cardcom
                name={card.name}
                boardingPass={card.boardingPass}
                mainifmage={card.mainimage}
                mapsty={mapsty}
                clos={card.clos}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
