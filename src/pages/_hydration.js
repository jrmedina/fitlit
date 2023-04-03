import React, { useState } from "react";
import { useSelector } from "react-redux";
import * as dayjs from "dayjs";
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const Hydration = () => {

const [findHydrationAmt, setFindHydrationAmt] = useState("")

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
  

const handleChange = (e) => {

  // console.log(e)
  const today = dayjs(e).format("YYYY/MM/DD");
console.log({today})
setFindHydrationAmt(findDayIntake(today))
}




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


          <div className="h2o amt m"> 
          {weeksIntake[0] || "-"}
          </div>
          <div className="h2o amt tu">
          {weeksIntake[1] || "-"}

          </div>
          <div className="h2o amt w">
          {weeksIntake[2]|| "-" }

          </div>
          <div className="h2o amt th">
          {weeksIntake[3] || "-"}

          </div>
          <div className="h2o amt f">
          {weeksIntake[4]|| "-" }

          </div>
          <div className="h2o amt sa">
          {weeksIntake[5]|| "-" }

          </div>
          <div className="h2o amt su">
          {weeksIntake[6]|| "-" } 

          </div>

        </div>
      </div>
      <div className="find-oz-wrapper">
        <DatePicker onChange={e => handleChange(e)}/>
        <div className="found-oz-wrapper">
          <p className="oz-drank"> 
          {findHydrationAmt}
          </p>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Hydration;
////......