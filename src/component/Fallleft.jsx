import { Link } from "react-router-dom";
import Comonbtn from "./Comonbtn";

export default function Fallleft({ fallsty, link }) {
  return (
    <div className="col-xxl-5 col-lg-5 col-md-6 col-sm-6">
      <div className={fallsty.fall_left}>
        <div className={fallsty.fall_tittle}>
          <h1>
            Backpacking <br />
            Sri Lanka
          </h1>
          <div className={fallsty.from}>
            <h4>From</h4>
            <p>$700</p>
          </div>
        </div>
        <p>
          Traveling is a unique experience as it's the best way to unplug from
          the pushes and pulls of daily life. It helps us to forget about our
          problems, frustrations, and fears at home. During our journey, we
          experience life in different ways. We explore new places, cultures,
          cuisines, traditions, and ways of living.
        </p>
        <div className={fallsty.fall_btns}>
          <Link to={link} style={{ textDecoration: "none", color: "inherit" }}>
            <Comonbtn addbtn={`${fallsty.anim_btntwo}`}>
              <span className={fallsty.canim_btntwo}>
                <span> Book Flight </span>
                <span> Book Flight </span>
              </span>
            </Comonbtn>
          </Link>
        </div>
      </div>
    </div>
  );
}
