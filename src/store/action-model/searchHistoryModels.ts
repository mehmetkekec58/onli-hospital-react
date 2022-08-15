import { SearchHistoryActionType } from "../action-type/searchHistoryActionType"

interface AddSearchHistory {
    type: SearchHistoryActionType.ADD_SEARCH_HISTORY;
    payload: string[];
}

export type SearchHistoryActionModel = AddSearchHistory  