import { Link } from "react-router-dom";
import roomone from "../assets/roomone.png";
import Comonbtn from "./Comonbtn";
export default function Avlablrom({ too, hotsty }) {
  return (
    <div className="row">
      <div className="col-lg-12">
        <div className={`${hotsty.room_avialbe} ${hotsty.Amenities}`}>
          <h3 className={hotsty.comon_htrhee}>Available Rooms</h3>
          <div className={hotsty.room_info}>
            <div className={hotsty.room_left}>
              <img src={roomone} />
              <p>Superior room - 1 double bed or 2 twin beds</p>
            </div>
            <div className={hotsty.room_right}>
              <h2>
                $240/<span style={{ fontSize: "14px" }}>night</span>
              </h2>
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
          <hr className={hotsty.comonhr} />
          <div className={hotsty.room_info}>
            <div className={hotsty.room_left}>
              <img src={roomone} />
              <p>Superior room - 1 double bed or 2 twin beds</p>
            </div>
            <div className={hotsty.room_right}>
              <h2>
                $240/<span style={{ fontSize: "14px" }}>night</span>
              </h2>
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
          <hr className={hotsty.comonhr} />
          <div className={hotsty.room_info}>
            <div className={hotsty.room_left}>
              <img src={roomone} />
              <p>Superior room - 1 double bed or 2 twin beds</p>
            </div>
            <div className={hotsty.room_right}>
              <h2>
                $240/<span style={{ fontSize: "14px" }}>night</span>
              </h2>
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
          <hr className={hotsty.comonhr} />
          <div className={hotsty.room_info}>
            <div className={hotsty.room_left}>
              <img src={roomone} />
              <p>Superior room - 1 double bed or 2 twin beds</p>
            </div>
            <div className={hotsty.room_right}>
              <h2>
                $240/<span style={{ fontSize: "14px" }}>night</span>
              </h2>
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
      </div>
    </div>
  );
}
