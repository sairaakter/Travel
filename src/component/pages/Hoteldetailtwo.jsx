import airplane from "../../assets/airplane.png";
import botmid_icon from "../../assets/botmid_icon.png";
// import closicon from "../../assets/closicon.png";
import facbok from "../../assets/facbok.png";
import hamburgur from "../../assets/hamburgur.png";
// import modalvisa from "../../assets/modalvisa.png";
import policy_img from "../../assets/policy_img.png";

import sit from "../../assets/sit.png";
// import visa from "../../assets/visa.png";
import Navigated from "../Navigated";

import Wifi from "../../assets/Wifi.png";
import booksty from "../../style/FlightBook.module.css";
// import bookstytwo from "../../style/Flightbooktwo.module.css";
// import modalsty from "../../style/modal.module.css";

import { useEffect, useState } from "react";
import { Link, useParams, useSearchParams } from "react-router-dom";
import Comonbtn from "../Comonbtn";

import googleicon from "../../assets/googleicon.png";

// import { useNavigate } from "react-router-dom";
import apple from "../../assets/apple.png";
import emailicon from "../../assets/emailicon.png";

export default function Hoteldetaitwo() {
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const type = searchParams.get("type");

  const [cardData, setCardData] = useState(null);
  const [expand, setexpand] = useState(false);

  useEffect(() => {
    let data = [];
    if (type === "flight") {
      // এখানে আপনার ফ্লাইট ডেটা লোড করার লজিক লিখুন
      // সম্ভবত আপনি অন্য কোনো লোকাল স্টোরেজ কী ব্যবহার করছেন অথবা সরাসরি `revdata` ব্যবহার করতে পারেন
      const flightData = JSON.parse(localStorage.getItem("flightCards")) || []; // উদাহরণ
      data = flightData;
    } else if (type === "hotel") {
      data = JSON.parse(localStorage.getItem("cards")) || [];
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

  const onhandle = () => {
    setexpand(!expand);
  };
  return (
    <>
      <div className="container cus_container">
        <Navigated links={breadcrumbLinks} />
      </div>
      <div className={booksty.airbus}>
        <div className="container cus_container">
          <div className="row">
            <div className="col-lg-8 col-md-8">
              <div className={booksty.airbus_content}>
                <div className={booksty.air_dates}>
                  <div className={booksty.sub_date}>
                    <div className={booksty.first_todat}>
                      <h4>{cardData.contytittle}</h4>
                      <p>{cardData.price}</p>
                    </div>
                    <div className={booksty.top_dat}>
                      <h5>{cardData.return}</h5>
                      <p>{cardData.envo}</p>
                    </div>
                    <div className={booksty.middle_dat}>
                      <div className={booksty.midle_left}>
                        <img src={cardData.eminimg} />
                        <div className={booksty.midle_contnt}>
                          <h6>{cardData.topplace}</h6>
                          <p>Airbus A320</p>
                        </div>
                      </div>
                      <div className={booksty.midle_right}>
                        <div className={booksty.airpromo_icon}>
                          <a className={booksty.pflight_btn} href="">
                            <img src={airplane} />
                          </a>
                          <span className={booksty.fjfdjs}></span>
                          <a className={booksty.pflight_btn} href="">
                            <img src={Wifi} />
                          </a>
                          <span className={booksty.fjfdjs}></span>
                          <a className={booksty.pflight_btn} href="">
                            <img src={policy_img} />
                          </a>
                          <span className={booksty.fjfdjs}></span>
                          <a className={booksty.pflight_btn} href="">
                            <img src={hamburgur} />
                          </a>
                          <span className={booksty.fjfdjs}></span>
                          <a className={booksty.pflight_btn} href="">
                            <img src={sit} />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className={booksty.bottom_dat}>
                      <div className={booksty.fromm}>
                        <h2>{cardData.from}</h2>
                        <p>Newark(EWR)</p>
                      </div>
                      <div className={booksty.bot_mdicon}>
                        <img src={botmid_icon} />
                      </div>
                      <div className={`${booksty.to} ${booksty.fromm}`}>
                        <h2>{cardData.to}</h2>
                        <p>Newark(EWR)</p>
                      </div>
                    </div>
                  </div>
                  <div className={booksty.full_pay}>
                    <div className={booksty.air_policies}>
                      <div>
                        <h4>Pay in full</h4>
                        <p style={{ margin: 0 }}>
                          Pay the total and you are all set
                        </p>
                      </div>
                      <div className={booksty.policy_contnt}>
                        <div className={booksty.custom_radio}>
                          <input type="radio" name="option" />
                          <span className={booksty.radio_mark}></span>
                        </div>
                      </div>
                    </div>
                    <div className={booksty.air_policies}>
                      <div>
                        <h4>Pay in full</h4>
                        <p style={{ margin: 0 }}>
                          Pay the total and you are all set
                        </p>
                      </div>
                      <div className={booksty.policy_contnt}>
                        <div className={booksty.custom_radio}>
                          <input type="radio" name="option" />
                          <span className={booksty.radio_mark}></span>
                        </div>
                      </div>
                    </div>
                    {expand && (
                      <div className={booksty.air_policies}>
                        <div>
                          <h4>Pay in full</h4>
                          <p style={{ margin: 0 }}>
                            Pay the total and you are all set
                          </p>
                        </div>
                        <div className={booksty.policy_contnt}>
                          <div className={booksty.custom_radio}>
                            <input type="radio" name="option" />
                            <span className={booksty.radio_mark}></span>
                          </div>
                        </div>
                      </div>
                    )}
                    <span className={booksty.mor_info} onClick={onhandle}>
                      {expand ? "Less info" : "More info"}
                    </span>
                  </div>
                  <div className={booksty.log_book}>
                    <h2>Login or Sign up to book</h2>
                    <div className={booksty.log_adress}>
                      <input
                        type="text"
                        id="emal"
                        className={booksty.log_sign}
                        placeholder="Phone Number"
                      />
                      <p>
                        We’ll call or text you to confirm your number. Standard
                        message and data rates apply. Privacy Policy
                      </p>
                      <div className={booksty.log_signbtn}>
                        <Link
                          to={`/detailstwofour/${cardData.id}?type=${type}`}
                          style={{
                            textDecoration: "none",
                            color: "inherit",
                            width: "100%",
                          }}
                        >
                          <Comonbtn addbtn={booksty.cont}>Continue</Comonbtn>
                        </Link>
                      </div>
                    </div>
                    <hr />
                    <div className={booksty.or}>
                      <p>Or</p>
                    </div>
                    <div className={booksty.sign_btns}>
                      <button className={booksty.heartbtn}>
                        <img src={facbok} />
                      </button>
                      <button className={booksty.heartbtn}>
                        <img src={googleicon} />
                      </button>
                      <button className={booksty.heartbtn}>
                        <img src={apple} />
                      </button>
                    </div>
                    <button className={booksty.witmailbtn}>
                      <img src={emailicon} />
                      <span>Continue with email</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4">
              <div className={booksty.detai_right}>
                <div className={booksty.deatal_one}>
                  <img src={cardData.economy} />
                  <div className={booksty.air_left}>
                    <p>Economy </p>
                    <h1>{cardData.contytittle}</h1>
                    <div className={booksty.views_options}>
                      <button>{cardData.btntxt}</button>
                      <p>
                        <span style={{ fontWeight: 700 }}>Very Good</span>
                        {cardData.reviews}
                        reviews
                      </p>
                    </div>
                  </div>
                </div>
                <hr />
                <span className={booksty.boking}>
                  Your booking is protected by <b>golobe</b>
                </span>
                <hr />
                <div className={booksty.detail_two}>
                  <h6>Price Details</h6>
                  <div className={booksty.basefare}>
                    <h2>Base Fare</h2>
                    <p>{cardData.discounprice}</p>
                  </div>
                  <div className={booksty.basefare}>
                    <h2>Base Fare</h2>
                    <p>{cardData.discounprice}</p>
                  </div>
                  <div className={booksty.basefare}>
                    <h2>Base Fare</h2>
                    <p>{cardData.discounprice}</p>
                  </div>
                  <div className={booksty.basefare}>
                    <h2>Base Fare</h2>
                    <p>{cardData.discounprice}</p>
                  </div>
                  <hr />
                  <div className={booksty.basefare}>
                    <h2>Base Fare</h2>
                    <p>{cardData.discounprice}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
