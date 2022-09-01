import React from 'react'
import Navi from '../../layouts/navi/Navi'
import Drawer from '../../layouts/drawer/Drawer';
import "./Main.css";
import Router from '../../routes/Router';
import { useSelector } from 'react-redux';
import State from '../../store/state';
import useWindowSize from '../../hooks/useWindowSize';


const Main = () => {
  const { width } = useWindowSize()
  
  const openDrawer = useSelector((state: State) => state.openDrawer.openDrawer)

  function drawer(): string {
    return openDrawer ? "grid-container1" : "grid-container2"
  }
  function hideOrShowDrawer() {
    return (width && width <= 606) ? "main-normal-container" : drawer();
  }

  return (
    <div>
      <Navi />
      <div className={hideOrShowDrawer()}>
        {(width && width > 606) && <div className='grid-item1'> <Drawer /></div>}
        <div className='grid-item2'>
          <Router />
        </div>
      </div>
    </div>
  )
}

export default Main