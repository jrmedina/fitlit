import React, { useState } from "react";
import { useSelector } from "react-redux";
import * as dayjs from "dayjs";
import { DatePicker } from '@mui/x-date-pickers/DatePicker';



const Activity = () => {
const [findMilesWalked, setMilesWalked] = useState("")

  const user = useSelector((state) => state.user);
  const userActivityData = useSelector((state) => state.activity);
  const today = dayjs().format("YYYY/MM/DD");

    console.log("userActivityData" , userActivityData.userID)
console.log(".strideLength", user.strideLength)

const findDailyMiles = (date) => {
let feetInAMile = 5280

    const userInfo = userActivityData.find((steps) => {
       console.log("steps.numSteps", steps.numSteps      )
        
    return  steps.date === date && steps.numSteps 
    
    });

    const userSteps = userActivityData
   console.log({userSteps})
    const userStrideLength = user.strideLength 
   
    const userTotalStepDistance = userStrideLength 
    console.log("userTotalStepDistance", userTotalStepDistance)


// console.log("userActivityData", userActivityData.userID)


}

console.log("findDailyMiles(today)", findDailyMiles(today))

  return (
    <div className="activity-widget-container">
        <h2 className="activity-title">Activity</h2>
            {findDailyMiles(today)}
        </div>
  )
}

export default Activity