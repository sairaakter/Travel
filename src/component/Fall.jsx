import fallsty from "../style/Fall.module.css";
import Fallleft from "./Fallleft";
import Fallright from "./Fallright";
export default function Fall({ link }) {
  return (
    <div className={fallsty.fall}>
      <div className="container cus_container">
        <div className="row">
          <Fallleft fallsty={fallsty} link={link} />
          <Fallright fallsty={fallsty} />
        </div>
      </div>
    </div>
  );
}
