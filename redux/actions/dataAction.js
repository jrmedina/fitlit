import { ActionTypes } from "../constants/action-types";

export const setSleep = (sleep) => {
  return {
    type: ActionTypes.SET_SLEEP,
    payload: sleep,
  };
};

export const setActivity = (activity) => {
  return {
    type: ActionTypes.SET_ACTIVITY,
    payload: activity,
  };
};

export const setHydration = (hydration) => {
  return {
    type: ActionTypes.SET_HYDRATION,
    payload: hydration,
  };
};
