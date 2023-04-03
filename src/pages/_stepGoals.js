import React from "react";
import { useSelector } from "react-redux";
import { findAvg } from "../../utils/helpers.utils";

const StepGoals = () => {
  const user = useSelector((state) => state.user);
  const users = useSelector((state) => state.users);
  const firstName = user.name?.split(" ")[0];

  return (
    <div className="step-card">
      <div className="step-header-wrapper">
        <h2>Steps!</h2>
      </div>
      <section className="lower-step-card-container">
        <div className="step-avg-goal-wrapper">
          <span>{firstName}'s avg step goal:</span>
        </div>
        <div className="step-avg-goal-wrapper">
          <span>{user.dailyStepGoal}</span>
        </div>
        <div className="step-avg-goal-wrapper">
          <span>Avg of all user's step goal:</span>
        </div>
        <div className="step-avg-goal-wrapper">
          <span>{findAvg(users, "dailyStepGoal").toString()}</span>
        </div>
      </section>
    </div>
  );
};

export default StepGoals;
