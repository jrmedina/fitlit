import { Avatar, Badge } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import Diversity3OutlinedIcon from "@mui/icons-material/Diversity3Outlined";
import StepGoals from "./_stepGoals";
import Hydration from "./_hydration";
import WaterDroplet from "@/_waterDroplet";

const UserDashboard = () => {
  const user = useSelector((state) => state.user);

  const findUserFirstName = user.name?.split(" ")[0];

  return (
    <div className="dashboard-container">
      <div className= "welcome-wrapper">
      <h1>Welcome, {findUserFirstName}</h1>
      </div>
      {/* <Avatar
        alt="Josh"
        src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=2000"
      />
      <br />
      <Badge badgeContent={user.friends?.length} color="primary">
        <Diversity3OutlinedIcon />
      </Badge> */}
      <div className="widget-container">
      <StepGoals />
      <Hydration />
      {/* <WaterDroplet/> */}
      </div>
      </div>
    
  );
};

export default UserDashboard;
