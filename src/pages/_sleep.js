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
  const daysAbreviated = ["Su", "M", "Tu", "W", "Th", "F", "Sa"];

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

  const days = daysAbreviated.map((day) => (
    <div className={`dow ${day}`}>{day}</div>
  ));
  
  const dayStats = daysAbreviated.map((day, i) => (
    <div className={`h2o amt ${day}`}>{daysOfWeek[i] || "-"}</div>
  ));

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
          {days}
          {dayStats}
        </div>
      </div>
    </div>
  );
};

export default Sleep;
