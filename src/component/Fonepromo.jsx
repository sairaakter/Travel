import { Link } from "react-router-dom";
import add_outline from "../assets/add_outline.png";
import from_to from "../assets/from_to.png";
import send from "../assets/send.png";
import prosty from "../style/Foneprome.module.css";
import Comonbtn from "./Comonbtn";

export default function Fonepromo({ link }) {
  return (
    <div className={prosty.promo_code}>
      <div className="container cus_container">
        <div className={prosty.promo_code_wrapper}>
          <div className={prosty.pro_inner}>
            <h1 className={prosty.flying}>Where are you flying?</h1>
            <form action="/action_page.php" className={prosty.promo_form}>
              <fieldset>
                <legend>From - To</legend>
                <input
                  type="text"
                  id="from-to"
                  className={prosty.From_to}
                  placeholder="Lahore - Karachi"
                />
                <button type="button" className={prosty.send_btn}>
                  <img src={from_to} alt="from to" />
                </button>
              </fieldset>
              <fieldset className={prosty.cus_width}>
                <legend>Trip</legend>
                <div className={prosty.select_wrapper}>
                  <select
                    id="trip-type"
                    className={`${prosty.trip_select} ${prosty.From_to}`}
                  >
                    <option value="return" selected>
                      Return
                    </option>
                    <option value="one-way">One way</option>
                    <option value="multi-city">Multi-city</option>
                  </select>
                  <div className={prosty.custom_arrow}>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.25 9L12 15.75L18.75 9"
                        stroke="black"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </fieldset>
              <fieldset>
                <legend>Depart- Return</legend>
                <select id="passengers-className" className={prosty.From_to}>
                  <option value="1-economy" selected className={prosty.From_to}>
                    07 Nov 22 - 13 Nov 22
                  </option>
                  <option value="2-economy" className={prosty.From_to}>
                    2 Passengers, Economy
                  </option>
                  <option value="1-business" className={prosty.From_to}>
                    1 Passenger, Business
                  </option>
                  <option value="2-business" className={prosty.From_to}>
                    2 Passengers, Business
                  </option>
                </select>
              </fieldset>
              <fieldset>
                <legend>Passenger - Class</legend>
                <select id="passengers-className" className={prosty.From_to}>
                  <option value="1-economy" selected className={prosty.From_to}>
                    1 Passenger, Economy
                  </option>
                  <option value="2-economy" className={prosty.From_to}>
                    2 Passengers, Economy
                  </option>
                  <option value="1-business" className={prosty.From_to}>
                    1 Passenger, Business
                  </option>
                  <option value="2-business" className={prosty.From_to}>
                    2 Passengers, Business
                  </option>
                </select>
              </fieldset>
            </form>
            <div className={prosty.add_btns}>
              <Comonbtn addbtn={`${prosty.add_btn}`}>
                <img src={add_outline} alt="add" />
                <span>Add Promo Code</span>
              </Comonbtn>
              <Link
                to={link}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <Comonbtn addbtn={`${prosty.remove_btn}`}>
                  <img src={send} alt="remove" />
                  <span>Show Flights</span>
                </Comonbtn>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
