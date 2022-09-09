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
import { NavLink, useLocation } from 'react-router-dom';
import { constantsText } from '../../constants/constantsText';
import { useDispatch, useSelector } from 'react-redux';
import State from '../../store/state';
import { constantsUrl } from '../../constants/constantsUrl';
import { bindActionCreators } from 'redux';
import activeMenuFunction from '../../store/actions/activeMenuActionCreator'
import { constantsActiveMenu } from '../../constants/constantsActiveMenu';
import QuestionAnswerOutlinedIcon from '@mui/icons-material/QuestionAnswerOutlined';
import PersonAddOutlinedIcon from '@mui/icons-material/PersonAddOutlined';
import { ADMIN, DOCTOR, USER } from '../../constants/constantsRole';
import Tooltip from '@mui/material/Tooltip/Tooltip';



const Drawer: React.FC = () => {

    const openDrawer = useSelector((state: State) => state.openDrawer.openDrawer)
    const location = useLocation()
    const login = useSelector((state: State) => state.login.login)
    const dispatch = useDispatch();
    const { addActiveMenu } = bindActionCreators(activeMenuFunction, dispatch)
    const value = useSelector((state: State) => state.activeMenu.activeMenu)
    const [panel, setPanel] = useState<boolean>(false)

    const menus: [(string | JSX.Element), (string), (string)][] = [
        [<HomeIcon />, constantsText.HOME_PAGE, constantsUrl.HOME_PAGE],
        [<LoginOutlinedIcon />, constantsText.LOGIN, constantsUrl.LOGIN],
        [<HowToRegOutlinedIcon />, constantsText.REGISTER, constantsUrl.REGISTER],
        [<AdminPanelSettingsIcon />, constantsText.DOCTOR_PANEL, constantsUrl.PANEL],
        [<ManageAccountsIcon />, constantsText.ADMIN_PANEL, constantsUrl.ADMIN_PANEL],
        [<PersonIcon />, constantsText.EDIT_PROFILE, constantsUrl.EDIT_PROFILE],
        [<QuestionAnswerOutlinedIcon />, constantsText.MY_QUESTIONS, constantsUrl.QUESTIONS],
        [<PersonAddOutlinedIcon />, constantsText.SUBSCRIPTIONS, constantsUrl.SUBSCRIPTIONS],
        [<CreateOutlinedIcon />, constantsText.ARTICLES, `${constantsUrl.PANEL}${constantsUrl.ARTICLE}`],
        [<VideoCallOutlinedIcon />, constantsText.VIDEOS, `${constantsUrl.PANEL}${constantsUrl.VIDEO}`],
        [<PaymentsOutlinedIcon />, constantsText.PAYMENTS, constantsUrl.PAYMENTS],
        [<CreditCardOutlinedIcon />, constantsText.LOAD_MONEY, constantsUrl.BUY_CREDIT],
        [<HistoryIcon />, constantsText.HISTORY, constantsUrl.HISTORY],
        [<BookIcon />, constantsText.READING_LIST, constantsUrl.READING_LIST],
        [<PlaylistPlayOutlinedIcon />, constantsText.PLAYLIST, constantsUrl.PLAYLIST],
        [<SettingsIcon />, constantsText.SETTINGS, constantsUrl.SETTINGS],
        [<LogoutIcon />, constantsText.LOGOUT, constantsUrl.LOGOUT],
        [<InfoOutlinedIcon />, constantsText.ABOUT, constantsUrl.ABOUT],
    ]

    const activeMenus: boolean[][] = [
        constantsActiveMenu.NO_LOGIN,
        constantsActiveMenu.DOCTOR,
        constantsActiveMenu.ADMIN,
        constantsActiveMenu.USER,
    ]
    function panelOrAdminPanel(path: string) {
        let array = path.split("/")[1]
        let array1 = `/${array}`
        return array1 === constantsUrl.PANEL || array1 === constantsUrl.ADMIN_PANEL
    }

    useEffect(() => {
        addActiveMenu(login ? activeMenuWhenAuthByRole() : activeMenus[0])
    }, [login, panel])

    useEffect(() => {
        if (!panelOrAdminPanel(location.pathname))
            setPanel(true)
        else
            setPanel(false)
    }, [location.pathname])

    function activeMenuWhenAuthByRole() {

        let role: string = "admin";
        if (panel) {
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
        } else {
            switch (role) {
                case DOCTOR:
                    return activeMenus[1];
                case ADMIN:
                    return activeMenus[2];
                default:
                    return activeMenus[0];
            }
        }
    }

    if (openDrawer) {

        return (
            <div className={'drawer-general-div'}>
                {menus.map((menu, index) => (
                    value[index] &&
                    <NavLink key={index} style={({ isActive }) => { return isActive ? { color: '#6b1e9c' } : { color: 'black' } }} to={menu[2]}>
                        <div className={'drawer-item-container'}>
                            <div className={'drawer-menu-icon'}>{menu[0]}</div>
                            <div className='drawer-menu-text'>{menu[1]}</div>
                        </div>
                    </NavLink>
                ))}
            </div>
        )

    } else {

        return (
            <div className={'drawer-general-div2'}>
                {menus.map((menu, index) => (
                    value[index] &&
                    <NavLink key={index} style={({ isActive }) => { return isActive ? { color: '#6b1e9c' } : { color: 'black' } }} to={menu[2]}>
                        <Tooltip title={menu[1]} placement="right">
                            <div className={'drawer-item-container-when-close-drawer'}>
                                <div className={'drawer-menu-icon-when-close-drawer'}>{menu[0]}</div>
                                <div style={{ display: 'none' }} className='drawer-menu-text'>{menu[1]}</div>
                            </div>
                        </Tooltip>
                    </NavLink>
                ))}
            </div>
        )
    }
}

export default Drawer