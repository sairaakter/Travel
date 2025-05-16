import hotelts from "../assets/hotelts.png";
import send from "../assets/send.png";
import sho_flight from "../assets/sho_flight.png";

import blogsty from "../style/Blog.module.css";
import Subblog from "./Subblog";
export default function Blog() {
  return (
    <div className={blogsty.blog}>
      <div className="container cus_container">
        <div className={`row ${blogsty.bfor_sm}`}>
          <Subblog
            blogsty={blogsty}
            blogimg={sho_flight}
            blogtp="Flights"
            blogmidl="Search Flights & Places Hire to our most popular destinations"
            btntext="Show Flights"
            btnimg={send}
            link="/Flightlisting"
          />
          <Subblog
            blogsty={blogsty}
            blogimg={hotelts}
            blogtp="Hotels"
            blogmidl="Search hotels & Places Hire to our most popular destinations"
            btntext="Show Hotels"
            btnimg={send}
            link="/Hotellisting"
          />
        </div>
      </div>
    </div>
  );
}
