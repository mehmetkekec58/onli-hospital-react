import React, { useEffect, useRef, useState } from 'react'
import "./Input.css"
import SearchIcon from '@mui/icons-material/Search';
import { containTexts } from '../../contains/containTexts';
import { useNavigate } from 'react-router-dom';
import HistoryOutlinedIcon from '@mui/icons-material/HistoryOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { getLocalStorage, setLocalStorage, deleteLocalStorage } from '../../services/localStorageService';
import { containLocalStorageKey } from '../../contains/containLocalStorageKey';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { useSelector } from 'react-redux';
import State from "../../store/state";
import searchHistoryEdit from '../../store/actions/searchHistoryActionCreater';

const containSearchUrl: string = "search?q=";
const ENTER: string = "Enter";
const searchListItemsMaxLenght: number = 7;
const inputFocusChangeValueDelay = 300;
const searchHistoryLocalStorageKey = containLocalStorageKey.SEARCH_HISTORY;
const searchListTestItems: string[] = ["kanser nedir", "kaç saat spor yapmalıyım?", "Karabiber astıma niçin kötü gelir?", "yaz mevsimi hastalıkları", "Yoğurt gribe iyi gelir mi?", "Grip nasıl geçer", "renk körü", "yorgunluk", "Kışın nasıl giysiler giyilmeli", "Boyun ağrısı egzersizleri", "Baş ağrısı"];


const Input = () => {

    let navigate = useNavigate();

    const dispatch = useDispatch();
    const { addSearchHistoryState } = bindActionCreators(searchHistoryEdit, dispatch)
    const searchHistoryValues = useSelector((state: State) => state.searchHistory.searchHistoryItems)
    
    const [searchList, setSearchList] = useState<(string[])>([])
    const [searchHistory, setSearchHistory] = [searchHistoryValues, addSearchHistoryState]
    const inputRef = useRef<HTMLInputElement>(null);
    const [inputText, setInputText] = useState<string>("")
    const [inputOnFocus, setInputOnFocus] = useState<boolean>(false);
    const [searchListItems, setsearchListItems] = useState<string[]>([])

    useEffect(() => {
        if (inputText !== "") {
            setsearchListItems(searchFilter())
        } else {
            setsearchListItems(searchHistory.slice(0, searchListItemsMaxLenght).reverse());
        }
    }, [inputText])

    useEffect(() => {
        setSearchList(searchListTestItems);
        let getSearchHistory = getHistorySearch();
        if (getSearchHistory !== null) {
            setSearchHistory(getSearchHistory)
            setsearchListItems(getSearchHistory.slice(0, searchListItemsMaxLenght).reverse())
        }
    }, [])

    useEffect(() => {
        if (searchHistory.length === 0) {
            setsearchListItems([])
        }
    }, [searchHistory])


    const handleKeyDown = (event: React.KeyboardEvent<HTMLElement>) => {
        if (event.key === ENTER) {
            if (!inputTextNullOrEmpty()) {
                inputRef.current?.blur();
                directGoSearchPage(inputText)
            }
        }
    }
    const handleSearchButton = () => {
        goSearchPage(inputText)
    }
    const handleActiveOrPassiveSearchItems = () => {
        if (inputOnFocus === false) {
            setInputOnFocus(!inputOnFocus)
        } else {
            setTimeout(inputFocusChangeValue, inputFocusChangeValueDelay)
        }
    }

    const handleSearchItemsClick = (letters: string) => {
        setInputText(letters)
        inputFocusChangeValue()
        directGoSearchPage(letters)

    }

    function goSearchPage(letters: string) {
        if (!inputTextNullOrEmpty()) {
            directGoSearchPage(letters)
        }
    }

    function directGoSearchPage(letters: string) {
        addSearchHistory(letters)
        navigate(`${containSearchUrl}${letters}`)
    }

    function addSearchHistory(letters: string) {
        if (!searchHistoryIncludeLetters(letters)) {
            setSearchHistory([...searchHistory, letters])
            setSearcHistoryToLocalStorage([...searchHistory, letters])
        }
    }

    function getHistorySearch() {
        let getSearchHistory = getSearchHistoryOnLocalStorage()
        if (getSearchHistory !== null && !(Array.isArray(getSearchHistory) && getSearchHistory.every(typeofString))) {
            deleteSearcHistoryToLocalStorage();
            return null;
        } else {
            return getSearchHistory;
        }
    }

    function typeofString(item: any): boolean {
        return typeof item === "string";
    }

    function inputFocusChangeValue() {
        setInputOnFocus(!inputOnFocus)
    }

    function inputTextNullOrEmpty(): boolean {
        return inputText === "" || inputText === null;
    }

    function getSearchHistoryOnLocalStorage() {
        return getLocalStorage(searchHistoryLocalStorageKey);
    }
    function deleteSearcHistoryToLocalStorage() {
        deleteLocalStorage(searchHistoryLocalStorageKey)
    }

    function setSearcHistoryToLocalStorage(items: string[]) {
        setLocalStorage(searchHistoryLocalStorageKey, items)
    }

    function searchFilter(): string[] {
        let lowerCaseInputText: string = inputText.toLocaleLowerCase();
        let list: string[] = (searchHistory.filter((item) => (item.toLocaleLowerCase().startsWith(lowerCaseInputText) && item))).concat(searchList.filter((item) => (item.toLocaleLowerCase().startsWith(lowerCaseInputText) && item)))
        return arrayUnique(list).slice(0, searchListItemsMaxLenght)
    }

    function searchHistoryIncludeLetters(letters: string): boolean {
        return searchHistory.includes(letters);
    }

    function arrayUnique(array: string[]): string[] {
        return array.filter((c, index) => { return array.indexOf(c) === index; });
    }

    function searchInputRecommededHeight(): string {
        let searchListItemsLength = searchListItems.length;
        if (searchListItemsLength > 0) {
            return `${40 * searchListItemsLength}px`
        } else {
            return '0px';
        }
    }

    function searchAndSearhHistoryIcon(word: string): JSX.Element {
        return (
            !searchHistoryIncludeLetters(word) ? <SearchOutlinedIcon style={{ marginRight: '5px' }} /> : <HistoryOutlinedIcon style={{ marginRight: '5px' }} />
        )
    }

    return (
        <div className='search-input-form'>

            <input ref={inputRef} onBlur={handleActiveOrPassiveSearchItems} onFocus={handleActiveOrPassiveSearchItems} value={inputText} onChange={(e) => setInputText(e.target.value)} className="search-input" placeholder={containTexts.SEARCH} type="text" onKeyDown={handleKeyDown} />
            {searchListItems.length !== 0 &&
                (<ul style={{ ...(!inputOnFocus && { display: 'none' }), height: searchInputRecommededHeight() }} className='search-input-recommended'>
                    {searchListItems.map((word, index) => (
                        <li key={index} onClick={(e) => handleSearchItemsClick(word)} className='search-input-recommended-item'>{searchAndSearhHistoryIcon(word)}{word}</li>
                    ))}
                </ul>)
            }

            <button disabled={inputTextNullOrEmpty() ? true : false} onClick={handleSearchButton} className='search-button' ><SearchIcon className='search-icon' /></button>
        </div>
    )
}
export default Input