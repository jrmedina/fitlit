import { DatePicker } from "@mui/x-date-pickers";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import * as dayjs from "dayjs";
import { findAvg, getDaysOfWeek } from "../../utils/helpers.utils";

const Sleep = () => {
  const user = useSelector((state) => state.user);
  const [selectedDate, setSelectedDate] = useState("");
  const sleepData = useSelector((state) => state.sleep);
  const userSleepData = sleepData.filter((sleep) => sleep.userID === user.id);

  const findDailySleepData = (date) => {
    const userSleepData = sleepData.filter((sleep) => sleep.userID === user.id);
    const sleep = userSleepData.find((sleep) => sleep.date === date);
    return sleep
      ? `Hours: ${sleep.hoursSlept || "no data"} Quality: ${
          sleep.sleepQuality || "no data"
        }`
      : "none";
  };

  const daysOfWeek = getDaysOfWeek().map((day) => findDailySleepData(day));

  const handleChange = (e) => {
    const today = dayjs(e).format("YYYY/MM/DD");
    setSelectedDate(findDailySleepData(today));
  };

  return (
    <div>
      <span>
        Avg Sleep Quality for all Users:{" "}
        {findAvg(sleepData, "sleepQuality").toFixed(1)}
      </span>
      <br />
      <span>
        Your Avg Sleep Quality / Hours Per Day:{" "}
        {findAvg(userSleepData, "sleepQuality").toFixed(1)} ⭐️'s /
        {findAvg(userSleepData, "hoursSlept").toFixed(1)} hours
      </span>
      <DatePicker onChange={(e) => handleChange(e)} />
      <p>{selectedDate}</p>
      <div className="water-intake-font">
        <span>This week's sleep: </span>
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
    </div>
  );
};

export default Sleep;
