import React from 'react'
import "./Navi.css";
import MenuIcon from '@mui/icons-material/Menu';
import { containTexts } from '../../contains/containTexts';
import Input from '../input/Input';
import Avatar from '@mui/material/Avatar/Avatar';

const Navi = () => {

  return (
    <div className='navi-component'>
      <div className='navi-items-general-div'>
        <div className='navi-icon-for-drawer-open'><MenuIcon sx={{ color: 'white' }} /></div>
        <div className='brand-name-for-navi'>{containTexts.brandName}</div>
        <div className='navi-input'><Input /></div>
        <div className='navi-avatar'><Avatar alt='Mehmet' sx={{ backgroundColor: '#ffd740', color: 'black', width: 35, height: 35 }}>M</Avatar></div>
      </div>

    </div>
  )
}

export default Navi