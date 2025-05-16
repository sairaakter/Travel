import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import apple from "../../assets/apple.png";
import facbok from "../../assets/facbok.png";
import googleicon from "../../assets/googleicon.png";
import hidepaswrd from "../../assets/hidepaswrd.png";
import login_img from "../../assets/login_img.png";
import top_golobe from "../../assets/top_golobe.png";
import sigsty from "../../style/Signup.module.css";
import ButtonGroup from "../Carousalbtn";
import Comonbtn from "../Comonbtn";
import Linput, { Signbtns } from "../Linput";
import { Input } from "./Flightdetail.jsx";

export default function Signup() {
  const cards = [
    {
      img: login_img,
    },
    {
      img: login_img,
    },
    {
      img: login_img,
    },
  ];
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1023, min: 768 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 767, min: 400 },
      items: 1,
    },
    smmm: {
      breakpoint: { max: 399, min: 0 },
      items: 1,
    },
  };
  const Rac = cards.map((item, index) => (
    <div key={index} className={sigsty.login_img}>
      <img src={item.img} />
    </div>
  ));
  return (
    <div className={sigsty.airbus}>
      <div className="container cus_container">
        <div className={`row ${sigsty.air_dates}`}>
          <div className="col-lg-6 col-md-6 col-sm-6">
            <div className={sigsty.log_book}>
              <img className={sigsty.top_logo} src={top_golobe} />
              <h2>Sign up</h2>
              <h3>
                Let’s get you all st up so you can access your personal account.
              </h3>
              <div className={sigsty.log_adress}>
                <div className={sigsty.two_flwx}>
                  <Linput
                    topclasstwo={sigsty.log_first}
                    labal="First Name"
                    type="text"
                    id="emal"
                    classon="log_sign"
                    classto="first_pos"
                    placeholder="john.doe@gmail.com"
                    imgg={false}
                  />
                  <Linput
                    topclasstwo={sigsty.log_second}
                    labal="Last Name"
                    type="text"
                    id="emal"
                    classon="log_sign"
                    classto="first_pos"
                    placeholder="john.doe@gmail.com"
                    imgg={false}
                  />
                </div>
                <div className={sigsty.two_flwx}>
                  <Linput
                    topclasstwo={sigsty.log_first}
                    labal="Email"
                    type="text"
                    id="emal"
                    classon="log_sign"
                    classto="first_pos"
                    placeholder="john.doe@gmail.com"
                    imgg={false}
                  />
                  <Linput
                    topclasstwo={sigsty.log_second}
                    labal="Phone Number"
                    type="text"
                    id="emal"
                    classon="log_sign"
                    classto="first_pos"
                    placeholder="john.doe@gmail.com"
                    imgg={false}
                  />
                </div>
                <Linput
                  topclass="log_first"
                  labal="Password"
                  type="password"
                  id="password"
                  classon="log_sign"
                  placeholder="•••••••••••••••••••••••••"
                  imgg={true}
                  inputimg={hidepaswrd}
                />
                <Linput
                  topclass="log_second"
                  labal="Confirm Password"
                  type="password"
                  id="password"
                  classon="log_sign"
                  placeholder="•••••••••••••••••••••••••"
                  imgg={true}
                  inputimg={hidepaswrd}
                />
                <Input
                  name={
                    <>
                      I agree to all the{" "}
                      <span style={{ color: "#FF8682", fontWeight: 600 }}>
                        Terms
                      </span>{" "}
                      and{" "}
                      <span style={{ color: "#FF8682", fontWeight: 600 }}>
                        Privacy Policies
                      </span>
                    </>
                  }
                />
                <div className={sigsty.log_signbtn}>
                  <Comonbtn addbtn={`${sigsty.logi}`}>Login</Comonbtn>
                  <p className={sigsty.dont}>
                    Don’t have an account?
                    <span style={{ color: "#ff8682" }}>Sign up</span>
                  </p>
                </div>
              </div>
              <hr />
              <div className={sigsty.or}>
                <p>Or login with</p>
              </div>
              <div className={sigsty.sign_btns}>
                <Signbtns hartcls={sigsty.heartbtn} btnimg={facbok} />
                <Signbtns hartcls={sigsty.heartbtn} btnimg={googleicon} />
                <Signbtns hartcls={sigsty.heartbtn} btnimg={apple} />
              </div>
            </div>
          </div>
          <div className={`col-xxl-1 ${sigsty.othrer}`}></div>
          <div className="col-xxl-5 col-lg-6 col-md-7 col-sm-6">
            <div
              className="carousel-container"
              style={{ position: "relative" }}
            >
              <Carousel
                customButtonGroup={<ButtonGroup />}
                responsive={responsive}
                arrows={false}
                renderButtonGroupOutside={true}
              >
                {Rac}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
