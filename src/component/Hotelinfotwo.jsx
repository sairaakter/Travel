import { useContext } from "react";
import { Link } from "react-router-dom";
import cup from "../assets/cup.png";
import heart from "../assets/heart.png";
import location from "../assets/location.png";
import star from "../assets/star.png";

import { CartContext } from "../Context/Addfav";

import hotelinfotwpsty from "../style/Hotelintwo.module.css";
import Comonbtn from "./Comonbtn";
export default function Hoteinfotwo({
  filtersty,
  price,
  btntxt,
  reviews,
  imgg,
  addres,
  contytittle,
  hotedata,
}) {
  const { WishToCarttwo } = useContext(CartContext);

  return (
    <>
      <div className={`row ${hotelinfotwpsty.hotel_info}`}>
        <div
          className={`col-lg-3 col-md-5 col-sm-12 col-12 ${hotelinfotwpsty.algncentr}`}
        >
          <img src={imgg} />
        </div>

        <div
          className={`col-lg-9 col-md-7 col-sm-12 col-12 ${hotelinfotwpsty.algncentrtwo}`}
        >
          <div className={hotelinfotwpsty.views}>
            <div className={hotelinfotwpsty.air_left}>
              <h1>{contytittle}</h1>
              <p className={hotelinfotwpsty.ddj}>
                <img src={location} />
                <span>{addres}</span>
              </p>
              <div className={hotelinfotwpsty.star_hotel}>
                <div className={hotelinfotwpsty.star_left}>
                  <div className={hotelinfotwpsty.star_img}>
                    <img src={star} />
                    <img src={star} />
                    <img src={star} />
                    <img src={star} />
                    <img src={star} />
                  </div>
                  <div className={hotelinfotwpsty.start_cont}>
                    <p>5 Star Hotel</p>
                  </div>
                </div>
                <div className={hotelinfotwpsty.star_right}>
                  <img src={cup} />
                  <p>
                    <b>20+</b> Aminities
                  </p>
                </div>
              </div>
              <div className={hotelinfotwpsty.views_options}>
                <button>{btntxt}</button>
                <p>
                  <span style={{ fontWeight: 700 }}>Very Good</span> {reviews}{" "}
                  reviews
                </p>
              </div>
            </div>
            <div className={hotelinfotwpsty.startin_form}>
              <p>starting from</p>
              <h3>
                {price}/<span style={{ fontSize: "14px" }}>night</span>
              </h3>
              <h4>excl. tax</h4>
            </div>
          </div>
          <div className={hotelinfotwpsty.bokin_time}>
            <div className={hotelinfotwpsty.bokin_options}>
              <hr />
              <div className={filtersty.bokin_btn}>
                <button
                  className={filtersty.heartbtn}
                  onClick={(event) => {
                    event.stopPropagation();
                    event.preventDefault(); // Prevent navigation
                    WishToCarttwo(hotedata);
                  }}
                  style={{ cursor: "pointer" }}
                >
                  <img src={heart} />
                </button>
                <Link
                  to={`/detailstwo/${hotedata.id}?type=hotel`}
                  style={{
                    textDecoration: "none",
                    color: "inherit",
                    width: "100%",
                  }}
                >
                  <Comonbtn
                    addbtn={`${filtersty.mybtn} ${filtersty.c_anim_btn}`}
                  >
                    <span className={filtersty.canim_btn}>
                      <span>View Place</span>
                      <span>View Place</span>
                    </span>
                  </Comonbtn>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
