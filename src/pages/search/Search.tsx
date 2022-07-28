import React from 'react'
import { useSearchParams } from 'react-router-dom';

const Search = () => {

  const [searchParams, getSearchParams] = useSearchParams();
  
  return (
    <div>Search 
      <div>{searchParams.get("q")}</div>
      
    </div>
  )
}

export default Search