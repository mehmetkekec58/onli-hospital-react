import React, { useState } from 'react'
import Navi from '../../layouts/navi/Navi'
import { Route, Routes } from 'react-router-dom';
import Home from '../home/Home';
import Search from '../search/Search';
import Drawer from '../../layouts/drawer/Drawer';
import Profile from '../profile/Profile';
import "./Main.css";
import Login from '../login/Login';
import Register from '../register/Register';
import Payment from '../payment/Payment';
import LoadMoney from '../load-money/LoadMoney';
import Settings from '../settings/Settings';

const Main = () => {
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);

  return (
    <div>
      <Navi setOpenDrawer={setOpenDrawer} openDrawer={openDrawer} />
      <div className={openDrawer ? "grid-container1" : "grid-container2"}>
        <div className='grid-item1'> <Drawer openDrawer={openDrawer} /></div>
        <div className='grid-item2'>
          <Routes>
            <Route index element={<Home />} />
            <Route path='/search' element={<Search />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/category/:id' element={<Search />} />
            <Route path='/payments' element={<Payment />} />
            <Route path='/buycredit' element={<LoadMoney />} />
            <Route path='/history' element={<Search />} />
            <Route path='/readinglist' element={<Search />} />
            <Route path='/settings' element={<Settings />} />
            <Route path='/about' element={<Search />} />
            <Route path='/videochat/:id' element={<Search />} />
            <Route path='/resetpassword' element={<Search />} />
            <Route path='/video'>
              <Route path=':id' element={<Search />} />
              <Route path='upload' element={<Search />} />
              <Route path=':id/update' element={<Search />} />
            </Route>
            <Route path='/article'>
              <Route path=':id' element={<Search />} />
              <Route path='add' element={<Search />} />
              <Route path=':id/update' element={<Search />} />
            </Route>
            <Route path='/chat'>
              <Route index element={<Search />} />
              <Route path=':id' element={<Search />} />
            </Route>
            <Route path='/profile/:username'>
              <Route index element={<Profile />} />
              <Route path='update' element={<Profile />} />
            </Route>
            <Route path='/*' element={<Search />} />
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default Main