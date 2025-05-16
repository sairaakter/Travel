import { useState } from "react";
import Flag from "../assets/Flag.png";
import drerght from "../assets/drerght.png";
import dropleft from "../assets/dropleft.png";
import Comonbtn from "./Comonbtn";
import { allReviews } from "./allrevwdata";
// Generate 40 unique reviews

export default function Hotreview({ hotsty }) {
  const [currentPage, setCurrentPage] = useState(1);
  const reviewsPerPage = 5;
  const totalPages = Math.ceil(allReviews.length / reviewsPerPage);

  const handlePrev = () => currentPage > 1 && setCurrentPage(currentPage - 1);
  const handleNext = () =>
    currentPage < totalPages && setCurrentPage(currentPage + 1);

  const startIndex = (currentPage - 1) * reviewsPerPage;
  const currentReviews = allReviews.slice(
    startIndex,
    startIndex + reviewsPerPage
  );

  return (
    <div className="row">
      <div className="col-lg-12">
        <div className={hotsty.Amenities}>
          <div className={hotsty.locat_top}>
            <h3 className={hotsty.comon_htrhee}>Location/Map</h3>
            <Comonbtn addbtn={`${hotsty.mybtn} ${hotsty.c_anim_btn}`}>
              <span className={hotsty.canim_btn}>
                <span>Give your review</span>
                <span>Give your review</span>
              </span>
            </Comonbtn>
          </div>

          <div className={hotsty.revew}>
            <h2>4.2</h2>
            <div>
              <h3>Very good</h3>
              <p>{allReviews.length} verified reviews</p>
            </div>
          </div>

          <hr className={hotsty.comonhr} />

          <div className={hotsty.review_botom}>
            {currentReviews.map((review) => (
              <div key={review.id}>
                <Subrev hotsty={hotsty} review={review} />
                <hr className={hotsty.comonhr} />
              </div>
            ))}

            <div className={hotsty.pagination}>
              <img
                src={dropleft}
                onClick={handlePrev}
                style={{ cursor: "pointer" }}
              />
              <span>
                {currentPage} of {totalPages}
              </span>
              <img
                src={drerght}
                onClick={handleNext}
                style={{ cursor: "pointer" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Subrev({ hotsty, review }) {
  return (
    <div className={hotsty.sub_rev}>
      <div className={hotsty.left_rev}>
        <img src={`https://i.pravatar.cc/60?u=${review.id}`} alt="avatar" />
        <div>
          <p>
            <b>{review.rating} | </b>
            {review.name}
          </p>
          <p style={{ margin: 0 }}>{review.text}</p>
        </div>
      </div>
      <div className={hotsty.right_rev}>
        <img src={Flag} />
      </div>
    </div>
  );
}
