import { Avatar, Badge } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import Diversity3OutlinedIcon from "@mui/icons-material/Diversity3Outlined";
import StepGoals from "./_stepGoals";

const UserDashboard = () => {
  const user = useSelector((state) => state.user);

  const findUserFirstName = () => user.name?.split(" ")[0];

  return (
    <div>
      <h1>Welcome, {findUserFirstName()}</h1>
      {/* <Avatar
        alt="Josh"
        src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=2000"
      />
      <br />
      <Badge badgeContent={user.friends?.length} color="primary">
        <Diversity3OutlinedIcon />
      </Badge> */}

      <StepGoals />
    </div>
  );
};

export default UserDashboard;