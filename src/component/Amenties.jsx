import { useState } from "react";
import outdoor from "../assets/outdoor.png";

export default function Amenties({ hotsty }) {
  const [open, setOpen] = useState(false);
  const onHandleclcik = () => {
    setOpen(!open);
  };
  return (
    <div className="row">
      <div className="col-lg-12">
        <div className={hotsty.Amenities}>
          <h3 className={hotsty.comon_htrhee}>Amenities</h3>
          <div className={hotsty.Amenities_topupp}>
            <div className={hotsty.Amenities_left}>
              <div className={hotsty.Amenities_left_one}>
                <img src={outdoor} />
                <p>Outdoor pool</p>
              </div>
              <div className={hotsty.Amenities_left_one}>
                <img src={outdoor} />
                <p>Outdoor pool</p>
              </div>
              <div className={hotsty.Amenities_left_one}>
                <img src={outdoor} />
                <p>Outdoor pool</p>
              </div>
              <div className={hotsty.Amenities_left_one}>
                <img src={outdoor} />
                <p>Outdoor pool</p>
              </div>
              <div className={hotsty.Amenities_left_one}>
                <img src={outdoor} />
                <p>Outdoor pool</p>
              </div>
            </div>
            <div className={hotsty.Amenities_left}>
              <div className={hotsty.Amenities_left_one}>
                <img src={outdoor} />
                <p>Outdoor pool</p>
              </div>
              <div className={hotsty.Amenities_left_one}>
                <img src={outdoor} />
                <p>Outdoor pool</p>
              </div>
              <div className={hotsty.Amenities_left_one}>
                <img src={outdoor} />
                <p>Outdoor pool</p>
              </div>
              <div className={hotsty.Amenities_left_one}>
                <img src={outdoor} />
                <p>Outdoor pool</p>
              </div>
              {open && (
                <div className={hotsty.Amenities_left_one}>
                  <img src={outdoor} />
                  <p>Outdoor pool</p>
                </div>
              )}
              <div className={hotsty.tofor_mor} onClick={onHandleclcik}>
                +24 more
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
