import filtersty from "../style/Filter.module.css";
import FilterLeft from "./FilterLeft";
import Filterright from "./Filterright";
export default function Filter() {
  return (
    <div className={filtersty.filtering}>
      <div className="container cus_container">
        <div className="row">
          <FilterLeft filtersty={filtersty} />
          <Filterright filtersty={filtersty} />
        </div>
      </div>
    </div>
  );
}
