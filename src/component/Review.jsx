import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import React from "react";
import facility from "../assets/facility.png";
import real from "../assets/real.png";
import rmain from "../assets/rmain.png";
import revsty from "../style/Review.module.css";
import Subreview from "./Subreview";
export default function Review() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1023, min: 768 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 767, min: 576 },
      items: 2,
    },
    smmm: {
      breakpoint: { max: 575, min: 0 },
      items: 1,
    },
  };
  const revdata = [
    {
      topclas: `${revsty.rflex} ${revsty.rflex_one}`,
      quote: "A real sense of community, nurtured",
      review:
        "Really appreciate the help and support from the staff during these tough times. Shoutout to Katie for...",
      name: "Olga",
      location: "Weave Studios – Kai Tak",
      source: "Google",
      image_url: rmain,
    },
    {
      topclas: `${revsty.rflex} ${revsty.rflex_two}`,
      quote: "“A real sense of community, nurtured”",
      review:
        "Really appreciate the help and support from the staff during these tough times. Shoutout to Katie for...",
      rating: 5,
      name: "Leo",
      location: "Weave Studios – Kennedy Town",
      source: "Google",
      image_url: facility,
    },
    {
      topclas: `${revsty.rflex} ${revsty.rflex_three}`,
      quote: "“A real sense of community, nurtured.”",
      review:
        "Really appreciate the help and support from the staff during these tough times. Shoutout to Katie for...",
      rating: 4,
      name: "Sophie",
      location: "Weave Studios – Prince Edward",
      source: "Google",
      image_url: real,
      lastclas: `${revsty.middlecont}`,
    },
    {
      topclas: `${revsty.rflex} ${revsty.rflex_three}`,
      quote: "“A real sense of community, nurtured.”",
      review:
        "Really appreciate the help and support from the staff during these tough times. Shoutout to Katie for...",
      rating: 4,
      name: "Sophie",
      location: "Weave Studios – Prince Edward",
      source: "Google",
      image_url: real,
      lastclas: `${revsty.middlecont}`,
    },
    {
      topclas: `${revsty.rflex} ${revsty.rflex_three}`,
      quote: "“A real sense of community, nurtured.”",
      review:
        "Really appreciate the help and support from the staff during these tough times. Shoutout to Katie for...",
      rating: 4,
      name: "Sophie",
      location: "Weave Studios – Prince Edward",
      source: "Google",
      image_url: real,
      lastclas: `${revsty.middlecont}`,
    },
  ];

  return (
    <div className={revsty.review}>
      <div className="container cus_container">
        <div className="row">
          <Carousel
            responsive={responsive}
            arrows={false}
            infinite={true}
            autoPlay={false}
            autoPlaySpeed={2000}
            keyBoardControl={true}
          >
            {revdata.map((datamn, index) => (
              <div key={index} className={revsty.rflex}>
                <Subreview
                  quote={datamn.quote}
                  revieww={datamn.review}
                  name={datamn.name}
                  location={datamn.location}
                  source={datamn.source}
                  image_url={datamn.image_url}
                  revsty={revsty}
                  lastclas={datamn.lastclas}
                />
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
}
