import { useEffect, useState } from "react";
import cvk_park from "../assets/cvk_park.png";
import economy from "../assets/economy.png";
import emirates from "../assets/emirates.png";
import favthree_img from "../assets/favthree_img.png";
import favto_img from "../assets/favto_img.png";
import filterdropdwn from "../assets/filterdropdwn.png";

import img_emitres from "../assets/img_emitres.png";
import sub_emirats from "../assets/sub_emirats.png";

import other_sort from "../assets/other_sort.png";
import Comonbtn from "./Comonbtn";
import Hoteinfo from "./Hoteinfo";

export default function Filterright({ filtersty }) {
  const [showAll, setShowAll] = useState(false);

  const filtedatafirst = [
    {
      id: 1,
      imgg: emirates,
      btntxt: "4.2",
      reviews: 54,
      from: "12-00 pm",
      to: "01:28 pm",
      envo: "2h 28m",
      price: "$104",

      country: "Turkey",
      city: "Istanbul",
      hotel: "CVK Park Bosphorus Hotel Istanbul",
      addres: "Gümüssuyu Mah. Inönü Cad. No:8, Istanbul 34437",
      return: "Return Wed, Dec 8",
      topplace: "Emirates",
      samllimg: img_emitres,
      contytittle: "Emirates A380 Airbus",
      eminimg: sub_emirats,
      discounprice: "$400",
      economy: economy,
      fav_img: favto_img,
    },
    {
      id: 2,
      imgg: emirates,
      btntxt: "4.2",
      reviews: 54,
      from: "12-00 pm",
      to: "01:28 pm",
      envo: "2h 28m",
      price: "$104",

      country: "Turkey",
      city: "Istanbul",
      hotel: "CVK Park Bosphorus Hotel Istanbul",
      addres: "Gümüssuyu Mah. Inönü Cad. No:8, Istanbul 34437",
      return: "Return Wed, Dec 8",
      topplace: "Emirates",
      samllimg: img_emitres,
      contytittle: "Emirates A380 Airbus",
      eminimg: sub_emirats,
      discounprice: "$400",
      economy: economy,
      fav_img: favthree_img,
    },
    {
      id: 3,
      imgg: emirates,
      btntxt: "4.2",
      reviews: 54,
      from: "12-00 pm",
      to: "01:28 pm",
      envo: "2h 28m",
      price: "$104",

      country: "Turkey",
      city: "Istanbul",
      hotel: "CVK Park Bosphorus Hotel Istanbul",
      addres: "Gümüssuyu Mah. Inönü Cad. No:8, Istanbul 34437",
      return: "Return Wed, Dec 8",
      topplace: "Emirates",
      samllimg: img_emitres,
      contytittle: "Emirates A380 Airbus",

      eminimg: sub_emirats,
      discounprice: "$400",
      economy: economy,
      fav_img: cvk_park,
    },
    {
      id: 4,
      imgg: emirates,
      btntxt: "4.2",
      reviews: 54,
      from: "12-00 pm",
      to: "01:28 pm",
      envo: "2h 28m",
      price: "$104",

      country: "Turkey",
      city: "Istanbul",
      hotel: "CVK Park Bosphorus Hotel Istanbul",
      addres: "Gümüssuyu Mah. Inönü Cad. No:8, Istanbul 34437",
      return: "Return Wed, Dec 8",
      topplace: "Emirates",
      samllimg: img_emitres,
      contytittle: "Emirates A380 Airbus",

      eminimg: sub_emirats,
      discounprice: "$400",
      economy: economy,
    },
    {
      id: 5,
      imgg: emirates,
      btntxt: "4.2",
      reviews: 54,
      from: "12-00 pm",
      to: "01:28 pm",
      envo: "2h 28m",
      price: "$104",

      country: "Turkey",
      city: "Istanbul",
      hotel: "CVK Park Bosphorus Hotel Istanbul",
      addres: "Gümüssuyu Mah. Inönü Cad. No:8, Istanbul 34437",
      return: "Return Wed, Dec 8",
      topplace: "Emirates",
      samllimg: img_emitres,
      contytittle: "Emirates A380 Airbus",

      eminimg: sub_emirats,
      discounprice: "$400",
      economy: economy,
    },
    {
      id: 6,
      imgg: emirates,
      btntxt: "4.2",
      reviews: 54,
      from: "12-00 pm",
      to: "01:28 pm",
      envo: "2h 28m",
      price: "$104",

      country: "Turkey",
      city: "Istanbul",
      hotel: "CVK Park Bosphorus Hotel Istanbul",
      addres: "Gümüssuyu Mah. Inönü Cad. No:8, Istanbul 34437",
      return: "Return Wed, Dec 8",
      topplace: "Emirates",
      samllimg: img_emitres,
      contytittle: "Emirates A380 Airbus",

      eminimg: sub_emirats,
      discounprice: "$400",
      economy: economy,
    },
    {
      id: 7,
      imgg: emirates,
      btntxt: "4.2",
      reviews: 54,
      from: "12-00 pm",
      to: "01:28 pm",
      envo: "2h 28m",
      price: "$104",

      country: "Turkey",
      city: "Istanbul",
      hotel: "CVK Park Bosphorus Hotel Istanbul",
      addres: "Gümüssuyu Mah. Inönü Cad. No:8, Istanbul 34437",
      return: "Return Wed, Dec 8",
      topplace: "Emirates",
      samllimg: img_emitres,
      contytittle: "Emirates A380 Airbus",

      eminimg: sub_emirats,
      discounprice: "$400",
      economy: economy,
    },
    {
      id: 8,
      imgg: emirates,
      btntxt: "4.2",
      reviews: 54,
      from: "12-00 pm",
      to: "01:28 pm",
      envo: "2h 28m",
      price: "$104",

      country: "Turkey",
      city: "Istanbul",
      hotel: "CVK Park Bosphorus Hotel Istanbul",
      addres: "Gümüssuyu Mah. Inönü Cad. No:8, Istanbul 34437",
      return: "Return Wed, Dec 8",
      topplace: "Emirates",
      samllimg: img_emitres,
      contytittle: "Emirates A380 Airbus",
      eminimg: sub_emirats,
      discounprice: "$400",
      economy: economy,
    },
  ];
  useEffect(() => {
    localStorage.setItem("cardsfirst", JSON.stringify(filtedatafirst));
  }, []);
  const visibleData = showAll ? filtedatafirst : filtedatafirst.slice(0, 4);

  return (
    <div className="col-lg-9 col-md-8 col-sm-8">
      <div className={filtersty.fil_right}>
        <div className={filtersty.promo_btn}>
          <a className={filtersty.pflight_btn} href="">
            <h5>Cheapest</h5>
            <p>
              $99 . <span>2h 18m</span>
            </p>
          </a>
          <span className={filtersty.fjfdjs}></span>
          <a className="" href="">
            <h5>Best</h5>
            <p>
              $99 . <span>2h 18m</span>
            </p>
          </a>
          <span className={filtersty.fjfdjs}></span>
          <a className="" href="">
            <h5>Best</h5>
            <p>
              $99 . <span>2h 18m</span>
            </p>
          </a>
          <span className={filtersty.fjfdjs}></span>
          <a className="" href="">
            <img src={other_sort} />
          </a>
          <div
            className={`${filtersty.animation} ${filtersty.start_hom}`}
          ></div>
        </div>

        <div className={filtersty.recomended}>
          <p>
            Showing {visibleData.length} of{" "}
            <span style={{ color: "#FF8682" }}>
              {filtedatafirst.length} places
            </span>
          </p>
          <p>
            <span style={{ fontWeight: 400 }}>Sort by </span>Recommended
            <img src={filterdropdwn} className={filtersty.r_dropdn} />
          </p>
        </div>

        <div className={filtersty.hotel_wrapper}>
          {visibleData.map((hotedataa, index) => (
            <Hoteinfo
              key={index}
              imgg={hotedataa.imgg}
              btntxt={hotedataa.btntxt}
              reviews={hotedataa.reviews}
              from={hotedataa.from}
              to={hotedataa.to}
              envo={hotedataa.envo}
              price={hotedataa.price}
              filtersty={filtersty}
              hotedataa={hotedataa}
            />
          ))}
        </div>

        <Comonbtn
          addbtn={`${filtersty.Show_more} ${filtersty.c_anim_btn}`}
          toggleSection={() => setShowAll(!showAll)}
        >
          <span className={filtersty.canim_btn}>
            <span>{showAll ? "Show less results" : "Show more results"}</span>
            <span>{showAll ? "Show less results" : "Show more results"}</span>
          </span>
        </Comonbtn>
      </div>
    </div>
  );
}
