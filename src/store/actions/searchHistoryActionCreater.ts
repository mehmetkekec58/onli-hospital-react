import { SearchHistoryActionModel } from '../action-model/searchHistoryModels';
import { SearchHistoryActionType } from "../action-type/searchHistoryActionType"
import { Dispatch } from "redux"

 const addSearchHistoryState = (text: string[]) => {
    return (dispatch: Dispatch<SearchHistoryActionModel>) => {
        dispatch({
            type: SearchHistoryActionType.ADD_SEARCH_HISTORY,
            payload: text,
        })
    }
}

const searchHistoryEdit ={
    addSearchHistoryState
}

export default searchHistoryEdit 