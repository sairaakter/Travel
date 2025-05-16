import { useState } from "react";
import { Link } from "react-router-dom";
import add_outline from "../assets/add_outline.png";
import from_to from "../assets/from_to.png";
import p_flight from "../assets/p_flight.png";
import p_stay from "../assets/p_stay.png";
import send from "../assets/send.png";
import prosty from "../style/Promocode.module.css";
import Comonbtn from "./Comonbtn";

export default function Promocod() {
  const [activeTab, setActiveTab] = useState("flight"); // 'flight' অথবা 'stay'

  const handleFlightClick = () => {
    setActiveTab("flight");
  };

  const handleStayClick = () => {
    setActiveTab("stay");
  };

  return (
    <div className={prosty.promo_code}>
      <div className="container cus_container">
        <div className={prosty.promo_code_wrapper}>
          <div className={prosty.pro_inner}>
            <div className={prosty.promo_btn}>
              <a
                className={`${prosty.pflight_btn} ${
                  activeTab === "flight" ? prosty.active : ""
                }`}
                onClick={handleFlightClick}
              >
                <img src={p_flight} alt="flight" />
              </a>
              <span className={prosty.fjfdjs}></span>
              <a
                className={`${activeTab === "stay" ? prosty.active : ""}`}
                onClick={handleStayClick}
              >
                <img src={p_stay} alt="stay" />
              </a>
              <div
                className={`${prosty.animation} ${
                  activeTab === "flight"
                    ? prosty.start_hom
                    : prosty.start_contact
                }`}
              ></div>
            </div>

            {activeTab === "flight" && (
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
                  <select
                    id="trip-type"
                    className={`${prosty.trip_select} ${prosty.From_to}`}
                  >
                    <option value="return" selected className={prosty.From_to}>
                      Return
                    </option>
                    <option value="one-way" className={prosty.From_to}>
                      One way
                    </option>
                    <option value="multi-city" className={prosty.From_to}>
                      Multi-city
                    </option>
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
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                </fieldset>
                <fieldset>
                  <legend>Depart- Return</legend>
                  <select id="passengers-className" className={prosty.From_to}>
                    <option
                      value="1-economy"
                      selected
                      className={prosty.From_to}
                    >
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
                    <option
                      value="1-economy"
                      selected
                      className={prosty.From_to}
                    >
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
            )}

            {activeTab === "stay" && (
              <form
                action="/action_page_stay.php"
                className={prosty.promo_form}
              >
                <fieldset>
                  <legend>Location</legend>
                  <input
                    type="text"
                    id="location"
                    className={prosty.From_to}
                    placeholder="Enter Location"
                  />
                </fieldset>
                <fieldset>
                  <legend>Check In - Check Out</legend>
                  <select id="stay-dates" className={prosty.From_to}>
                    <option
                      value="7-13 Nov"
                      selected
                      className={prosty.From_to}
                    >
                      07 Nov 22 - 13 Nov 22
                    </option>
                    <option value="10-15 Nov" className={prosty.From_to}>
                      10 Nov 22 - 15 Nov 22
                    </option>
                  </select>
                </fieldset>
                <fieldset>
                  <legend>Guests</legend>
                  <select id="guests" className={prosty.From_to}>
                    <option value="1" selected className={prosty.From_to}>
                      1 Guest
                    </option>
                    <option value="2" className={prosty.From_to}>
                      2 Guests
                    </option>
                  </select>
                </fieldset>
                {/* আপনি থাকার জন্য অন্যান্য ফিল্ড যোগ করতে পারেন */}
              </form>
            )}

            <div className={prosty.add_btns}>
              <Comonbtn addbtn={`${prosty.add_btn}`}>
                <img src={add_outline} alt="add" />
                <span>Add Promo Code</span>
              </Comonbtn>
              <Link
                to="/Flightlisting"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <Comonbtn addbtn={`${prosty.remove_btn}`}>
                  <img src={send} alt="remove" />
                  <span>
                    {activeTab === "flight" ? "Show Flights" : "Find Stays"}
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
