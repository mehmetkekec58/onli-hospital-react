import React from 'react'
import "./Drawer.css";
import PersonIcon from '@mui/icons-material/PersonOutline';
import HomeIcon from '@mui/icons-material/HomeOutlined';
import PaymentsIcon from '@mui/icons-material/PaymentsOutlined';
import HistoryIcon from '@mui/icons-material/HistoryOutlined';
import BookIcon from '@mui/icons-material/BookOutlined';
import SettingsIcon from '@mui/icons-material/SettingsOutlined';
import LogoutIcon from '@mui/icons-material/LogoutOutlined';
import { Link } from 'react-router-dom';

interface Props{
    openDrawer : boolean;
   }
const Drawer: React.FC<Props> = ({openDrawer}:Props) => {
    const menuLinks:string[] = ['/']
    const menuIcons = [<HomeIcon/>,<PersonIcon/>,<PaymentsIcon/>,<HistoryIcon/>,<BookIcon/>,<SettingsIcon/>,<LogoutIcon/>]
    const menus: string[] = ['Ana Sayfa', 'Profili Düzenle', 'Cüzdan', 'Geçmiş', 'Okuma Listesi', 'Ayarlar', 'Çıkış Yap']
    return (
        <div className='drawer-general-div'>
            {menus.map((menu,index)=>(
                <Link key={index} style={{textDecoration:'none', color:'black'}} to={menuLinks[0]}>
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