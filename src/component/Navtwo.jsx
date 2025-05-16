import { Link, NavLink } from "react-router-dom";
import fflight_serch from "../assets/fflight_serch.png";
import findserch from "../assets/findserch.png";
import flisrch_logo from "../assets/flisrch_logo.png";

import navstl from "../style/Navtwo.module.css";

export default function Navtwo() {
  return (
    <nav className={`${navstl.navbarr} navbar navbar-expand-lg  `}>
      <div className="container-fluid p-0">
        {/* <!-- this in d-none for lg and above --> */}
        <div className={`navbar-brand ${navstl.mainlogo}`}>
          <Link className="" to="/">
            <img src={flisrch_logo} alt="golobe" />
          </Link>
        </div>
        {/* <!-- logo --> */}
        <div className={`navbar-brand ${navstl.h_logos} ${navstl.md_logos}`}>
          <NavLink
            className={({ isActive }) =>
              `nav-link ${navstl.flight_btn} ${isActive ? navstl.active : ""}`
            }
            to="/Flightflow"
          >
            <img src={fflight_serch} alt="flight" />
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `nav-link ${navstl.flight_btn} ${isActive ? navstl.active : ""}`
            }
            to="/Hotelflow"
          >
            <img src={findserch} alt="flight" />
          </NavLink>
        </div>

        {/* <!-- toggler button -->
            <!-- toggle btn --> */}
        <button
          className={`navbar-toggler ${navstl.nav_togle}`}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#cus_nav"
          aria-controls="cus_nav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <a>
            <svg
              className={navstl.custom_toggler_icon}
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M15.9998 1C24.2829 1 30.9995 7.71503 30.9995 15.9998C30.9995 24.2829 24.2829 30.9995 15.9998 30.9995C7.71503 30.9995 1 24.2829 1 15.9998C1 7.71665 7.71665 1 15.9998 1Z"
                stroke="#121"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M22.3875 16.0207H22.4021"
                stroke="#121"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M15.8865 16.0207H15.9011"
                stroke="#121"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M9.38553 16.0207H9.40013"
                stroke="#121"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </a>
        </button>
        {/* <!-- nav item --> */}
        <div
          className={`${navstl.nav} collapse navbar-collapse nav_colpss`}
          id="cus_nav"
        >
          <ul className={`navbar-nav m-auto mb-2 mb-lg-0 ${navstl.first_li}`}>
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/">
                <img src={flisrch_logo} alt="golobe" />
              </Link>
            </li>
          </ul>
          <ul className={`navbar-nav m-auto mb-2 mb-lg-0 ${navstl.secondt_li}`}>
            <li className={`nav-item ${navstl.h_logos}`}>
              <NavLink
                className={({ isActive }) =>
                  `nav-link ${navstl.flight_btn} ${
                    isActive ? navstl.active : ""
                  }`
                }
                aria-current="page"
                to="/Flightflow"
              >
                <img src={fflight_serch} alt="flight" />
              </NavLink>
            </li>
            <li className={`nav-item ${navstl.h_logos}`}>
              <NavLink
                className={({ isActive }) =>
                  `nav-link ${navstl.flight_btn} ${
                    isActive ? navstl.active : ""
                  }`
                }
                aria-current="page"
                to="/Hotelflow"
              >
                <img src={findserch} alt="flight" />
              </NavLink>
            </li>
          </ul>
          <div className={`${navstl.h_buttons} ${navstl.comon_allbtns}`}>
            <NavLink className={`nav-link`} to="/Login">
              <button type="button" className={navstl.login}>
                Login
              </button>
            </NavLink>

            <NavLink className={`nav-link`} to="/Signup">
              <button type="button" className={navstl.signup}>
                Sign up
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}
