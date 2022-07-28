import React, { useState } from 'react'
import Navi from '../../layouts/navi/Navi'
import { Route, Routes } from 'react-router-dom';
import Home from '../home/Home';
import Search from '../search/Search';
import Drawer from '../../layouts/drawer/Drawer';
import Profile from '../profile/Profile';
import "./Main.css";

const Main = () => {
  const [openDrawer, setOpenDrawer] = useState<boolean>(true);

  return (
    <div>
      <Navi setOpenDrawer={setOpenDrawer} openDrawer={openDrawer} />
      <div className={openDrawer? "grid-container1" : "grid-container2"}>
        <div  className='grid-item'> <Drawer openDrawer={openDrawer} /></div>
        <div className='grid-item'>
          <Routes>
            <Route index element={<Home />} />
            <Route path='/search' element={<Search />} />
            <Route path='/profile' element={<Profile />} />
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default Main