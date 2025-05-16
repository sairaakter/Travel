import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import apple from "../../assets/apple.png";
import facbok from "../../assets/facbok.png";
import googleicon from "../../assets/googleicon.png";
import hidepaswrd from "../../assets/hidepaswrd.png";
import login_img from "../../assets/login_img.png";
import top_golobe from "../../assets/top_golobe.png";
import logsty from "../../style/Login.module.css";
import ButtonGroup from "../Carousalbtn";
import Comonbtn from "../Comonbtn";
import Linput, { Signbtns } from "../Linput";
import { Input } from "./Flightdetail.jsx";

export default function Login() {
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
    <div key={index} className={logsty.login_img}>
      <img src={item.img} />
    </div>
  ));
  return (
    <div className={logsty.airbus}>
      <div className="container cus_container">
        <div className={`row ${logsty.air_dates}`}>
          <div className="col-lg-6 col-md-5 col-sm-6">
            <div className={logsty.log_book}>
              <img className={logsty.top_logo} src={top_golobe} />
              <h2>Login</h2>
              <h3>Login to access your Golobe account</h3>
              <div className={logsty.log_adress}>
                <Linput
                  topclass="log_first"
                  labal="Email"
                  type="text"
                  id="emal"
                  classon="log_sign"
                  classto="first_pos"
                  placeholder="john.doe@gmail.com"
                  imgg={false}
                />
                <Linput
                  topclass="log_second"
                  labal="Password"
                  type="password"
                  id="password"
                  classon="log_sign"
                  placeholder="•••••••••••••••••••••••••"
                  imgg={true}
                  inputimg={hidepaswrd}
                />
                <div className={logsty.log_signbtn}>
                  <div className={logsty.check_flex}>
                    <Input name="Remember me" />
                    <p>Forgot Password</p>
                  </div>
                  <Comonbtn addbtn={`${logsty.logi}`}>Login</Comonbtn>
                  <p className={logsty.dont}>
                    Don’t have an account?
                    <span style={{ color: "#ff8682" }}>Sign up</span>
                  </p>
                </div>
              </div>
              <hr />
              <div className={logsty.or}>
                <p>Or login with</p>
              </div>
              <div className={logsty.sign_btns}>
                <Signbtns hartcls={logsty.heartbtn} btnimg={facbok} />
                <Signbtns hartcls={logsty.heartbtn} btnimg={googleicon} />
                <Signbtns hartcls={logsty.heartbtn} btnimg={apple} />
              </div>
            </div>
          </div>
          <div className={`col-xxl-1 ${logsty.othrer}`}></div>
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
