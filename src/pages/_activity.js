import React, { useState } from "react";
import { useSelector } from "react-redux";
import * as dayjs from "dayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { getDaysOfWeek } from "../../utils/helpers.utils";

const Activity = () => {
  const [findMilesWalked, setMilesWalked] = useState("");
  const [selectedDate, setSelectedDate] = useState("");

  const user = useSelector((state) => state.user);
  //   console.log({ user });
  const userActivityData = useSelector((state) => state.activity);
  console.log({ userActivityData });
  const today = dayjs().format("YYYY/MM/DD");
  const daysAbbreviated = ["M", "Tu", "W", "Th", "F", "Sa", "Su"];
 
  const findDailyStepData = (date) => {
    const userActivities = userActivityData.filter(
      (activity) => activity.userID === user.id
    );
    const step = userActivities.find((activity) => activity.date === date);
    console.log("step-29", step);
    return step ? `Steps: ${step.numSteps || "no data"}` : "none";
  };
  const daysOfWeek = getDaysOfWeek().map((day) => findDailyStepData(day));

  console.log("findDailyStepData", findDailyStepData());
  const handleChange = (e) => {
    const today = dayjs(e).format("YYYY/MM/DD");
    setSelectedDate(findDailyStepData(today));
  };

  const userInfo = (date) =>
    userActivityData.find((steps) => {
      return steps.date === date && steps.userID === user.id;
    });

  const findDailyMiles = () => {
    let feetInAMile = 5280;

    const totalUserStepsToday = userInfo(today)?.numSteps;

    // for some reason this constant on line 29 will not work past line 39
    // It's being used on line 26 then it refuses to work past line 39
    // I re-declared this naming convention on line 40 with the same function and
    // it work now.
    // It doesn't matter if I use var, let or const, nothing works past that line.

    const totalMilesWalked = (
      (totalUserStepsToday * user.strideLength) /
      feetInAMile
    ).toFixed(2);
    return `You have walked ${totalMilesWalked} miles, today! `;
  };

  const totalUserStepsToday = userInfo(today)?.numSteps;
  // Here is the constant that won't work past line 39

  //   console.log('totalUserStepsToday', totalUserStepsToday)

  const [hours, minutes] = (userInfo(today)?.minutesActive / 60)
    .toFixed(2)
    .split(".");

  const days = daysAbbreviated.map((day) => (
    <div className={`dow ${day}`}>{day}</div>
  ));
    const dayStats = daysAbbreviated.map((day, i) => (
      <div className={`Step amt ${day}`}>{daysOfWeek[i] || "Ⓞ"}</div>
    ));
    // Why is the className Step amt ${day}?

  const userStepGoalMet =
    userInfo(today)?.numSteps >= user.dailyStepGoal
      ? "Congratulations, you have met your step goal!"
      : "Sorry, you did not meet your step goal today";

  // Find user step goals by day. Start at Mon and reset each week.
  // Fill in the current step goals and fill in the rest with empty circles.
  // If step goal is displayed and met show a green circle 🟢
  // if step goal is display and not met show a red circle 🔴
  // otherwise show an empty circle Ⓞ

//   const stepGoalMet = userInfo(today)?.numSteps >= user.dailyStepGoal ? "🟢" : "🔴";
//   console.log('stepGoalMet', stepGoalMet)
//   const showStepGoalIcon = daysAbbreviated.map((day, i) => (
//     <div className={`Step-icon ${day}`}>{stepGoalMet[i] || "Ⓞ"}</div>
//   ));

// emojis are not being displayed, tried the html codes
// didnt' work 
// &#9989; ✅
// source: https://www.w3schools.com/charsets/tryit.asp?deci=9989
// &#128308; 🔴
// source: https://www.w3schools.com/charsets/tryit.asp?deci=128308

  return (
    <div className="activity-widget-container">
      <h2 className="activity-title">Activity</h2>
      <p> Time Active </p>
      <p> {`${hours} hours ${minutes} minutes`} </p>
      <p>Steps Today: {totalUserStepsToday}</p>
      {userStepGoalMet} <br />
      {findDailyMiles(today)}
      <DatePicker onChange={(e) => handleChange(e)} />
      <p>{selectedDate}</p>

      <section className="step-week-grid">
        {days}
        {dayStats}
        {/* {showStepGoalIcon} */}
      
      </section>
    </div>
  );
};

export default Activity;
