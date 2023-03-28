import { combineReducers } from "@reduxjs/toolkit";
import { activityReducer, sleepReducer, hydrationReducer } from "./dataReducer";
import { usersReducer, userReducer } from "./userReducer";



const reducers = combineReducers({
    users: usersReducer,
    user: userReducer,
    activity: activityReducer,
    sleep: sleepReducer,
    hydration: hydrationReducer
})

export default reducers;
