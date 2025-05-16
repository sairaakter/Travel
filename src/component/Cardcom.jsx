import React from "react";

export default function Cardcom({
  mapsty,
  name,
  boardingPass,
  mainifmage,
  clos,
}) {
  return (
    <div className={`${mapsty.card} ${clos}`}>
      <div className={mapsty.card_contnt}>
        <img src={mainifmage} alt="User" />
        <div className={mapsty.card_text}>
          <h3>{name}</h3>
          <p>{boardingPass}</p>
        </div>
      </div>

      <svg
        className={mapsty.arrow}
        width="70"
        height="37"
        viewBox="0 0 70 37"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M59.334 31.5455C59.334 34.1907 61.4783 36.335 64.1235 36.335H64.4428C67.088 36.335 69.2323 34.1907 69.2323 31.5455V31.5455C69.2323 28.9003 67.088 26.756 64.4428 26.756H64.1235C61.4783 26.756 59.334 28.9003 59.334 31.5455V31.5455Z"
          fill="white"
        />
        <path
          d="M60.5 28C38.5 36.5 6 22.8 6 2M6 2L12.5 9M6 2L1 9"
          stroke="url(#paint0_linear_2510_3935)"
          stroke-width="2"
          stroke-linecap="round"
        />
        <defs>
          <linearGradient
            id="paint0_linear_2510_3935"
            x1="6"
            y1="1.5"
            x2="51.5"
            y2="29"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.0855849" stopColor="#112211" />
            <stop offset="1" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
