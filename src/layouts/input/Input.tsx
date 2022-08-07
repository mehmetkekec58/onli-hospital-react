import React, { useEffect, useRef, useState } from 'react'
import "./Input.css"
import SearchIcon from '@mui/icons-material/Search';
import { containTexts } from '../../contains/containTexts';
import { useNavigate } from 'react-router-dom';
import HistoryOutlinedIcon from '@mui/icons-material/HistoryOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

const containSearchUrl: string = "search?q=";
const enter: string = "Enter";

const Input = () => {

    let navigate = useNavigate();
    const [searchList] = useState<(string[])>(["kanser nedir", "yaz mevsimi hastalıkları", "Grip nasıl geçer", "renk körü", "yorgunluk", "Kışın nasıl giysiler giyilmeli", "Boyun ağrısı egzersizleri", "Baş ağrısı"])
    const [searchHistory, setSearchHistory] = useState<string[]>([])
    const inputRef = useRef<HTMLInputElement>(null);
    const [inputText, setInputText] = useState<string>("")
    const [inputOnFocus, setInputOnFocus] = useState<boolean>(false);
    const [searchListItems, setsearchListItems] = useState<(string)[]>(searchList)

    useEffect(() => {
        if (inputText !== "") {
            setsearchListItems(searchFilter())
        } else {
            setsearchListItems(searchHistory.slice(0, 7));
        }
    }, [inputText])

    const handleKeyDown = (event: React.KeyboardEvent<HTMLElement>) => {
        if (event.key === enter) {
            if(!inputTextNullOrEmpty()){
                inputRef.current?.blur();
                directGoSearchPage(inputText)
            }
         
        }

    }
    const handleSearchButton = () => {
        goSearchPage(inputText)
    }
    const handleActiveOrPassiveSearchItems = () => {
        setTimeout(inputFocusChangeValue, 100)

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
        }
    }
    function inputFocusChangeValue() {
        setInputOnFocus(!inputOnFocus)
    }

    function inputTextNullOrEmpty(): boolean {
        return inputText === "" || inputText === null;
    }
    function searchFilter(): string[] {
        let list = (searchHistory.filter((item) => (item.toLocaleLowerCase().includes(inputText.toLocaleLowerCase())) && item)).concat(searchList.filter((item) => (item.toLocaleLowerCase().includes(inputText.toLocaleLowerCase())) && item))
        return (list.filter((c, index) => { return list.indexOf(c) === index; })).slice(0, 7)
    }
    function searchHistoryIncludeLetters(letters: string): boolean {
        return searchHistory.includes(letters);
    }

    return (
        <div className='search-input-form'>
            <input ref={inputRef} onBlur={handleActiveOrPassiveSearchItems} onFocus={handleActiveOrPassiveSearchItems} value={inputText} onChange={(e) => setInputText(e.target.value)} className="search-input" placeholder={containTexts.search} type="text" onKeyDown={handleKeyDown} />
            {searchListItems.length !== 0 &&
                (<ul style={{ ...(!inputOnFocus && { display: 'none' }) }} className='search-input-recommended'>
                    {searchListItems.map((word, index) => (
                        <li key={index} onClick={(e) => handleSearchItemsClick(word)} className='search-input-recommended-item'>{!searchHistoryIncludeLetters(word) ? <SearchOutlinedIcon style={{ marginRight: '5px' }} /> : <HistoryOutlinedIcon style={{ marginRight: '5px' }} />}{word}</li>
                    ))}
                </ul>)
            }
            <button disabled={inputTextNullOrEmpty() ? true : false} onClick={handleSearchButton} className='search-button' ><SearchIcon className='search-icon' /></button>
        </div>
    )
}
export default Input