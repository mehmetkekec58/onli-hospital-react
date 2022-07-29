import React, { useState } from 'react'
import "./Input.css"
import SearchIcon from '@mui/icons-material/Search';
import { containTexts } from '../../contains/containTexts';
import { useNavigate } from 'react-router-dom';

const containSearchUrl: string = "search?q=";
const enter: string = "Enter";

const Input = () => {
    const searchList: string[] = ["kanser nedir", "yaz mevsimi hastalıkları", "Grip nasıl geçer", "renk körü", "yorgunluk"];

    let navigate = useNavigate();

    const [inputText, setInputText] = useState<string | null>(null)

    const handleKeyDown = (event: React.KeyboardEvent<HTMLElement>) => {
        if (event.key === enter) {
            goSearchPage()
        }
    }
    const handleSearchButton = () => {
        goSearchPage()
    }

    function goSearchPage() {
        if (!inputTextNullOrEmpty()) {
            navigate(`${containSearchUrl}${inputText}`)
        }
    }

    function inputTextNullOrEmpty(): boolean {
        return inputText === "" || inputText === null;
    }
    return (
        <div className='search-input-form'>
            <input onChange={(e) => setInputText(e.target.value)} className="search-input" placeholder={containTexts.search} type="text" onKeyDown={handleKeyDown} />
            <ul className='search-input-recommended'>
                {searchList.map(word => (
                    <li className='search-input-recommended-item'>{word}</li>
                ))}
            </ul>
            <button disabled={inputTextNullOrEmpty() ? true : false} onClick={handleSearchButton} className='search-button' ><SearchIcon className='search-icon' /></button>
        </div>
    )
}
export default Input