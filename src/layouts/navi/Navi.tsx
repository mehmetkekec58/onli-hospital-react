import React, { useState } from 'react'
import "./Navi.css";
import MenuIcon from '@mui/icons-material/Menu';
import { constantsText } from '../../constants/constantsText';
import Input from '../input/Input';
import Avatar from '@mui/material/Avatar/Avatar';
import { Link } from 'react-router-dom';
import Badge from '@mui/material/Badge/Badge';
import CircleNotificationsOutlinedIcon from '@mui/icons-material/CircleNotificationsOutlined';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from '@reduxjs/toolkit';
import State from '../../store/state';
import openDrawerFunctions from '../../store/actions/openDrawerActionCreater';
import useWindowSize from '../../hooks/useWindowSize';
import Drawer from '../drawer/Drawer';
import { constantsUrl } from '../../constants/constantsUrl';
import NotificationModel from '../../models/notificationModel';
import Notification from '../../utilities/components/notification/Notification';

const notifications: NotificationModel[] = [{ id: 0, message: "bu bir bildirim 1" }, { id: 1, message: "bildirim 2" }, { id: 2, message: "bildirim 3" }];

const Navi: React.FC = () => {

  const dispatch = useDispatch();

  const { width } = useWindowSize();
  const { openDrawerChangeValue } = bindActionCreators(openDrawerFunctions, dispatch)
  const openDrawerValue = useSelector((state: State) => state.openDrawer.openDrawer)
  const login = useSelector((state: State) => state.login.login)
  const [openDrawer, setOpenDrawer] = [openDrawerValue, openDrawerChangeValue]
  const [openNotification, setOpenNotification] = useState<boolean>(false)

  const handleOpenOrCloseNotification = () => {
    setOpenNotification(!openNotification);
  }

  const profilePhotoUrl = "https://pbs.twimg.com/profile_images/1523976377074163713/hRUFPi6z_400x400.jpg"
  const userFullName: string = "Mehmet Kekeç"

  const handleOpenOrCloseDrawer = () => {
    setOpenDrawer(!openDrawer)
  }
  function widthBiggerThen250() {
    return width !== undefined && width > 250
  }


  return (
    <div className='navi-component'>
      <div className='navi-items-general-div'>
        <div onClick={handleOpenOrCloseDrawer} className='navi-icon-for-drawer-open'><MenuIcon sx={{ color: 'white', ...(width && width <= 606) && { width: "20px", height: "20" } }} /></div>
        {openDrawer && (width && width <= 606) && <div onClick={handleOpenOrCloseDrawer} className='navi-drawer'><Drawer /></div>}
        <div className='brand-name-for-navi'>  <Link style={{ color: 'white' }} to={constantsUrl.HOME_PAGE}>{constantsText.BRAND_NAME}</Link></div>
        <div className='navi-input'><Input /></div>
        {login && widthBiggerThen250() &&
          <div onClick={handleOpenOrCloseNotification} className='navi-notification-icon'>
            <Badge badgeContent={10} max={99} color="error">
              <CircleNotificationsOutlinedIcon style={{ padding: '3px', color: 'white', height: '35px', width: '35px' }} />
            </Badge>
          </div>}
        {openNotification && login &&
          <Notification notifications={notifications} />
        }
        {login && <div  className='navi-avatar'>
        <Avatar title={userFullName} alt={userFullName} src={profilePhotoUrl} sx={{ backgroundColor: '#ffd740', border: '2px white solid', color: 'black', fontWeight: 'bold', width: '35px', height: '35px' }} /> </div>}
      </div>
    </div>
  )
}

export default Navi