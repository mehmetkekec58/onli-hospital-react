import React from 'react'
import Navi from '../../layouts/navi/Navi'
import Drawer from '../../layouts/drawer/Drawer';
import "./Main.css";
import Router from '../../routes/Router';
import { useSelector } from 'react-redux';
import State from '../../store/state';



const Main = () => {

  const openDrawer = useSelector((state: State) => state.openDrawer.openDrawer)

  return (
    <div>
      <Navi/>
      <div className={openDrawer ? "grid-container1" : "grid-container2"}>
        <div className='grid-item1'> <Drawer /></div>
        <div className='grid-item2'>
        <Router />
        </div>
      </div>
    </div>
  )
}

export default Main