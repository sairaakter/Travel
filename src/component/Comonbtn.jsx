import combtsty from "../style/comonbtn.module.css";
export default function Comonbtn({ addbtn, children, toggleSection, cdisnon }) {
  return (
    <button
      type="button"
      className={`${addbtn} ${combtsty.comonbtn} ${cdisnon}`}
      onClick={toggleSection}
    >
      {children}
    </button>
  );
}
