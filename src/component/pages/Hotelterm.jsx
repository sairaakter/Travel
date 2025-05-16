import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import botmidicontwo from "../../assets/botmidicontwo.png";
import location from "../../assets/location.png";
import Share from "../../assets/Share.png";
import termsty from "../../style/Terms.module.css";
import Comonbtn from "../Comonbtn";

import celend from "../../assets/celend.png";
import gate from "../../assets/gate.png";
import jamesdowto from "../../assets/jamesdowto.png";
import set from "../../assets/set.png";
import stikar from "../../assets/stikar.png";
import userlocation from "../../assets/userlocation.png";
import watch from "../../assets/watch.png";
import Navigated from "../Navigated";

export default function HotelTerm() {
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const type = searchParams.get("type");
  const [cardData, setCardData] = useState(null);

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

  return (
    <>
      <div className="container cus_container">
        <Navigated links={breadcrumbLinks} />
      </div>
      <div className={termsty.airbus}>
        <div className="container cus_container">
          <div className="row">
            <div className="col-lg-12">
              <div className={termsty.airbus_content}>
                <div className={termsty.top_air}>
                  <div className={termsty.air_left}>
                    <h1>{cardData.contytittle}</h1>
                    <p>
                      <img src={location} />
                      <span>{cardData.addres}</span>
                    </p>
                  </div>
                  <div className={termsty.air_right}>
                    <h2>{cardData.price}</h2>
                    <div className={termsty.air_botn}>
                      <button className={termsty.heartbtn}>
                        <img src={Share} />
                      </button>
                      <Comonbtn
                        addbtn={`${termsty.mybtn} ${termsty.c_anim_btn}`}
                      >
                        <span className={termsty.canim_btn}>
                          <span>Download</span>
                          <span>Download</span>
                        </span>
                      </Comonbtn>
                    </div>
                  </div>
                </div>
                <div className={termsty.middle_air}>
                  <div className="row">
                    <div className="col-lg-3 col-md-4 col-sm-4 col-4 p-0">
                      <div className={termsty.middl_left}>
                        <div className={termsty.bottom_dat}>
                          <div className={termsty.fromm}>
                            <h2>{cardData.from}</h2>
                            <p>Newark(EWR)</p>
                          </div>
                          <div className={termsty.bot_mdicon}>
                            <img src={botmidicontwo} />
                          </div>
                          <div className={`${termsty.to} ${termsty.fromm}`}>
                            <h2>{cardData.to}</h2>
                            <p>Newark(EWR)</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-8 col-sm-8 col-12 p-0">
                      <div className={termsty.middle_center}>
                        <div className={termsty.middle_center_top}>
                          <div className={termsty.midle_ctopleft}>
                            <img src={jamesdowto} />
                            <div>
                              <h1>James Doe</h1>
                              <p>Boarding Pass N’123</p>
                            </div>
                          </div>
                          <h5>Busniess ClassName</h5>
                        </div>
                        <div className={termsty.middle_cencenter}>
                          <div className={termsty.mcen_contnt}>
                            <img src={celend} />
                            <div className={termsty.midcen_flex}>
                              <h3>Date</h3>
                              <p>Newark(EWR)</p>
                            </div>
                          </div>
                          <div className={termsty.mcen_contnt}>
                            <img src={watch} />
                            <div className={termsty.midcen_flex}>
                              <h3>Date</h3>
                              <p>Newark(EWR)</p>
                            </div>
                          </div>
                          <div className={termsty.mcen_contnt}>
                            <img src={gate} />
                            <div className={termsty.midcen_flex}>
                              <h3>Date</h3>
                              <p>Newark(EWR)</p>
                            </div>
                          </div>
                          <div className={termsty.mcen_contnt}>
                            <img src={set} />
                            <div className={termsty.midcen_flex}>
                              <h3>Date</h3>
                              <p>Newark(EWR)</p>
                            </div>
                          </div>
                        </div>
                        <div className={termsty.middle_center_bottom}>
                          <div className={termsty.midcen_posion}>
                            <div className={termsty.midcen_bottmleft}>
                              <h4>EK</h4>
                              <p>ABC12345</p>
                            </div>
                            <img src={stikar} />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-12 p-0">
                      <div className={termsty.middl_right}>
                        <img src={userlocation} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className={termsty.terms}>
                <h2>Terms and Conditions</h2>
                <div className={termsty.payment}>
                  <h3>Payments</h3>
                  <ul>
                    <li>
                      <p>
                        If you are purchasing your ticket using a debit or
                        credit card via the Website, we will process these
                        payments via the automated secure common payment gateway
                        which will be subject to fraud screening purposes.
                      </p>
                    </li>
                    <li>
                      <p>
                        If you do not supply the correct card billing address
                        and/or cardholder information, your booking will not be
                        confirmed and the overall cost may increase. We reserve
                        the right to cancel your booking if payment is declined
                        for any reason or if you have supplied incorrect card
                        information. If we become aware of, or is notified of,
                        any fraud or illegal activity associated with the
                        payment for the booking, the booking will be cancelled
                        and you will be liable for all costs and expenses
                        arising from such cancellation, without prejudice to any
                        action that may be taken against us.
                      </p>
                    </li>
                    <li>
                      <p>
                        Golobe may require the card holder to provide additional
                        payment verification upon request by either submitting
                        an online form or visiting the nearest Golobe office, or
                        at the airport at the time of check-in. Golobe reserves
                        the right to deny boarding or to collect a guarantee
                        payment (in cash or from another credit card) if the
                        card originally used for the purchase cannot be
                        presented by the cardholder at check-in or when
                        collecting the tickets, or in the case the original
                        payment has been withheld or disputed by the card
                        issuing bank. Credit card details are held in a secured
                        environment and transferred through an internationally
                        accepted system.
                      </p>
                    </li>
                  </ul>
                </div>
                <div className={termsty.payment}>
                  <h3>Payments</h3>
                  <p>
                    If you have any questions about our Website or our Terms of
                    Use, please contact: <br />
                    Golobe Group Q.C.S.C
                    <br />
                    Golobe Tower
                    <br />
                    P.O. Box: 22550
                    <br />
                    Doha, State of Qatar
                    <br />
                    Further contact details can be found at golobe.com/help
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
