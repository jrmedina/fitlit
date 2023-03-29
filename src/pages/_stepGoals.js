import React from "react";
import { useSelector } from "react-redux";

const StepGoals = () => {
  const user = useSelector((state) => state.user);
  const users = useSelector((state) => state.users);

  const findAvgSteps = () => {
    const totalStepGoal = users.reduce((acc, user) => {
      acc = acc += user.dailyStepGoal;

      return acc;
    }, 0);
    return totalStepGoal / users.length;
  };
  return (
    <div>
      <h2>Step Goals:</h2>
      <span>
        {user.name}'s avg step goal: {user.dailyStepGoal}
      </span>
      <br />
      <span>Avg of all user's step goal: {findAvgSteps()}</span>
    </div>
  );
};

export default StepGoals;
