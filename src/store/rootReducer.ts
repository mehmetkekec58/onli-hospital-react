import { combineReducers } from "@reduxjs/toolkit";
import searchHistoryReducer from "./reducers/searchHistoryReducer";

const rootReducer = combineReducers({
    searchHistory:searchHistoryReducer
})
export default rootReducer;

export type rootStateType = ReturnType<typeof rootReducer>