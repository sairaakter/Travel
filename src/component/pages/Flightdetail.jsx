import { useContext, useEffect, useState } from "react";
import { Link, useParams, useSearchParams } from "react-router-dom";
import airplane from "../../assets/airplane.png";
import basic_one from "../../assets/basic_one.png";
import botmid_icon from "../../assets/botmid_icon.png";
import hamburgur from "../../assets/hamburgur.png";
import heartwo from "../../assets/heartwo.png";
import location from "../../assets/location.png";
import policy_img from "../../assets/policy_img.png";
import Share from "../../assets/Share.png";
import sit from "../../assets/sit.png";
import Wifi from "../../assets/Wifi.png";
import { CartContext } from "../../Context/Addfav";
import flitghtsty from "../../style/Flight.module.css";
import Comonbtn from "../Comonbtn";
import Navigated from "../Navigated";
export default function Flightdetail() {
  const { WishToCart } = useContext(CartContext);

  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const type = searchParams.get("type");

  const [cardData, setCardData] = useState(null);

  useEffect(() => {
    let data = [];
    if (type === "flightinner") {
      // এখানে আপনার ফ্লাইট ডেটা লোড করার লজিক লিখুন
      // সম্ভবত আপনি অন্য কোনো লোকাল স্টোরেজ কী ব্যবহার করছেন অথবা সরাসরি `revdata` ব্যবহার করতে পারেন
      const flightData = JSON.parse(localStorage.getItem("flightCards")) || []; // উদাহরণ
      data = flightData;
    } else if (type === "flightfirst") {
      data = JSON.parse(localStorage.getItem("cardsfirst")) || [];
    }

    const found = data.find((item) => item.id === parseInt(id));
    setCardData(found);
  }, [id, type]);

  if (!cardData) return <p>Loading...</p>;
  const breadcrumbLinks = [
    { name: "Turkey", path: "/Flightflow", active: false },
    { name: "Istanbul", path: "/Hotelflow", active: false },
    {
      name: "CVK Park Bosphorus Hotel Istanbul",
      path: "/Hotelflow",
      active: true,
    },
  ];

  return (
    <>
      <div className="container cus_container">
        <Navigated links={breadcrumbLinks} />
      </div>
      {/* <!-- airbus start --> */}

      <div className={flitghtsty.airbus}>
        <div className="container cus_container">
          <div className="row">
            <div className="col-lg-12">
              <div className={flitghtsty.airbus_content}>
                <div className={flitghtsty.top_air}>
                  <div className={flitghtsty.air_left}>
                    <h1>{cardData?.contytittle}</h1>
                    <p>
                      <img src={location} />
                      <span>{cardData?.addres}</span>
                    </p>
                    <div className={flitghtsty.views_options}>
                      <button>{cardData?.btntxt}</button>
                      <p>
                        <span style={{ fontWeight: 700 }}>Very Good</span>
                        {cardData?.reviews}
                      </p>
                    </div>
                  </div>
                  <div className={flitghtsty.air_right}>
                    <h2>{cardData?.price}</h2>
                    <div className={flitghtsty.air_botn}>
                      <button
                        className={flitghtsty.heartbtn}
                        onClick={(event) => {
                          event.stopPropagation();
                          event.preventDefault(); // Prevent navigation
                          WishToCart(cardData);
                        }}
                        style={{ cursor: "pointer" }}
                      >
                        <img src={heartwo} />
                      </button>
                      <button className={flitghtsty.heartbtn}>
                        <img src={Share} />
                      </button>
                      <Link
                        to={`/flydetailstwo/${cardData.id}?type=${type}`}
                        style={{
                          textDecoration: "none",
                          color: "inherit",
                        }}
                      >
                        <Comonbtn
                          addbtn={`${flitghtsty.mybtn} ${flitghtsty.c_anim_btn}`}
                        >
                          <span className={flitghtsty.canim_btn}>
                            <span>Book now</span>
                            <span>Book now</span>
                          </span>
                        </Comonbtn>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className={flitghtsty.img_emirates}>
                  <img src={cardData?.samllimg} />
                </div>
                <div className={flitghtsty.airbus_text}>
                  <h3>Basic Economy Features</h3>
                  <div className={flitghtsty.airline_options}>
                    <Input name="Economy" />
                    <Input name="First Class" />
                    <Input name="Busines Class" />
                  </div>
                </div>
                <div className={flitghtsty.img_galary}>
                  <img src={basic_one} />
                  <img src={basic_one} />
                  <img src={basic_one} />
                  <img src={basic_one} />
                  <img src={basic_one} />
                  <img src={basic_one} />
                  <img src={basic_one} />
                  <img src={basic_one} />
                  <img src={basic_one} />
                  <img src={basic_one} />
                  <img src={basic_one} />
                </div>
                <div className={flitghtsty.air_policies}>
                  <h4>Emirates Airlines Policies</h4>
                  <div className={flitghtsty.policy_contnt}>
                    <p>
                      <img src={policy_img} />
                      <span>
                        Pre-flight cleaning, installation of cabin HEPA filters.
                      </span>
                    </p>
                    <p>
                      <img src={policy_img} />
                      <span>Pre-flight health screening questions.</span>
                    </p>
                  </div>
                </div>
                <div className={flitghtsty.air_dates}>
                  <Subdate
                    returnDate={cardData?.return}
                    envo={cardData?.envo}
                    topplace={cardData?.topplace}
                    from={cardData?.from}
                    to={cardData?.to}
                    showsmmlimgt={cardData?.eminimg}
                  />
                  <Subdate
                    returnDate={cardData?.return}
                    envo={cardData?.envo}
                    topplace={cardData?.topplace}
                    from={cardData?.from}
                    to={cardData?.to}
                    showsmmlimgt={cardData?.eminimg}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export function Input({ name }) {
  return (
    <div className={flitghtsty.airline_check}>
      <input
        className={flitghtsty.airline_checkinput}
        type="checkbox"
        id="airline1"
      />
      <label className={flitghtsty.airline_checklabel} for="airline1">
        {name}
      </label>
    </div>
  );
}

function Subdate({ returnDate, envo, topplace, from, to, showsmmlimgt }) {
  return (
    <div className={flitghtsty.sub_date}>
      <div className={flitghtsty.top_dat}>
        <h5>{returnDate}</h5>
        <p>{envo}</p>
      </div>
      <div className={flitghtsty.middle_dat}>
        <div className={flitghtsty.midle_left}>
          <img src={showsmmlimgt} />
          <div className={flitghtsty.midle_contnt}>
            <h6>{topplace}</h6>
            <p>Airbus A320</p>
          </div>
        </div>
        <div className={flitghtsty.midle_right}>
          <div className={flitghtsty.airpromo_icon}>
            <a className={flitghtsty.pflight_btn} href="">
              <img src={airplane} />
            </a>
            <span className={flitghtsty.fjfdjs}></span>
            <a className={flitghtsty.pflight_btn} href="">
              <img src={Wifi} />
            </a>
            <span className={flitghtsty.fjfdjs}></span>
            <a className={flitghtsty.pflight_btn} href="">
              <img src={policy_img} />
            </a>
            <span className={flitghtsty.fjfdjs}></span>
            <a className={flitghtsty.pflight_btn} href="">
              <img src={hamburgur} />
            </a>
            <span className={flitghtsty.fjfdjs}></span>
            <a className={flitghtsty.pflight_btn} href="">
              <img src={sit} />
            </a>
          </div>
        </div>
      </div>
      <div className={flitghtsty.bottom_dat}>
        <div className={flitghtsty.fromm}>
          <h2>{from}</h2>
          <p>Newark(EWR)</p>
        </div>
        <div className={flitghtsty.bot_mdicon}>
          <img src={botmid_icon} />
        </div>
        <div className={`${flitghtsty.to} ${flitghtsty.fromm}`}>
          <h2>{to}</h2>
          <p>Newark(EWR)</p>
        </div>
      </div>
    </div>
  );
}
