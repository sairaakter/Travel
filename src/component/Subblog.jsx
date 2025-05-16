import { Link } from "react-router-dom";

import Comonbtn from "./Comonbtn";
export default function Subblog({
  blogsty,
  blogimg,
  blogtp,
  blogmidl,
  btntext,
  btnimg,
  link,
}) {
  return (
    <div className="col-lg-6 col-md-6">
      <div className={blogsty.blog_wrapper}>
        <div className={blogsty.blog_img}>
          <img src={blogimg} alt="blog" />
        </div>
        <div className={blogsty.blog_contents}>
          <div className={blogsty.blog_text}>
            <h2>{blogtp}</h2>
            <p>{blogmidl}</p>
          </div>
          <div className={blogsty.blog_btns}>
            <Link
              to={link}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Comonbtn addbtn={`${blogsty.c_btn}`}>
                <span className={blogsty.c_animbtn}>
                  <span>
                    <img
                      src={btnimg}
                      alt="remove"
                      className={blogsty.imgcolochang}
                    />
                    {btntext}
                  </span>
                  <span>
                    <img
                      src={btnimg}
                      alt="remove"
                      className={blogsty.imgcolochang}
                    />
                    {btntext}
                  </span>
                </span>
              </Comonbtn>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
