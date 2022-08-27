import { containLocalStorageKey } from "../contains/containLocalStorageKey";
import { typeofString } from "../helpers/typeofString";
import { deleteLocalStorage, getLocalStorage, setLocalStorage } from "./localStorageService";

const SEARCH_HISTORY_LOCAL_STORAGE_KEY: string = containLocalStorageKey.SEARCH_HISTORY;

export function setSearcHistoryToLocalStorage(items: string[]) {
    setLocalStorage(SEARCH_HISTORY_LOCAL_STORAGE_KEY, items)
}

export function deleteSearcHistoryToLocalStorage() {
    deleteLocalStorage(SEARCH_HISTORY_LOCAL_STORAGE_KEY)
}

export function getSearchHistoryOnLocalStorage() {
    return getLocalStorage(SEARCH_HISTORY_LOCAL_STORAGE_KEY);
}

export function getHistorySearch(): string[] {
    let getSearchHistory = getSearchHistoryOnLocalStorage()
    if (getSearchHistory !== null && (Array.isArray(getSearchHistory) && getSearchHistory.every(typeofString))) {
        return getSearchHistory;
    } else {
        deleteSearcHistoryToLocalStorage();
        return [];
    }
}
