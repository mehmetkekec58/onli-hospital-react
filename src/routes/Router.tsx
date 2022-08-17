import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { containUrls } from '../contains/containUrls'
import Article from '../pages/article/Article'
import Home from '../pages/home/Home'
import LoadMoney from '../pages/load-money/LoadMoney'
import Login from '../pages/login/Login'
import Payment from '../pages/payment/Payment'
import Playlist from '../pages/playlist/Playlist'
import Profile from '../pages/profile/Profile'
import ReadingList from '../pages/reading-list/ReadingList'
import Register from '../pages/register/Register'
import Search from '../pages/search/Search'
import Settings from '../pages/settings/Settings'
import Video from '../pages/video/Video'
import RequireAuth from '../utilities/Auth/RequireAuth'

interface Props {
  openDrawer: boolean
}

const Router = ({ openDrawer }: Props) => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path='/search' element={<Search />} />
      <Route path={containUrls.LOGIN} element={<Login />} />
      <Route path={containUrls.REGISTER} element={<Register />} />
      <Route path='/category/:id' element={<Search />} />
      <Route path='/payments' element={<RequireAuth roles={["doctor"]}><Payment /></RequireAuth>} />
      <Route path='/buycredit' element={<RequireAuth><LoadMoney /></RequireAuth>} />
      <Route path='/history' element={<Search />} />
      <Route path='/readinglist' element={<ReadingList />} />
      <Route path='/playlist' element={<Playlist />} />
      <Route path='/settings' element={<Settings />} />
      <Route path='/about' element={<Search />} />
      <Route path='/videochat/:id' element={<Search />} />
      <Route path='/resetpassword' element={<Search />} />
      <Route path='/video'>
        <Route path='panel' element={<Search />} />
        <Route path=':id' element={<Video openDrawer={openDrawer} />} />
        <Route path='upload' element={<Search />} />
        <Route path=':id/update' element={<Search />} />
      </Route>
      <Route path='/article'>
        <Route path='panel' element={<Search />} />
        <Route path=':id/update' element={<Search />} />
        <Route path=':id' element={<Article openDrawer={openDrawer} />} />
        <Route path='add' element={<Search />} />
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
  )
}

export default Router