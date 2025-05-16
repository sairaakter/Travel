import React from "react";
import googleicon from "../assets/googleicon.png";
import review from "../assets/review.png";

export default function Subreview({
  quote,
  revieww,
  name,
  location,
  source,
  image_url,
  revsty,
  lastclas,
}) {
  return (
    <div className={revsty.review_wrapper}>
      <div className={revsty.revw_shdo}>
        <div className={revsty.middlecont}>
          <div className={revsty.review_content}>
            <h1>{quote}</h1>
            <p>{revieww}</p>
            <p className={revsty.vew}>View more</p>
          </div>
          <div className={revsty.review_img}>
            <img src={review} alt="review" />
            <img src={review} alt="review" />
            <img src={review} alt="review" />
            <img src={review} alt="review" />
            <img src={review} alt="review" />
          </div>
          <div className={revsty.rvw_sub}>
            <h2>{name}</h2>
            <p>{location}</p>
          </div>
          <div className={revsty.google}>
            <img src={googleicon} />
            <p>{source}</p>
          </div>
          <img
            src={image_url}
            alt="left"
            className={`${revsty.rmain} ${lastclas} `}
          />
        </div>
      </div>
    </div>
  );
}
