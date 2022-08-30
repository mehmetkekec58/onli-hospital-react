import React from 'react'
import NotificationModel from '../../../models/notificationModel';
import "./Notification.css";

interface Props{
    notifications:NotificationModel[]
}

const Notification:React.FC<Props> = ({notifications}:Props) => {
  return (
    <ul  className='notification-menu'>
    {notifications.map((notification) => (
      <li key={notification.id} className='notification-item'>{notification.message}</li>
    ))}
  </ul>
  )
}

export default Notification