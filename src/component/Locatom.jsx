import { Link } from "react-router-dom";
import location from "../assets/location.png";
import Comonbtn from "./Comonbtn";

export default function Locatom({ too, hotsty }) {
  return (
    <div className="row">
      <div className="col-lg-12">
        <div className={`${hotsty.locat_map} ${hotsty.Amenities}`}>
          <div className={hotsty.locat_top}>
            <h3 className={hotsty.comon_htrhee}>Location/Map</h3>
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
                  <span>View on google maps</span>
                  <span>View on google maps</span>
                </span>
              </Comonbtn>
            </Link>
          </div>
          <div className={hotsty.locat_middle}>
            <div className={hotsty.if}>
              <iframe
                className={hotsty.iframe}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.2528001631!2d-74.14448723354508!3d40.69763123329699!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1694091799438!5m2!1sen!2sbd"
                height="532"
                style={{ border: 0 }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
          <div className={hotsty.lacat_botm}>
            <div className={hotsty.air_left}>
              <p>
                <img src={location} />
                <span>Gümüssuyu Mah. Inönü Cad. No:8, Istanbul 34437</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
