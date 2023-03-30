import React, { useState } from "react";
import { useSelector } from "react-redux";
import * as dayjs from "dayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { getDaysOfWeek } from "../../utils/helpers.utils";

const Hydration = () => {
  const user = useSelector((state) => state.user);
  const hydrationData = useSelector((state) => state.hydration);
  const [selectedDate, setselectedDate] = useState("");
  const today = dayjs().format("YYYY/MM/DD");

  const findDayIntake = (date) => {
    const userHydrationData = hydrationData.filter(
      (hydro) => hydro.userID === user.id
    );
    const intake = userHydrationData.find((hydro) => hydro.date === date);
    return !intake ? "none" : `${intake.numOunces}oz`;
  };

  const daysOfWeek = getDaysOfWeek().map((day) => findDayIntake(day));

  const handleChange = (e) => {
    const day = dayjs(e).format("YYYY/MM/DD");
    setselectedDate(findDayIntake(day));
  };

  return (
    <div className="water-widget-container">
      <div className="water-widget-hero">
        <div className="water-widget-title-wrapper">
          <h2 className="water-widget-title">H₂O</h2>
        </div>
        <div className="today-water-wrapper">
          <span className="water-intake-font">Today's water intake:</span>
          <span className="water-intake-font">{findDayIntake(today)}</span>
        </div>
        <div className="water-intake-font">
          <span>This week's intake: </span>
        </div>
        <div className="lower-water-wrapper">
          <div className="days-of-the-wk-grid">
            <div className="dow m">M</div>
            <div className="dow tu">Tu</div>
            <div className="dow w">W</div>
            <div className="dow th">Th</div>
            <div className="dow f">F</div>
            <div className="dow sa">Sa</div>
            <div className="dow su">Su</div>

            <div className="h2o amt m">{daysOfWeek[0] || "-"}</div>
            <div className="h2o amt tu">{daysOfWeek[1] || "-"}</div>
            <div className="h2o amt w">{daysOfWeek[2] || "-"}</div>
            <div className="h2o amt th">{daysOfWeek[3] || "-"}</div>
            <div className="h2o amt f">{daysOfWeek[4] || "-"}</div>
            <div className="h2o amt sa">{daysOfWeek[5] || "-"}</div>
            <div className="h2o amt su">{daysOfWeek[6] || "-"}</div>
          </div>
        </div>
        <div className="find-oz-wrapper">
          <DatePicker onChange={(e) => handleChange(e)} />
          <div className="found-oz-wrapper">
            <p className="oz-drank">{selectedDate}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hydration;
