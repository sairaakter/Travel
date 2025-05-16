import contlsty from "../style/Comontittle.module.css";
import Comonbtn from "./Comonbtn";

export default function Comontittle({
  tottl,
  midlettl,
  btnttl,
  cdisnon,
  gaped,
}) {
  return (
    <div className={contlsty.comon_tittle}>
      <div className="container cus_container">
        <div className={`${contlsty.comon_tittle_wrapper} ${contlsty[gaped]}`}>
          <div className={`${contlsty.first_tittle} ${contlsty[gaped]}`}>
            <h1>{tottl}</h1>
            <p>{midlettl}</p>
          </div>
          <div
            className={`${contlsty.second_tittle} ${contlsty.logos_btnfiv} ${contlsty.btn_9}`}
          >
            <Comonbtn cdisnon={cdisnon}>{btnttl}</Comonbtn>
          </div>
        </div>
      </div>
    </div>
  );
}
