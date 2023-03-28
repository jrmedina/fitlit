import { ActionTypes } from "../constants/action-types";

const initialState = {};

export const hydrationReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_HYDRATION:
      return { ...state, hydration: [...payload] };
    default:
      return initialState;
  }
};

export const sleepReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_SLEEP:
      return { ...state, sleep: [...payload] };
    default:
      return initialState;
  }
};
export const activityReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_ACTIVITY:
      return { ...state, activity: [...payload] };
    default:
      return initialState;
  }
};
