import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import from_to from "../assets/from_to.png";
import flisty from "../style/Flistpromo.module.css";
export default function Flistpromo() {
  return (
    <div className={flisty.promo_code}>
      <div className="container cus_container">
        <div className={flisty.promo_code_wrapper}>
          <div className={flisty.pro_inner}>
            <form action="/action_page.php" className={flisty.promo_form}>
              <fieldset>
                <legend>From - To</legend>
                <input
                  type="text"
                  id="from-to"
                  className={flisty.From_to}
                  placeholder="Lahore - Karachi"
                />
                <button type="button" className={flisty.send_btn}>
                  <img src={from_to} />
                </button>
              </fieldset>
              <fieldset className={flisty.cus_width}>
                <legend>Trip</legend>
                <div className={flisty.select_wrapper}>
                  <select
                    id="trip-type"
                    className={`${flisty.trip_select} ${flisty.From_to}`}
                  >
                    <option value="return" selected>
                      Return
                    </option>
                    <option value="one-way">One way</option>
                    <option value="multi-city">Multi-city</option>
                  </select>
                  <div className={flisty.custom_arrow}>
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
                {/* <!-- <div className="date-inputs">
                      <input type="date" id="depart-date" className="From_to" >
                      <span className="separator">-</span>
                      <input type="date" id="return-date" value="2022-11-13" className="From_to" >
                    </div>                  --> */}
                <select id="passengers-className" className={flisty.From_to}>
                  <option value="1-economy" selected className={flisty.From_to}>
                    07 Nov 22 - 13 Nov 22
                  </option>
                  <option value="2-economy" className={flisty.From_to}>
                    2 Passengers, Economy
                  </option>
                  <option value="1-business" className={flisty.From_to}>
                    1 Passenger, Business
                  </option>
                  <option value="2-business" className={flisty.From_to}>
                    2 Passengers, Business
                  </option>
                </select>
              </fieldset>
              <fieldset>
                <legend>Passenger - Class</legend>
                <select id="passengers-className" className={flisty.From_to}>
                  <option value="1-economy" selected className={flisty.From_to}>
                    1 Passenger, Economy
                  </option>
                  <option value="2-economy" className={flisty.From_to}>
                    2 Passengers, Economy
                  </option>
                  <option value="1-business" className={flisty.From_to}>
                    1 Passenger, Business
                  </option>
                  <option value="2-business" className={flisty.From_to}>
                    2 Passengers, Business
                  </option>
                </select>
              </fieldset>
              {/* <!-- SEARCH --> */}
              <div className={`dropdown ${flisty.search}`}>
                <a
                  className="btn dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <FontAwesomeIcon icon={faMagnifyingGlass} />
                </a>

                <ul className={`dropdown-menu ${flisty.sddm}`}>
                  <div className="row g-3">
                    <div className="col-10">
                      <input
                        type="text"
                        className={`form-control ${flisty.srcb}`}
                        placeholder="Search here"
                      />
                    </div>
                    <div className="col-2">
                      <button className={flisty.sbmt} type="submit">
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                      </button>
                    </div>
                  </div>
                </ul>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
