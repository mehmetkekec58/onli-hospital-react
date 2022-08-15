import React from 'react'
import './Tag.css';

interface Props{
    tags:string[];
}

const Tag : React.FC<Props> = ({tags}:Props) => {
  return (
   
    <div className="tags-container">
    {tags.map((tagName, index)=> (
        <div key={index} className="tag-list">{tagName}</div>
    ))}

</div>

  )
}

export default Tag