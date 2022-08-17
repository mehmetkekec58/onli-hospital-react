import React, { useState } from 'react'
import Navi from '../../layouts/navi/Navi'
import Drawer from '../../layouts/drawer/Drawer';
import "./Main.css";
import Router from '../../routes/Router';


const Main = () => {
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);

  return (
    <div>
      <Navi setOpenDrawer={setOpenDrawer} openDrawer={openDrawer} />
      <div className={openDrawer ? "grid-container1" : "grid-container2"}>
        <div className='grid-item1'> <Drawer openDrawer={openDrawer} /></div>
        <div className='grid-item2'>
        <Router openDrawer={openDrawer} />
        </div>
      </div>
    </div>
  )
}

export default Main