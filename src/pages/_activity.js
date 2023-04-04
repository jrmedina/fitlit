import React, { useState } from "react";
import { useSelector } from "react-redux";
import * as dayjs from "dayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const Activity = () => {
  const [findMilesWalked, setMilesWalked] = useState("");
 
  const user = useSelector((state) => state.user);
  console.log({ user });
  const userActivityData = useSelector((state) => state.activity);
  console.log({ userActivityData });
  const today = dayjs().format("YYYY/MM/DD");

  // console.log("userActivityData" , userActivityData.userID)
  console.log(".strideLength", user.strideLength);

  const userInfo = (date) =>
    userActivityData.find((steps) => {
      return steps.date === date && steps.userID === user.id;
    });

  const findDailyMiles = () => {
    let feetInAMile = 5280;

    const totalUserStepsToday = userInfo(today)?.numSteps;
    const totalMilesWalked = (
      (totalUserStepsToday * user.strideLength) /
      feetInAMile
    ).toFixed(2);
    return `You have walked ${totalMilesWalked} miles, today! `;
  };

  //   console.log("findDailyMiles(today)", findDailyMiles(today));

  const [hours, minutes] = (userInfo(today)?.minutesActive / 60).toFixed(2).split(".")
//   const hours = timeActiveByDay[0]
//   const minutes = timeActiveByDay[1]

//   console.log({hours})
//   console.log({minutes})



// console.log({timeActiveByDay})



  const userStepGoalMet =
    userInfo(today)?.numSteps >= user.dailyStepGoal
      ? "Congratulations, you have met your step goal!"
      : "Sorry, you did not meet your step goal today"

  console.log(12345, userStepGoalMet);
  // steep goal
  // steps today
  // return string "sorry you did not meet your step goal today"
  // "Congratulations, you met your step goal"
  // return a true or false value

  return (
    <div className="activity-widget-container">
      <h2 className="activity-title">Activity</h2>
      <p> Time Active </p> <br/>
      <p> {`${hours} hours ${minutes} minutes`} </p>
      {findDailyMiles(today)} <br/>
      {userStepGoalMet}
    </div>
  );
};

export default Activity;
