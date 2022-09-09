import React, { useEffect, useRef, useState } from 'react'
import "./Input.css"
import SearchIcon from '@mui/icons-material/Search';
import { constantsText } from '../../constants/constantsText';
import { useNavigate } from 'react-router-dom';
import HistoryOutlinedIcon from '@mui/icons-material/HistoryOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { useSelector } from 'react-redux';
import State from "../../store/state";
import searchHistoryEdit from '../../store/actions/searchHistoryActionCreater';
import { constantsUrl } from '../../constants/constantsUrl';
import { getHistorySearch, setSearcHistoryToLocalStorage } from '../../services/searchHistoryService';
import { arrayUnique } from '../../helpers/arrayUnique';

const CONTAIN_SEARCH_URL: string = `${constantsUrl.SEARCH}?q=`;
const ENTER: string = "Enter";
const ARROW_UP:string = "ArrowUp";
const ARROW_DOWN:string = "ArrowDown";
const ARROW_RIGHT:string = "ArrowRight";
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
    const [selectedItem, setSelectedItem] = useState<number>(0);
    const inputRef = useRef<HTMLInputElement>(null);
    const [inputText, setInputText] = useState<string>("")
    const [inputOnFocus, setInputOnFocus] = useState<boolean>(false);
    const [searchListItems, setsearchListItems] = useState<string[]>([])

    useEffect(() => {
        if (selectedItem !== 0) {
            setSelectedItem(0)
        }
        if (inputText !== "") {
            setsearchListItems(searchFilter())
        } else {
            setsearchListItems(searchHistory.slice(0, SEARCH_LIST_ITEMS_MAX_LENGHT).reverse());
        }
    }, [inputText])

    useEffect(() => {
        let getSearchHistory = getHistorySearch()
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

        switch (event.key) {
            case ENTER:
                if(selectedItem>0){
                directGoSearchPage(searchListItems[selectedItem-1])
                setInputText(searchListItems[selectedItem-1])
                }else{
                if (!inputTextNullOrEmpty()) {
                    directGoSearchPage(inputText)
                }}
                inputRef.current?.blur();
                break;

            case ARROW_UP:
                if (searchListItems.length > 0 && selectedItem > 0){
                    setSelectedItem(selectedItem - 1) 
                }
                break;

            case ARROW_DOWN:
                if (searchListItems.length > 0 && selectedItem < searchListItems.length){
                    setSelectedItem(selectedItem + 1)
                }
                break;

                case ARROW_RIGHT:
                    if (searchListItems.length > 0 && selectedItem > 0){
                        setInputText(searchListItems[selectedItem-1])
                    }
                    break;
                    
            default:
                break;
        }
    }
    const handleSearchButton = () => {
        goSearchPage(inputText)
    }
    const handleActiveOrPassiveSearchItems = () => {
        if(selectedItem !==0){
            setSelectedItem(0)
        }
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

    function searchAndSearhHistoryIcon(word: string): JSX.Element {
        return (
            !searchHistoryIncludeLetters(word) ? <SearchOutlinedIcon style={{ marginRight: '5px' }} /> : <HistoryOutlinedIcon style={{ marginRight: '5px' }} />
        )
    }

    function searchItemCount(): number {
        return searchListItems.length;
    }
    function inputRecommendedBackround(index: number) {
        if (selectedItem !== 0 && index + 1 === selectedItem) {
            return "search-input-recommended-item input-item-gray"
        } else {
            return "search-input-recommended-item"
        }
    }


    return (
        <div className='search-input-form'>
            <input ref={inputRef} onBlur={handleActiveOrPassiveSearchItems} onFocus={handleActiveOrPassiveSearchItems} value={inputText} onChange={(e) => setInputText(e.target.value)} className="search-input" placeholder={constantsText.SEARCH} type="text" onKeyDown={handleKeyDown} />
            {inputOnFocus && searchItemCount() !== 0 &&
                (<div className='search-input-recommended'>
                    {searchListItems.map((word, index) => (
                        <div key={index} onClick={(e) => handleSearchItemsClick(word)} className={inputRecommendedBackround(index)}>{searchAndSearhHistoryIcon(word)}{word}</div>
                    ))}
                </div>)
            }
            <button disabled={inputTextNullOrEmpty() ? true : false} onClick={handleSearchButton} className='search-button' ><SearchIcon className='search-icon' /></button>
        </div>
    )
}
export default Input