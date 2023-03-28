import { ActionTypes } from "../constants/action-types";


export const userReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_USER:
      return { ...state, ...payload };
    default:
      return state;
  }
};


export const usersReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_USERS:
      return { ...state, ...payload };
    default:
      return state;
  }
};
