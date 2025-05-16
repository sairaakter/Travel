import { useEffect, useRef, useState } from "react";
import Inputcheck, { Filtertittle } from "./Inputcheck";

export default function FilterLeft({ filtersty }) {
  const [isExpanded, setIsExpanded] = useState(true);
  const [isExpandedtwo, setIsExpandedtwo] = useState(true);
  const [isExpandedthree, setIsExpandedthree] = useState(true);
  const [isExpandedfour, setIsExpandedfour] = useState(true);

  const [isExpandedfive, setIsExpandedfive] = useState(true);

  const toggleSection = () => {
    setIsExpanded(!isExpanded);
  };
  const toggleSectiontwo = () => {
    setIsExpandedtwo(!isExpandedtwo);
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
  // this slider functionalities for time

  const [startTime, setStartTime] = useState(0); // 0 minutes = 12:00 AM
  const [endTime, setEndTime] = useState(1439); // 1439 minutes = 11:59 PM
  const minMinute = 0;
  const maxMinute = 1439;
  const gapMinutes = 30;

  const startTooltipRef = useRef(null);
  const endTooltipRef = useRef(null);
  const trackBarRef = useRef(null);

  const formatToTime = (value) => {
    const hours = Math.floor(value / 60);
    const minutes = value % 60;
    const ampm = hours >= 12 ? "PM" : "AM";
    const formattedHours = hours % 12 === 0 ? 12 : hours % 12;
    const formattedMinutes = minutes.toString().padStart(2, "0");
    return `${formattedHours}:${formattedMinutes} ${ampm}`;
  };

  const updateUI = () => {
    const percentStart = (startTime / maxMinute) * 100;
    const percentEnd = (endTime / maxMinute) * 100;

    trackBarRef.current.style.left = `${percentStart}%`;
    trackBarRef.current.style.right = `${100 - percentEnd}%`;

    startTooltipRef.current.style.left = `${percentStart}%`;
    endTooltipRef.current.style.left = `${percentEnd}%`;
  };

  const handleStartChange = (e) => {
    const value = parseInt(e.target.value);
    if (endTime - value < gapMinutes) {
      setStartTime(endTime - gapMinutes);
    } else {
      setStartTime(value);
    }
  };

  const handleEndChange = (e) => {
    const value = parseInt(e.target.value);
    if (value - startTime < gapMinutes) {
      setEndTime(startTime + gapMinutes);
    } else {
      setEndTime(value);
    }
  };

  useEffect(() => {
    updateUI();
  }, [startTime, endTime]);

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
      <div className={isExpandedtwo ? filtersty.range_slider_wrapper : ""}>
        <Filtertittle
          Price="Departure Time"
          filtersty={filtersty}
          toggleSection={toggleSectiontwo}
          isExpanded={isExpandedtwo}
        />
        <div
          className={`${filtersty.expandableSection} ${
            isExpandedtwo ? filtersty.show : ""
          }`}
        >
          <div className={filtersty.range_slider_bar}>
            <span
              className={filtersty.range_slider_fill}
              ref={trackBarRef}
            ></span>
            <input
              type="range"
              className={`${filtersty.range_handle} range_handle-min`}
              min={minMinute}
              max={maxMinute}
              value={startTime}
              onChange={handleStartChange}
            />
            <input
              type="range"
              className={`${filtersty.range_handle} range_handle-max`}
              min={minMinute}
              max={maxMinute}
              value={endTime}
              onChange={handleEndChange}
            />

            <div
              className={`${filtersty.range_label} ${filtersty.range_label_min}`}
              ref={startTooltipRef}
            >
              {formatToTime(startTime)}
            </div>
            <div
              className={`${filtersty.range_label} ${filtersty.range_label_max}`}
              ref={endTooltipRef}
            >
              {formatToTime(endTime)}
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
          </div>
        </div>
      </div>
    </div>
  );
}
