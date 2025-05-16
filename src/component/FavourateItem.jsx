import cup from "../assets/cup.png";
import fiifavrate from "../assets/fiifavrate.png";
import location from "../assets/location.png";
import star from "../assets/star.png";
import Comonbtn from "./Comonbtn";

export default function FavourateItem({ favsty, item, removeFromWish }) {
  return (
    <div className={`row ${favsty.hotel_info}`}>
      <div
        className={`col-xxl-2 col-xl-3 col-lg-3 col-md-4 col-sm-5 col-12 ${favsty.algncentr}`}
      >
        <img src={item.fav_img} />
      </div>

      <div
        className={`col-xxl-10 col-xl-9 col-lg-9 col-md-8 col-sm-7 col-12 ${favsty.algncentrtwo}`}
      >
        <div className={favsty.views}>
          <div className={favsty.air_left}>
            <h1>{item.contytittle}</h1>
            <p className={favsty.ddj}>
              <img src={location} />
              <span>{item.addres}</span>
            </p>
            <div className={favsty.star_hotel}>
              <div className={favsty.star_left}>
                <div className={favsty.star_img}>
                  <img src={star} />
                  <img src={star} />
                  <img src={star} />
                  <img src={star} />
                  <img src={star} />
                </div>
                <div className={favsty.start_cont}>
                  <p>5 Star Hotel</p>
                </div>
              </div>
              <div className={favsty.star_right}>
                <img src={cup} />
                <p>
                  <b>20+</b> Aminities
                </p>
              </div>
            </div>
            <div className={favsty.views_options}>
              <button>0+</button>
              <p>
                <span style={{ fontWeight: 700 }}>Very Good</span> 54 reviews
              </p>
            </div>
          </div>
          <div className={favsty.startin_form}>
            <p>starting from</p>
            <h3>
              $240/<span style={{ fontSize: "14px" }}>night</span>
            </h3>
            <h4>excl. tax</h4>
          </div>
        </div>
        <div className={favsty.bokin_time}>
          <div className={favsty.bokin_options}>
            <hr />
            <div className={favsty.bokin_btn}>
              <button
                className={favsty.heartbtn}
                onClick={(event) => {
                  event.stopPropagation();
                  event.preventDefault();
                  removeFromWish(item);
                }}
              >
                <img src={fiifavrate} />
              </button>
              <Comonbtn addbtn={`${favsty.mybtn} ${favsty.c_anim_btn}`}>
                <span className={favsty.canim_btn}>
                  <span>Book Flight</span>
                  <span>Book Flight</span>
                </span>
              </Comonbtn>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
