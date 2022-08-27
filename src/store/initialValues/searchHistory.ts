import { getHistorySearch } from "../../services/searchHistoryService";

let getSearchHistory =  getHistorySearch()

export const searchHistoryItems:string[] = getSearchHistory;