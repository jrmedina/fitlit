import { ActionTypes } from "../constants/action-types";

export const hydrationReducer = (state = [], { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_HYDRATION:
      return [...state, ...payload];
    default:
      return state;
  }
};

export const sleepReducer = (state = [], { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_SLEEP:
      return [...state, ...payload];
    default:
      return state;
  }
};
export const activityReducer = (state = [], { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_ACTIVITY:
      return [...state, ...payload];
    default:
      return state;
  }
};
