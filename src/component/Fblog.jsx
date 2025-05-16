import { useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import colambia from "../assets/columbia.png";
import london from "../assets/london.png";
import meborn from "../assets/meborn.png";
import paris from "../assets/paris.png";
import fbosty from "../style/Fblog.module.css";
import Fsublog from "./Fsublog";
export default function Fblog({ link, type }) {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1023, min: 768 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 767, min: 400 },
      items: 2,
    },
    smmm: {
      breakpoint: { max: 399, min: 0 },
      items: 1,
    },
  };
  const revdata = [
    {
      id: 1,
      htwo: "Melbourne",
      pwo: "An amazing journey",
      price: "$ 700",

      image_url: meborn,
    },
    {
      id: 2,

      htwo: "Paris",
      pwo: "An amazing journey",
      price: "$ 700",

      image_url: paris,
    },
    {
      id: 3,

      htwo: "London",
      pwo: "An amazing journey",
      price: "$ 700",

      image_url: london,
    },
    {
      id: 4,

      htwo: "Columbia",
      pwo: "An amazing journey",
      price: "$ 700",

      image_url: colambia,
    },
    {
      id: 5,

      htwo: "Paris",
      pwo: "An amazing journey",
      price: "$ 700",

      image_url: paris,
    },
    {
      id: 6,

      htwo: "London",
      pwo: "An amazing journey",
      price: "$ 700",

      image_url: london,
    },
    {
      id: 7,

      htwo: "Columbia",
      pwo: "An amazing journey",
      price: "$ 700",

      image_url: colambia,
    },
  ];
  useEffect(() => {
    localStorage.setItem("flightCards", JSON.stringify(revdata));
  }, []);
  return (
    <div className={fbosty.blog}>
      <div className="container cus_container">
        <div className={`row ${fbosty.bfor_sm}`}>
          <Carousel
            responsive={responsive}
            arrows={false}
            infinite={false}
            autoPlay={false}
            autoPlaySpeed={2000}
            keyBoardControl={true}
          >
            {revdata.map((datamn, index) => (
              <div key={index}>
                <Fsublog
                  htwo={datamn.htwo}
                  pwo={datamn.pwo}
                  price={datamn.price}
                  image_url={datamn.image_url}
                  fbosty={fbosty}
                  datamn={datamn}
                  link={link}
                  type={type}
                />
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
}
