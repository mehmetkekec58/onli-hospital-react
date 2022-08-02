import React, { useEffect, useRef, useState } from 'react'
import "./Input.css"
import SearchIcon from '@mui/icons-material/Search';
import { containTexts } from '../../contains/containTexts';
import { Link, useNavigate } from 'react-router-dom';
import HistoryOutlinedIcon from '@mui/icons-material/HistoryOutlined';

const containSearchUrl: string = "search?q=";
const enter: string = "Enter";

const Input = () => {


    let navigate = useNavigate();
    const [searchList] = useState<string[]>(["kanser nedir", "yaz mevsimi hastalıkları", "Grip nasıl geçer", "renk körü", "yorgunluk"])
    const inputRef = useRef<HTMLInputElement>(null);
    const [inputText, setInputText] = useState<string>("")
    const [inputOnFocus, setInputOnFocus] = useState<boolean>(false);
    const [searchListItems, setsearchListItems] = useState<(string)[]>(searchList)

    useEffect(() => {
        if (inputText !== "") {
            setsearchListItems(searchList.filter((item) => (item.toLocaleLowerCase().includes(inputText.toLocaleLowerCase())) && item))
        } else {
            setsearchListItems(searchList);
        }
    }, [inputText])

    const handleKeyDown = (event: React.KeyboardEvent<HTMLElement>) => {
        if (event.key === enter) {
            inputRef.current?.blur();
            goSearchPage()
        }
    }
    const handleSearchButton = () => {
        goSearchPage()
    }
    const handleActiveOrPassiveSearchItems = () => {
        setTimeout(inputFocusChangeValue, 100)

    }

    const handleSearchItemsClick = (letters: string) => {
        setInputText(letters)
        inputFocusChangeValue()
    }
    function goSearchPage() {
        if (!inputTextNullOrEmpty()) {
            navigate(`${containSearchUrl}${inputText}`)
        }
    }
    function inputFocusChangeValue() {
        setInputOnFocus(!inputOnFocus)
    }

    function inputTextNullOrEmpty(): boolean {
        return inputText === "" || inputText === null;
    }
    return (
        <div className='search-input-form'>
            <input ref={inputRef} onBlur={handleActiveOrPassiveSearchItems} onFocus={handleActiveOrPassiveSearchItems} value={inputText} onChange={(e) => setInputText(e.target.value)} className="search-input" placeholder={containTexts.search} type="text" onKeyDown={handleKeyDown} />
            {searchListItems.length !== 0 &&
                (<ul style={{ ...(!inputOnFocus && { display: 'none' }) }} className='search-input-recommended'>
                    {searchListItems.map((word, index) => (
                        <Link style={{ textDecoration: 'none', color: 'black' }} onClick={(e) => handleSearchItemsClick(word)} key={index} to={`search?q=${word}`}><li className='search-input-recommended-item'><HistoryOutlinedIcon style={{ marginRight: '5px' }} />{word}</li></Link>
                    ))}
                </ul>)
            }
            <button disabled={inputTextNullOrEmpty() ? true : false} onClick={handleSearchButton} className='search-button' ><SearchIcon className='search-icon' /></button>
        </div>
    )
}
export default Input