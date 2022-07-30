import React, { useEffect, useState } from 'react'
import "./Input.css"
import SearchIcon from '@mui/icons-material/Search';
import { containTexts } from '../../contains/containTexts';
import { Link, useNavigate } from 'react-router-dom';

const containSearchUrl: string = "search?q=";
const enter: string = "Enter";

const Input = () => {
    const searchList: string[] = ["kanser nedir", "yaz mevsimi hastalıkları", "Grip nasıl geçer", "renk körü", "yorgunluk"];

    let navigate = useNavigate();

    const [inputText, setInputText] = useState<string>("")
    const [inputOnFocus, setInputOnFocus] = useState<boolean>(false);
    const [searchListItems, setsearchListItems] = useState<string[]>(searchList)

    useEffect(() => {
        if (inputText !== "") {
            let array: string[] = []
            searchList.map(item => {
                if (item.toLocaleLowerCase().includes(inputText.toLocaleLowerCase())) {
                    array[array.length] = item
                }
            })
            setsearchListItems(array)

        } else {
            setsearchListItems(searchList);
        }
    }, [inputText])

    const handleKeyDown = (event: React.KeyboardEvent<HTMLElement>) => {
        if (event.key === enter) {
            goSearchPage()
        }
    }
    const handleSearchButton = () => {
        goSearchPage()
    }
    const handleActiveSearchItems = () => {
        setTimeout(inputFocusChange, 100)

    }

    const handleActiveSearchItemsClick = (letters: string) => {
        setInputText(letters)
        inputFocusChange()
    }
    function goSearchPage() {
        if (!inputTextNullOrEmpty()) {
            navigate(`${containSearchUrl}${inputText}`)
        }
    }
    function inputFocusChange() {
        setInputOnFocus(!inputOnFocus)
    }

    function inputTextNullOrEmpty(): boolean {
        return inputText === "" || inputText === null;
    }
    return (
        <div className='search-input-form'>
            <input onBlur={handleActiveSearchItems} onFocus={handleActiveSearchItems} value={inputText} onChange={(e) => setInputText(e.target.value)} className="search-input" placeholder={containTexts.search} type="text" onKeyDown={handleKeyDown} />
            <ul style={{ ...(!inputOnFocus && { display: 'none' }) }} className='search-input-recommended'>
                {searchListItems.map((word, index) => (
                    <Link style={{ textDecoration: 'none', color: 'black' }} onClick={(e) => handleActiveSearchItemsClick(word)} key={index} to={`search?q=${word}`}><li className='search-input-recommended-item'>{word}</li></Link>
                ))}
            </ul>
            <button disabled={inputTextNullOrEmpty() ? true : false} onClick={handleSearchButton} className='search-button' ><SearchIcon className='search-icon' /></button>
        </div>
    )
}
export default Input