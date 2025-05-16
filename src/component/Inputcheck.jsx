import filterdropdwn from "../assets/filterdropdwn.png";
import inputsyt from "../style/Inputchek.module.css";
export default function Inputcheck() {
  return (
    <div className={inputsyt.airline_check}>
      <input
        className={inputsyt.airline_checkinput}
        type="checkbox"
        id="airline1"
      />
      <label className={inputsyt.airline_checklabel} htmlFor="airline1">
        Emirates
      </label>
    </div>
  );
}

export function Filtertittle({ Price, filtersty, toggleSection, isExpanded }) {
  return (
    <div className={filtersty.filter_tittle}>
      <h2>{Price}</h2>
      <img
        src={filterdropdwn}
        onClick={toggleSection}
        className={`${filtersty.rotateIcon} ${
          isExpanded ? filtersty.expanded : ""
        }`}
      />
    </div>
  );
}
