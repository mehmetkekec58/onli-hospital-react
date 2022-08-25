import { combineReducers } from "@reduxjs/toolkit";
import activeMenuReducer from "./reducers/activeMenuReducer";
import loginReducer from "./reducers/loginReducer";
import openDrawerReducer from "./reducers/openDrawerReducer";
import searchHistoryReducer from "./reducers/searchHistoryReducer";

const rootReducer = combineReducers({
    searchHistory:searchHistoryReducer,
    openDrawer:openDrawerReducer,
    activeMenu:activeMenuReducer,
    login:loginReducer,
    
})
export default rootReducer;

export type rootStateType = ReturnType<typeof rootReducer>