import fallfive from "../assets/fallfive.png";
import fallone from "../assets/fallone.png";
import fallthree from "../assets/fallthree.png";
import falltwo from "../assets/falltwo.png";

export default function Fallright({ fallsty }) {
  return (
    <div className="col-xxl-7 col-lg-7 col-md-6 col-sm-6">
      <div className={fallsty.fall_right}>
        <div className={fallsty.fall_one}>
          <img src={fallone} />
          <img src={falltwo} className={fallsty.rgt_on} />
        </div>
        <div className={fallsty.fall_one}>
          <img src={fallthree} />
          <img src={fallfive} className={fallsty.rgt_on} />
        </div>
      </div>
    </div>
  );
}
