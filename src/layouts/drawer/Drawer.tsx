import React from 'react'
import "./Drawer.css";
import PersonIcon from '@mui/icons-material/PersonOutline';
import HomeIcon from '@mui/icons-material/HomeOutlined';
import PaymentsIcon from '@mui/icons-material/PaymentsOutlined';
import HistoryIcon from '@mui/icons-material/HistoryOutlined';
import BookIcon from '@mui/icons-material/BookOutlined';
import SettingsIcon from '@mui/icons-material/SettingsOutlined';
import LogoutIcon from '@mui/icons-material/LogoutOutlined';
import HowToRegOutlinedIcon from '@mui/icons-material/HowToRegOutlined';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { Link } from 'react-router-dom';

interface Props{
    openDrawer : boolean;
   }
const Drawer: React.FC<Props> = ({openDrawer}:Props) => {
    const activeMenus:boolean[]= [true,false,false,true,true,true,true,true,true,true,true] 
   // const activeMenus:boolean[]= [true,true,true,false,false,false,false,false,false,false,true] // when no login
    const menuLinks:string[] = ['/','login','register','editprofile','purse','buycredit','history','readinglist','settings','logout','about']
    const menuIcons = [<HomeIcon/>,<LoginOutlinedIcon/>,<HowToRegOutlinedIcon/>,<PersonIcon/>,<AccountBalanceWalletOutlinedIcon/>,<CreditCardOutlinedIcon/>,<HistoryIcon/>,<BookIcon/>,<SettingsIcon/>,<LogoutIcon/>,<InfoOutlinedIcon/>]
    const menus: string[] = ['Ana Sayfa','Giriş Yap','Kayıt Ol', 'Profili Düzenle', 'Cüzdan','Para Yükle' ,'Geçmiş', 'Okuma Listesi', 'Ayarlar', 'Çıkış Yap','Hakkında']

    return (
        <div className='drawer-general-div'>
            {menus.map((menu,index)=>(
                activeMenus[index] &&
                <Link title={menu} key={index} style={{textDecoration:'none', color:'black'}} to={menuLinks[index]}>
                <div className={!openDrawer? 'drawer-item-container-when-close-drawer' : 'drawer-item-container'}>
                    <div className={!openDrawer?   'drawer-menu-icon-when-close-drawer' : 'drawer-menu-icon'}>{menuIcons[index]}</div>
                    <div style={{...(!openDrawer && {display:'none'})}} className='drawer-menu-text'>{menu}</div>
                </div>
                </Link>
                
            ))}
            </div>
    )
}

export default Drawer