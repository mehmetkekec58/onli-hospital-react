import React from 'react'
import "./Drawer.css";
import PersonIcon from '@mui/icons-material/PersonOutline';
import HomeIcon from '@mui/icons-material/HomeOutlined';
import HistoryIcon from '@mui/icons-material/HistoryOutlined';
import BookIcon from '@mui/icons-material/BookOutlined';
import SettingsIcon from '@mui/icons-material/SettingsOutlined';
import LogoutIcon from '@mui/icons-material/LogoutOutlined';
import HowToRegOutlinedIcon from '@mui/icons-material/HowToRegOutlined';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import PaymentsOutlinedIcon from '@mui/icons-material/PaymentsOutlined';
import { NavLink } from 'react-router-dom';
import { containTexts } from '../../contains/containTexts';

interface Props {
    openDrawer: boolean;
}
const Drawer: React.FC<Props> = ({ openDrawer }: Props) => {
    const activeMenus: boolean[] = [true, false, false, true, true, true, true, true, true, true, true]
    // const activeMenus: boolean[] = [true, true, true, false, false, false, false, false, false, false, true] // when no login
    const menuLinks: string[] = ['/', 'login', 'register', 'editprofile', 'payments', 'buycredit', 'history', 'readinglist', 'settings', 'logout', 'about']
    const menuIcons = [<HomeIcon />, <LoginOutlinedIcon />, <HowToRegOutlinedIcon />, <PersonIcon />, <PaymentsOutlinedIcon />, <CreditCardOutlinedIcon />, <HistoryIcon />, <BookIcon />, <SettingsIcon />, <LogoutIcon />, <InfoOutlinedIcon />]
    const menus: (string | undefined)[] = [containTexts.homePage, containTexts.login, containTexts.register, containTexts.editProfile, containTexts.payments, containTexts.loadMoney, containTexts.history, containTexts.readingList, containTexts.settings, containTexts.logout, containTexts.about]

    return (
        <div className='drawer-general-div'>
            {menus.map((menu, index) => (
                activeMenus[index] &&
                <NavLink  title={menu} key={index} style={({isActive}) => {return isActive ? {textDecoration: 'none', color: '#6b1e9c' } :{textDecoration: 'none', color: 'black' }}} to={menuLinks[index]}>
                    <div  className={!openDrawer ? 'drawer-item-container-when-close-drawer' : 'drawer-item-container'}>
                        <div className={!openDrawer ? 'drawer-menu-icon-when-close-drawer' : 'drawer-menu-icon'}>{menuIcons[index]}</div>
                        <div style={{ ...(!openDrawer && { display: 'none' }) }} className='drawer-menu-text'>{menu}</div>
                    </div>
                </NavLink>

            ))}
        </div>
    )
}

export default Drawer