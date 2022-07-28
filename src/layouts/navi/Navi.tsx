import React from 'react'
import "./Navi.css";
import MenuIcon from '@mui/icons-material/Menu';
import { containTexts } from '../../contains/containTexts';
import Input from '../input/Input';
import Avatar from '@mui/material/Avatar/Avatar';
import { Link } from 'react-router-dom';

interface Props {
  openDrawer: boolean;
  setOpenDrawer: React.Dispatch<React.SetStateAction<boolean>>
}

const Navi: React.FC<Props> = ({ openDrawer, setOpenDrawer }: Props) => {
  const profilePhotoUrl = "https://pbs.twimg.com/profile_images/1523976377074163713/hRUFPi6z_400x400.jpg"

  const handleOpenOrCloseDrawer = () => {
    setOpenDrawer(!openDrawer)
  }
  return (
    <div className='navi-component'>
      <div className='navi-items-general-div'>
        <div onClick={handleOpenOrCloseDrawer} className='navi-icon-for-drawer-open'><MenuIcon sx={{ color: 'white' }} /></div>
        <div className='brand-name-for-navi'>  <Link style={{ textDecoration: 'none', color: 'white' }} to="/">{containTexts.brandName}</Link></div>
        <div className='navi-input'><Input /></div>
        <div className='navi-avatar'><Avatar   alt='Mehmet' src={profilePhotoUrl} sx={{ backgroundColor: '#ffd740', border: '2px #ffd740 solid', color: '#ffd740', width: 50, height: 50 }}>M</Avatar></div>
       
      </div>

    </div>
  )
}

export default Navi