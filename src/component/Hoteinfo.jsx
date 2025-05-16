import { useContext } from "react";
import { Link } from "react-router-dom";
import heart from "../assets/heart.png";
import { CartContext } from "../Context/Addfav";
import Comonbtn from "./Comonbtn";
export default function Hoteinfo({
  filtersty,
  price,
  btntxt,
  reviews,
  from,
  to,
  envo,
  imgg,
  hotedataa,
}) {
  const { WishToCart } = useContext(CartContext);

  return (
    <div className={`row ${filtersty.hotel_info}`}>
      <div
        className={`col-lg-2 col-md-3 col-sm-12 col-12 ${filtersty.algncentr}`}
      >
        <img src={imgg} />
      </div>

      <div className="col-lg-10 col-md-9 col-sm-12 col-12">
        <div className={filtersty.views}>
          <div className={filtersty.views_options}>
            <button>{btntxt}</button>
            <p>
              <span style={{ fontWeight: 700 }}>Very Good</span> {reviews}{" "}
              reviews
            </p>
          </div>
          <div className={filtersty.startin_form}>
            <p>starting from</p>
            <h3>{price}</h3>
          </div>
        </div>
        <div className={filtersty.bokin_time}>
          <div className={filtersty.bokin_options}>
            <div className={filtersty.bokin_check}>
              <input
                className={filtersty.bokin_checkinput}
                type="checkbox"
                id="airline1"
              />
              <label className={filtersty.bokin_checklabel} for="airline1">
                <span>
                  <p>
                    {from} - {to}
                  </p>
                  <p
                    style={{
                      fontSize: "14px",
                      fontWeight: 400,
                      opacity: "40%",
                      marginTop: "4px",
                    }}
                  >
                    Emirates
                  </p>
                </span>
                <span>
                  <p style={{ opacity: "78%" }}>non stop</p>
                </span>
                <span>
                  <p style={{ opacity: "78%" }}>{envo}</p>
                  <p
                    style={{
                      fontSize: "14px",
                      fontWeight: 400,
                      opacity: "40%",
                      marginTop: "4px",
                    }}
                  >
                    EWR-BNA
                  </p>
                </span>
              </label>
            </div>
            <div className={filtersty.bokin_check}>
              <input
                className={filtersty.bokin_checkinput}
                type="checkbox"
                id="airline1"
              />
              <label className={filtersty.bokin_checklabel} for="airline1">
                <span>
                  <p>
                    {from} - {to}
                  </p>
                  <p
                    style={{
                      fontSize: "14px",
                      fontWeight: 400,
                      opacity: "40%",
                      marginTop: "4px",
                    }}
                  >
                    Emirates
                  </p>
                </span>
                <span>
                  <p style={{ opacity: "78%" }}>non stop</p>
                </span>
                <span>
                  <p style={{ opacity: "78%" }}>{envo}</p>
                  <p
                    style={{
                      fontSize: "14px",
                      fontWeight: 400,
                      opacity: "40%",
                      marginTop: "4px",
                    }}
                  >
                    EWR-BNA
                  </p>
                </span>
              </label>
            </div>
            <hr />
            <div className={filtersty.bokin_btn}>
              <button
                className={filtersty.heartbtn}
                onClick={(event) => {
                  event.stopPropagation();
                  event.preventDefault(); // Prevent navigation
                  WishToCart(hotedataa);
                }}
                style={{ cursor: "pointer" }}
              >
                <img src={heart} />
              </button>
              <Link
                to={`/details/${hotedataa.id}?type=flightfirst`}
                style={{
                  textDecoration: "none",
                  color: "inherit",
                  width: "100%",
                }}
              >
                <Comonbtn addbtn={`${filtersty.mybtn} ${filtersty.c_anim_btn}`}>
                  <span className={filtersty.canim_btn}>
                    <span>View Deals</span>
                    <span>View Deals</span>
                  </span>
                </Comonbtn>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
