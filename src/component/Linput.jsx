import lsty from "../style/Linput.module.css";

export default function Linput({
  topclass,
  labal,
  type,
  id,
  classon,
  classto,
  placeholder,
  imgg,
  inputimg,
  topclasstwo,
}) {
  return (
    <div className={`${lsty[topclass]} ${topclasstwo}`}>
      <span className={lsty.e_pos}>{labal}</span>
      <div className={lsty.password_input_wrapper}>
        <input
          type={type}
          id={id}
          className={`${lsty[classon]} ${lsty[classto]}`}
          placeholder={placeholder}
        />
        {imgg ? <img className={lsty.password_toggle} src={inputimg} /> : ""}
      </div>
    </div>
  );
}

export function Signbtns({ btnimg, hartcls }) {
  return (
    <>
      <button className={hartcls}>
        <img src={btnimg} />
      </button>
    </>
  );
}
