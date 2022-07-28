import React from 'react'
import Navi from '../../layouts/navi/Navi'
import { Route, Routes } from 'react-router-dom';
import Home from '../home/Home';
import Search from '../search/Search';
import Drawer from '../../layouts/drawer/Drawer';
import Profile from '../profile/Profile';
import "./Main.css";

const Main = () => {
  return (
    <div>
      <Navi />

      <div className='grid-container'>
        <div className='grid-item'> <Drawer /></div>
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