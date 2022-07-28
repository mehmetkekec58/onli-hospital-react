import React from 'react'
import "./Input.css"
import SearchIcon from '@mui/icons-material/Search';
import { containTexts } from '../../contains/containTexts';
const Input = () => {
  return (
<form className='search-input-form'>
    <input className="search-input" placeholder={containTexts.search} type="text" />
    <button className='search-button' type='submit'><SearchIcon  className='search-icon'/></button>
</form>
  )
}

export default Input