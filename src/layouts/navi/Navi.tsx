import React from 'react'
import "./Navi.css";

const Navi = () => {
  const brandName:string = "Onli Hospital";
  return (
    <div className='navi-component'>
      <div className='navi-items-general-div'>
      <div className='brand-name-for-navi'>{brandName}</div>
      </div>
 
    </div>
  )
}

export default Navi