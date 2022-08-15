import { SearchHistoryActionType } from "../action-type/searchHistoryActionType";
import { searchHistoryItems } from "../initialValues/searchHistory";
import { SearchHistoryActionModel } from "../action-model/searchHistoryModels";

const initialState = {
    searchHistoryItems: searchHistoryItems
}

 const searchHistoryReducer = (state = initialState, action: SearchHistoryActionModel) => {
    switch (action.type) {
        case SearchHistoryActionType.ADD_SEARCH_HISTORY:
            return {
                ...state, searchHistoryItems: action.payload
            }
        default:
            return state;
    }

}
export default searchHistoryReducer;