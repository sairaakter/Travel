import fligsty from "../style/Flightrapper.module.css";

export default function Flighthrapper({ claswrap }) {
  return (
    <div className={fligsty[claswrap]}>
      <div className="container cus_container">
        <div className={fligsty.h_banner}>
          <h1>Make your travel whishlist, we’ll do the rest</h1>

          <p>Special offers to suit your plan</p>
        </div>
      </div>
    </div>
  );
}
