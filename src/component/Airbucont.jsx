import { useContext } from "react";
import { Link } from "react-router-dom";
import faii_img from "../assets/faii_img.png";
import farght from "../assets/farght.png";
import fasubrght from "../assets/fasubrght.png";
import heartwo from "../assets/heartwo.png";
import location from "../assets/location.png";
import Share from "../assets/Share.png";
import { CartContext } from "../Context/Addfav";
import Comonbtn from "./Comonbtn";

export default function Airbucont({ hotsty, cardData, too }) {
  const { WishToCarttwo } = useContext(CartContext);

  return (
    <div className="row">
      <div className="col-lg-12">
        <div className={hotsty.airbus_content}>
          <div className={hotsty.top_air}>
            <div className={hotsty.air_left}>
              <h1>{cardData.contytittle}</h1>
              <p>
                <img src={location} />
                <span>{cardData.addres}</span>
              </p>
              <div className={hotsty.views_options}>
                <button>{cardData.btntxt}</button>
                <p>
                  <span style={{ fontWeight: 700 }}>Very Good</span> 54 reviews
                </p>
              </div>
            </div>
            <div className={hotsty.air_right}>
              <h2>{cardData.price}</h2>
              <div className={hotsty.air_botn}>
                <button
                  className={hotsty.heartbtn}
                  onClick={(event) => {
                    event.stopPropagation();
                    event.preventDefault(); // Prevent navigation
                    WishToCarttwo(cardData);
                  }}
                  style={{ cursor: "pointer" }}
                >
                  <img src={heartwo} />
                </button>
                <button className={hotsty.heartbtn}>
                  <img src={Share} />
                </button>
                <Link
                  to={too}
                  style={{
                    textDecoration: "none",
                    color: "inherit",
                  }}
                >
                  {" "}
                  <Comonbtn addbtn={`${hotsty.mybtn} ${hotsty.c_anim_btn}`}>
                    <span className={hotsty.canim_btn}>
                      <span>Book now</span>
                      <span>Book now</span>
                    </span>
                  </Comonbtn>
                </Link>
              </div>
            </div>
          </div>
          {/* <!-- FALL START --> */}
          <div className={hotsty.fall}>
            <div className="">
              <div className="row">
                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6">
                  <div className={hotsty.fa_left}>
                    <img src={faii_img} />
                  </div>
                </div>
                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6">
                  <div className={hotsty.fall_right}>
                    <div className={hotsty.fall_one}>
                      <img src={farght} />
                      <img src={fasubrght} className={hotsty.rgt_on} />
                    </div>
                    <div className={hotsty.fall_one}>
                      <img src={farght} />
                      <img src={fasubrght} className={hotsty.rgt_on} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
