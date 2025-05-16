import { Link } from "react-router-dom";
import Comonbtn from "./Comonbtn";
export default function Fsublog({
  fbosty,
  htwo,
  pwo,
  price,
  image_url,
  datamn,
  link,
  type,
}) {
  return (
    <div className={fbosty.blog_wrapper}>
      <div className={fbosty.blog_img}>
        <img src={image_url} alt="blog" />
      </div>
      <div className={fbosty.blog_contents}>
        <div className={fbosty.blog_text}>
          <div>
            <h2>{htwo}</h2>
            <p>{pwo}</p>
          </div>
          <div>
            <h5>{price}</h5>
          </div>
        </div>
        <div className={fbosty.blog_btns}>
          <Link
            to={`${link}${datamn.id}?type=${type}`}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <Comonbtn addbtn={`${fbosty.canim_btn}`}>
              <span className={fbosty.anim_btn}>
                <span> Book Flight </span>
                <span> Book Flight </span>
              </span>
            </Comonbtn>
          </Link>
        </div>
      </div>
    </div>
  );
}
