import { useEffect, useState } from "react";
import { Link, useParams, useSearchParams } from "react-router-dom";
import Add_circle from "../../assets/Add_circle.png";
import Wifi from "../../assets/Wifi.png";
import airplane from "../../assets/airplane.png";
import botmid_icon from "../../assets/botmid_icon.png";
import closicon from "../../assets/closicon.png";
import hamburgur from "../../assets/hamburgur.png";
import modalvisa from "../../assets/modalvisa.png";
import policy_img from "../../assets/policy_img.png";
import sit from "../../assets/sit.png";
import visa from "../../assets/visa.png";
import booksty from "../../style/FlightBook.module.css";
import bookstytwo from "../../style/Flightbooktwo.module.css";
import modalsty from "../../style/modal.module.css";
import Comonbtn from "../Comonbtn";
import Navigated from "../Navigated";
import { Input } from "./Flightdetail";

export default function Addcard() {
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const type = searchParams.get("type");
  const [expand, setexpand] = useState(false);
  const [showModal, setShowModal] = useState(false);

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
                  <div className={bookstytwo.log_book}>
                    <div className={bookstytwo.air_policies}>
                      <div className={bookstytwo.policy_contnt}>
                        <label for="javascript">
                          <img src={visa} />
                          <b>**** 4321</b>
                          02/27
                        </label>
                        <div className={bookstytwo.custom_radio}>
                          <input type="radio" name="option" />
                          <span className={bookstytwo.radio_mark}></span>
                        </div>
                      </div>
                    </div>

                    <div
                      className={bookstytwo.add_card}
                      onClick={() => setShowModal(true)}
                    >
                      <div className={bookstytwo.imgcontnt}>
                        <img src={Add_circle} />
                        <p>Add a new card</p>
                      </div>
                    </div>
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
      {showModal && (
        <div className={modalsty.modal_overlay}>
          <div className={modalsty.modal_content}>
            <button
              onClick={() => setShowModal(false)}
              className={modalsty.defaltstyl}
            >
              <img src={closicon} />
            </button>
            <h2>Add a new Card</h2>
            <form action="/action_page.php" className={modalsty.promo_form}>
              <fieldset>
                <legend>From - To</legend>
                <input
                  type="text"
                  id="from-to"
                  className={modalsty.From_to}
                  placeholder="4321 4321 4321 4321"
                />
                <button type="button" className={modalsty.send_btn}>
                  <img src={modalvisa} alt="from to" />
                </button>
              </fieldset>
              <div className={modalsty.modal_flex}>
                <fieldset>
                  <legend>From - To</legend>
                  <input
                    type="text"
                    id="from-to"
                    className={modalsty.From_to}
                    placeholder="02/27"
                  />
                </fieldset>
                <fieldset>
                  <legend>From - To</legend>
                  <input
                    type="text"
                    id="from-to"
                    className={modalsty.From_to}
                    placeholder="123"
                  />
                </fieldset>
              </div>

              <fieldset>
                <legend>From - To</legend>
                <input
                  type="text"
                  id="from-to"
                  className={modalsty.From_to}
                  placeholder="John Doe"
                />
              </fieldset>
              <fieldset className={modalsty.cus_width}>
                <legend>Trip</legend>
                <div className={modalsty.select_wrapper}>
                  <select
                    id="trip-type"
                    className={`${modalsty.trip_select} ${modalsty.From_to}`}
                  >
                    <option value="return" selected>
                      Return
                    </option>
                    <option value="one-way">One way</option>
                    <option value="multi-city">Multi-city</option>
                  </select>
                  <div className={modalsty.custom_arrow}>
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
            </form>
            <div className={modalsty.margtopinput}>
              <Input name="Securely save my information for 1-click checkout" />
            </div>
            <Link
              to={`/flydetailsfour/${cardData.id}?type=${type}`}
              style={{
                textDecoration: "none",
                color: "inherit",
                width: "100%",
              }}
            >
              <Comonbtn addbtn={`${modalsty.mybtn} ${modalsty.c_anim_btn}`}>
                <span className={modalsty.canim_btn}>
                  <span>Add Card</span>
                  <span>Add Card</span>
                </span>
              </Comonbtn>
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
