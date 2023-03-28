import { ActionTypes } from "../constants/action-types";

export const setUser = (user) => {
  return {
    type: ActionTypes.SET_USER,
    payload: user,
  };
};

export const setUsers = (users) => {
  return {
    type: ActionTypes.SET_USERS,
    payload: users,
  };
};
