import React, { useEffect, useRef, useState } from 'react'
import "./Input.css"
import SearchIcon from '@mui/icons-material/Search';
import { containTexts } from '../../contains/containTexts';
import { useNavigate } from 'react-router-dom';
import HistoryOutlinedIcon from '@mui/icons-material/HistoryOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { useSelector } from 'react-redux';
import State from "../../store/state";
import searchHistoryEdit from '../../store/actions/searchHistoryActionCreater';
import { containUrls } from '../../contains/containUrls';
import { getHistorySearch, setSearcHistoryToLocalStorage } from '../../services/searchHistoryService';
import { arrayUnique } from '../../helpers/arrayUnique';

const CONTAIN_SEARCH_URL: string = `${containUrls.SEARCH}?q=`;
const ENTER: string = "Enter";
const SEARCH_LIST_ITEMS_MAX_LENGHT: number = 7;
const INPUT_FOCUS_CHANGE_VALUE_DELAY: number = 300;
const SEARCH_LIST_TEST_ITEMS: string[] = ["kanser nedir", "kaç saat spor yapmalıyım?", "Karabiber astıma niçin kötü gelir?", "yaz mevsimi hastalıkları", "Yoğurt gribe iyi gelir mi?", "Grip nasıl geçer", "renk körü", "yorgunluk", "Kışın nasıl giysiler giyilmeli", "Boyun ağrısı egzersizleri", "Baş ağrısı"];


const Input = () => {

    let navigate = useNavigate();

    const dispatch = useDispatch();
    const { addSearchHistoryState } = bindActionCreators(searchHistoryEdit, dispatch)
    const searchHistoryValues = useSelector((state: State) => state.searchHistory.searchHistoryItems)

    const [searchList, setSearchList] = useState<string[]>([])
    const [searchHistory, setSearchHistory] = [searchHistoryValues, addSearchHistoryState]
    const inputRef = useRef<HTMLInputElement>(null);
    const [inputText, setInputText] = useState<string>("")
    const [inputOnFocus, setInputOnFocus] = useState<boolean>(false);
    const [searchListItems, setsearchListItems] = useState<string[]>([])

    useEffect(() => {
        if (inputText !== "") {
            setsearchListItems(searchFilter())
        } else {
            setsearchListItems(searchHistory.slice(0, SEARCH_LIST_ITEMS_MAX_LENGHT).reverse());
        }
    }, [inputText])

    useEffect(() => {
        let getSearchHistory = getHistorySearch()
        console.log(getSearchHistory)
        setSearchList(SEARCH_LIST_TEST_ITEMS)
        if (getSearchHistory.length !== 0) {
            setSearchHistory(getSearchHistory)
            setsearchListItems(getSearchHistory.slice(0, SEARCH_LIST_ITEMS_MAX_LENGHT).reverse())
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
            setTimeout(inputFocusChangeValue, INPUT_FOCUS_CHANGE_VALUE_DELAY)
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
        navigate(`${CONTAIN_SEARCH_URL}${letters}`)
    }

    function addSearchHistory(letters: string) {
        if (!searchHistoryIncludeLetters(letters)) {
            setSearchHistory([...searchHistory, letters])
            setSearcHistoryToLocalStorage([...searchHistory, letters])
        }
    }

    function inputFocusChangeValue() {
        setInputOnFocus(!inputOnFocus)
    }

    function inputTextNullOrEmpty(): boolean {
        return inputText === "" || inputText === null;
    }

    function searchFilter(): string[] {
        let lowerCaseInputText: string = inputText.toLocaleLowerCase();
        let list: string[] = (searchHistory.filter((item) => (item.toLocaleLowerCase().startsWith(lowerCaseInputText) && item))).concat(searchList.filter((item) => (item.toLocaleLowerCase().startsWith(lowerCaseInputText) && item)))
        return arrayUnique(list).slice(0, SEARCH_LIST_ITEMS_MAX_LENGHT)
    }

    function searchHistoryIncludeLetters(letters: string): boolean {
        return searchHistory.includes(letters);
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

    function searchItemCount(): number {
        return searchListItems.length;
    }


    return (
        <div className='search-input-form'>

            <input ref={inputRef} onBlur={handleActiveOrPassiveSearchItems} onFocus={handleActiveOrPassiveSearchItems} value={inputText} onChange={(e) => setInputText(e.target.value)} className="search-input" placeholder={containTexts.SEARCH} type="text" onKeyDown={handleKeyDown} />
            {inputOnFocus && searchItemCount() !== 0 &&
                (<ul style={{ height: searchInputRecommededHeight() }} className='search-input-recommended'>
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