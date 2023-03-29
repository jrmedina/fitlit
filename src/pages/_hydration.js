import React from "react";
import { useSelector } from "react-redux";
import * as dayjs from "dayjs";

const Hydration = () => {
  const user = useSelector((state) => state.user);
  const hydrationData = useSelector((state) => state.hydration);

  const findTodaysIntake = () => {
    const userHydrationData = hydrationData.filter(
      (hydro) => hydro.userID === user.id
    );
    const today = dayjs().format("YYYY/MM/DD");
    const todaysIntake = userHydrationData.find(
      (hydro) => hydro.date === today
    );
    return todaysIntake?.numOunces;
  };

  return (
    <div>
      <span> Today's water intake: {findTodaysIntake()}oz</span>
    </div>
  );
};

export default Hydration;
