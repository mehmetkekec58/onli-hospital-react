import { combineReducers } from "@reduxjs/toolkit";
import openDrawerReducer from "./reducers/openDrawerReducer";
import searchHistoryReducer from "./reducers/searchHistoryReducer";

const rootReducer = combineReducers({
    searchHistory:searchHistoryReducer,
    openDrawer:openDrawerReducer,
    
})
export default rootReducer;

export type rootStateType = ReturnType<typeof rootReducer>