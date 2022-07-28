import React from 'react'
import "./Input.css"
import SearchIcon from '@mui/icons-material/Search';

const Input = () => {
  return (
<form className='search-input-form'>
    <input className="search-input" type="text" />
    <button className='search-button' type='submit'><SearchIcon  className='search-icon'/></button>
</form>
  )
}

export default Input