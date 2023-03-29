import React, { useState } from "react";
import { useSelector } from "react-redux";
import * as dayjs from "dayjs";

const Hydration = () => {
  const user = useSelector((state) => state.user);
  const hydrationData = useSelector((state) => state.hydration);
  const today = dayjs().format("YYYY/MM/DD");

  const findDayIntake = (date) => {
    const userHydrationData = hydrationData.filter(
      (hydro) => hydro.userID === user.id
    );
    const intake = userHydrationData.find((hydro) => hydro.date === date);
    return `${intake?.numOunces}oz`;
  };

  function getPreviousDaysOfWeekFromDate() {
    const today = new Date();
    const daysOfWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const dayOfWeekIndex = today.getDay();
    const mondayDate = new Date(today);
    mondayDate.setDate(today.getDate() - dayOfWeekIndex + 1); // Set date to the nearest Monday
    const previousDaysOfWeek = [];
    for (let i = 1; i < dayOfWeekIndex; i++) {
      const previousDay = new Date(mondayDate);
      previousDay.setDate(mondayDate.getDate() + i - 1);
      const formattedDate =
        previousDay.getFullYear() +
        "/" +
        (previousDay.getMonth() + 1).toString().padStart(2, "0") +
        "/" +
        previousDay.getDate().toString().padStart(2, "0");

      previousDaysOfWeek.push(formattedDate);
    }
    return previousDaysOfWeek;
  }

  const getAllData = () => {
    const daysOfWeek = getPreviousDaysOfWeekFromDate();
    daysOfWeek.push(today);
    const data = daysOfWeek.map((day) => findDayIntake(day));
    return data;
  };
  const weeksIntake = getAllData();

  return (
    <div>
      <span>
        Today's water intake: {findDayIntake(today)}
      </span>
      <br/>
      <span>Previous week's intake: {weeksIntake?.join(", ")}</span>
    </div>
  );
};

export default Hydration;
