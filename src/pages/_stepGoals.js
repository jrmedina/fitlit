import React from "react";
import { useSelector } from "react-redux";

const StepGoals = () => {
  const user = useSelector((state) => state.user);
  const users = useSelector((state) => state.users);


  const findUserFirstName = () => user.name?.split(" ")[0];

  const findAvgSteps = () => {
    const totalStepGoal = users.reduce((acc, user) => {
      acc = acc += user.dailyStepGoal;

      return acc;
    }, 0);
    return totalStepGoal / users.length;
  };
  return (
    <div>
      <div className="step-card">
        <div className="step-header-wrapper">
      <h2>Step Goals:</h2>
      </div>
      <section className="lower-step-card-container">
        <div className="step-avg-goal-wrapper">
      <span>
        {findUserFirstName()}'s avg step goal: {user.dailyStepGoal}
      </span>
      </div>
      <div className="step-avg-goal-wrapper">
      <span>Avg of all user's step goal: {findAvgSteps()}</span>
      </div>
      </section>
      </div>
    </div>
  );
};

export default StepGoals;
