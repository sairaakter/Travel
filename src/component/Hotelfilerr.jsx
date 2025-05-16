import filtersty from "../style/Hotellisting.module.css";
import Hotelfiler from "./Hotelfilleft";
import Hotelright from "./Hotelright";
export default function HotelFilter() {
  return (
    <div className={filtersty.filtering}>
      <div className="container cus_container">
        <div className="row">
          <Hotelfiler filtersty={filtersty} />
          <Hotelright filtersty={filtersty} />
        </div>
      </div>
    </div>
  );
}
