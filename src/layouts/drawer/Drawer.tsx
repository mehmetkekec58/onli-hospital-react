import React, { useEffect, useState } from 'react'
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
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import VideoCallOutlinedIcon from '@mui/icons-material/VideoCallOutlined';
import PlaylistPlayOutlinedIcon from '@mui/icons-material/PlaylistPlayOutlined';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import { NavLink } from 'react-router-dom';
import { containTexts } from '../../contains/containTexts';
import { useDispatch, useSelector } from 'react-redux';
import State from '../../store/state';
import { containUrls } from '../../contains/containUrls';
import useAuth from '../../hooks/useAuth';
import { bindActionCreators } from 'redux';
import activeMenuFunction from '../../store/actions/activeMenuActionCreator'
import { containActiveMenus } from '../../contains/containActiveMenus';
import QuestionAnswerOutlinedIcon from '@mui/icons-material/QuestionAnswerOutlined';
import PersonAddOutlinedIcon from '@mui/icons-material/PersonAddOutlined';
import { getRoles } from '@testing-library/react';
import { getToken } from '../../services/tokenService';
import { ADMIN, DOCTOR, USER } from '../../contains/containRoles';
import IsLogin from '../../utilities/isLogin/IsLogin';
import { getRolesService } from '../../services/rolesService';


let isLogin = IsLogin()

const Drawer: React.FC = () => {

    const openDrawer = useSelector((state: State) => state.openDrawer.openDrawer)
    const login = useSelector((state: State) => state.login.login)
    const dispatch = useDispatch();
    const { addActiveMenu } = bindActionCreators(activeMenuFunction, dispatch)
    const value = useSelector((state: State) => state.activeMenu.activeMenu)

    const menus: [(string | JSX.Element), (string | undefined), (string)][] = [
        [<HomeIcon />, containTexts.HOME_PAGE, containUrls.HOME_PAGE],
        [<LoginOutlinedIcon />, containTexts.LOGIN, containUrls.LOGIN],
        [<HowToRegOutlinedIcon />, containTexts.REGISTER, containUrls.REGISTER],
        [<AdminPanelSettingsIcon />, containTexts.DOCTOR_PANEL, containUrls.PANEL],
        [<ManageAccountsIcon />, containTexts.ADMIN_PANEL, containUrls.ADMIN_PANEL],
        [<PersonIcon />, containTexts.EDIT_PROFILE, containUrls.EDIT_PROFILE],
        [<QuestionAnswerOutlinedIcon />, containTexts.MY_QUESTIONS, containUrls.MY_QUESTIONS],
        [<PersonAddOutlinedIcon />, containTexts.SUBSCRIPTIONS, containUrls.SUBSCRIPTIONS],
        [<CreateOutlinedIcon />, containTexts.ARTICLES, `${containUrls.PANEL}${containUrls.ARTICLE}`],
        [<VideoCallOutlinedIcon />, containTexts.VIDEOS, `${containUrls.PANEL}${containUrls.VIDEO}`],
        [<PaymentsOutlinedIcon />, containTexts.PAYMENTS, containUrls.PAYMENTS],
        [<CreditCardOutlinedIcon />, containTexts.LOAD_MONEY, containUrls.BUY_CREDIT],
        [<HistoryIcon />, containTexts.HISTORY, containUrls.HISTORY],
        [<BookIcon />, containTexts.READING_LIST, containUrls.READING_LIST],
        [<PlaylistPlayOutlinedIcon />, containTexts.PLAYLIST, containUrls.PLAYLIST],
        [<SettingsIcon />, containTexts.SETTINGS, containUrls.SETTINGS],
        [<LogoutIcon />, containTexts.LOGOUT, containUrls.LOGOUT],
        [<InfoOutlinedIcon />, containTexts.ABOUT, containUrls.ABOUT],
    ]

    const activeMenus: boolean[][] = [
        containActiveMenus.NO_LOGIN,
        containActiveMenus.DOCTOR,
        containActiveMenus.ADMIN,
        containActiveMenus.USER,
    ]


    useEffect(() => {
        addActiveMenu(isLogin.isAuth ? activeMenuWhenAuthByRole() : activeMenus[0])
    }, [login])

    function activeMenuWhenAuthByRole() {

        let role: string = "doctor";

        switch (role) {
            case DOCTOR:
                return activeMenus[1];
            case ADMIN:
                return activeMenus[2];
            case USER:
                return activeMenus[3];
            default:
                return activeMenus[0];
        }
    }

    return (
        <div className='drawer-general-div'>
            {menus.map((menu, index) => (
                value[index] &&
                <NavLink title={!openDrawer ? menu[1] : ""} key={index} style={({ isActive }) => { return isActive ? { textDecoration: 'none', color: '#6b1e9c' } : { textDecoration: 'none', color: 'black' } }} to={menu[2]}>
                    <div className={!openDrawer ? 'drawer-item-container-when-close-drawer' : 'drawer-item-container'}>
                        <div className={!openDrawer ? 'drawer-menu-icon-when-close-drawer' : 'drawer-menu-icon'}>{menu[0]}</div>
                        <div style={{ ...(!openDrawer && { display: 'none' }) }} className='drawer-menu-text'>{menu[1]}</div>
                    </div>
                </NavLink>

            ))}
        </div>
    )
}

export default Drawer