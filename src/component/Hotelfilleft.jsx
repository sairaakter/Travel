import { useEffect, useRef, useState } from "react";
import Inputcheck, { Filtertittle } from "./Inputcheck";

export default function Hotelfiler({ filtersty }) {
  const [showamal, setshowamal] = useState(false);

  const [isExpanded, setIsExpanded] = useState(true);
  const [isExpandedthree, setIsExpandedthree] = useState(true);
  const [isExpandedfour, setIsExpandedfour] = useState(true);

  const [isExpandedfive, setIsExpandedfive] = useState(true);

  const onhandlee = () => {
    setshowamal(!showamal);
  };

  const toggleSection = () => {
    setIsExpanded(!isExpanded);
  };

  const toggleSectionthree = () => {
    setIsExpandedthree(!isExpandedthree);
  };
  const toggleSectionfour = () => {
    setIsExpandedfour(!isExpandedfour);
  };
  const toggleSectionfiveggg = () => {
    setIsExpandedfive(!isExpandedfive);
  };

  const [minVal, setMinVal] = useState(50);
  const [maxVal, setMaxVal] = useState(1200);
  const minLimit = 50;
  const maxLimit = 1200;
  const minGap = 10;

  const minTooltipRef = useRef(null);
  const maxTooltipRef = useRef(null);
  const trackRef = useRef(null);

  const updateSliderUI = () => {
    const percentMin = (minVal / maxLimit) * 100;
    const percentMax = (maxVal / maxLimit) * 100;

    trackRef.current.style.left = `${percentMin}%`;
    trackRef.current.style.right = `${100 - percentMax}%`;

    minTooltipRef.current.style.left = `${percentMin}%`;
    maxTooltipRef.current.style.left = `${percentMax}%`;
  };

  const handleMinChange = (e) => {
    const val = parseInt(e.target.value);
    if (maxVal - val < minGap) {
      setMinVal(maxVal - minGap);
    } else {
      setMinVal(val);
    }
  };

  const handleMaxChange = (e) => {
    const val = parseInt(e.target.value);
    if (val - minVal < minGap) {
      setMaxVal(minVal + minGap);
    } else {
      setMaxVal(val);
    }
  };

  useEffect(() => {
    updateSliderUI();
  }, [minVal, maxVal]);

  const btndata = [
    {
      btntext: "0+",
    },
    {
      btntext: "1+",
    },
    {
      btntext: "2+",
    },
    {
      btntext: "3+",
    },
    {
      btntext: "4+",
    },
  ];

  return (
    <div className={`col-lg-3 col-md-4 col-sm-4 ${filtersty.fil_left}`}>
      <h1>Filters</h1>
      <div className={isExpanded ? filtersty.double_slider_box : ""}>
        <Filtertittle
          Price="Price"
          filtersty={filtersty}
          toggleSection={toggleSection}
          isExpanded={isExpanded}
        />
        <div
          className={`${filtersty.expandableSection} ${
            isExpanded ? filtersty.show : ""
          }`}
        >
          <div className={filtersty.range_slider}>
            <span className={filtersty.slider_track} ref={trackRef}></span>
            <input
              type="range"
              className="min-val"
              min={minLimit}
              max={maxLimit}
              value={minVal}
              onChange={handleMinChange}
            />
            <input
              type="range"
              className="max-val"
              min={minLimit}
              max={maxLimit}
              value={maxVal}
              onChange={handleMaxChange}
            />

            <div
              className={`${filtersty.tooltip} ${filtersty.min_tooltip}`}
              ref={minTooltipRef}
            >
              ${minVal}
            </div>
            <div
              className={`${filtersty.tooltip} ${filtersty.max_tooltip}`}
              ref={maxTooltipRef}
            >
              ${maxVal}
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className={filtersty.rating_filter}>
        <Filtertittle
          Price="Rating"
          filtersty={filtersty}
          toggleSection={toggleSectionthree}
          isExpanded={isExpandedthree}
        />

        <div
          className={`${filtersty.expandableSection} ${
            isExpandedthree ? filtersty.show : ""
          }`}
        >
          <div className={filtersty.rating_options}>
            {btndata.map((btntx, index) => (
              <button key={index} className={filtersty.ra_btn}>
                {btntx.btntext}
              </button>
            ))}
          </div>
        </div>
      </div>
      <hr />
      <div className={filtersty.airlines_filter}>
        <Filtertittle
          Price="Airlines"
          filtersty={filtersty}
          toggleSection={toggleSectionfour}
          isExpanded={isExpandedfour}
        />
        <div
          className={`${filtersty.expandableSection} ${
            isExpandedfour ? filtersty.show : ""
          }`}
        >
          <div className={filtersty.airline_options}>
            <Inputcheck label="Emirates" />
            <Inputcheck label="Fly Dubai" />
            <Inputcheck label="Qatar" />
            <Inputcheck label="Etihad" />
          </div>
        </div>
      </div>
      <hr />
      <div className={filtersty.airlines_filter}>
        <Filtertittle
          Price="Trips"
          filtersty={filtersty}
          toggleSection={toggleSectionfiveggg}
          isExpanded={isExpandedfive}
        />
        <div
          className={`${filtersty.expandableSection} ${
            isExpandedfive ? filtersty.show : ""
          }`}
        >
          <div className={filtersty.airline_optionstwo}>
            <Inputcheck label="Emirates" />
            <Inputcheck label="Fly Dubai" />
            <Inputcheck label="Qatar" />
            <Inputcheck label="Etihad" />
            {!showamal ? (
              <>
                <Inputcheck label="Emirates" />
                <Inputcheck label="Fly Dubai" />
                <Inputcheck label="Qatar" />
                <Inputcheck label="Etihad" />
                <Inputcheck label="Emirates" />
                <Inputcheck label="Fly Dubai" />
                <Inputcheck label="Qatar" />
                <Inputcheck label="Etihad" />
                <Inputcheck label="Emirates" />
                <Inputcheck label="Fly Dubai" />
                <Inputcheck label="Qatar" />
                <Inputcheck label="Etihad" />
                <Inputcheck label="Emirates" />
                <Inputcheck label="Fly Dubai" />
                <Inputcheck label="Qatar" />
                <Inputcheck label="Etihad" />
                <Inputcheck label="Emirates" />
                <Inputcheck label="Fly Dubai" />
                <Inputcheck label="Qatar" />
                <Inputcheck label="Etihad" />
                <Inputcheck label="Emirates" />
                <Inputcheck label="Fly Dubai" />
                <Inputcheck label="Qatar" />
                <Inputcheck label="Etihad" />
              </>
            ) : (
              <span />
            )}
          </div>
        </div>
        <div className={filtersty.tofor_mor} onClick={onhandlee}>
          {showamal ? "+24 more" : "+24 less"}
        </div>
      </div>
    </div>
  );
}
