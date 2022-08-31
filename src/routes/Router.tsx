import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { ADMIN, DOCTOR } from '../contains/containRoles'
import { containUrls } from '../contains/containUrls'
import NotFoundPage from '../layouts/not-found-page/NotFoundPage'
import Article from '../pages/article/Article'
import Category from '../pages/category/Category'
import EditProfile from '../pages/edit-profile/EditProfile'
import Home from '../pages/home/Home'
import LoadMoney from '../pages/load-money/LoadMoney'
import Login from '../pages/login/Login'
import Logout from '../pages/logout/Logout'
import Payment from '../pages/payment/Payment'
import Playlist from '../pages/playlist/Playlist'
import Profile from '../pages/profile/Profile'
import ReadingList from '../pages/reading-list/ReadingList'
import Register from '../pages/register/Register'
import ResetPassword from '../pages/reset-password/ResetPassword'
import Search from '../pages/search/Search'
import Settings from '../pages/settings/Settings'
import Video from '../pages/video/Video'
import NotAuth from '../utilities/Auth/NotAuth'
import RequireAuth from '../utilities/Auth/RequireAuth'
import PanelRouter from './PanelRouter'


const Router = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path={containUrls.SEARCH} element={<Search />} />
      <Route path={containUrls.LOGIN} element={<NotAuth><Login /></NotAuth>} />
      <Route path={containUrls.REGISTER} element={<NotAuth><Register /></NotAuth>} />
      <Route path={containUrls.PAYMENTS} element={<RequireAuth roles={[DOCTOR,ADMIN]}><Payment /></RequireAuth>} />
      <Route path={containUrls.BUY_CREDIT} element={<RequireAuth><LoadMoney /></RequireAuth>} />
      <Route path={containUrls.HISTORY} element={<RequireAuth><Search /></RequireAuth>} />
      <Route path={containUrls.EDIT_PROFILE} element={<RequireAuth><EditProfile /></RequireAuth>} />
      <Route path={containUrls.READING_LIST} element={<RequireAuth><ReadingList /></RequireAuth>} />
      <Route path={containUrls.PLAYLIST} element={<RequireAuth><Playlist /></RequireAuth>} />
      <Route path={containUrls.SETTINGS} element={<Settings />} />
      <Route path={containUrls.ABOUT} element={<Search />} />
      <Route path={containUrls.LOGOUT} element={<RequireAuth><Logout /></RequireAuth>} />
      <Route path={containUrls.RESET_PASSWORD} element={<NotAuth><ResetPassword /></NotAuth>} />
      <Route path={containUrls.VIDEO_CHAT}>
        <Route path =':id' element={<RequireAuth><Search /></RequireAuth>} />
      </Route>
      <Route path={containUrls.POST}>
        <Route path=':id' element={<Search />} />
      </Route>
      <Route path={containUrls.CATEGORY}>
        <Route path=':id' element={<Category />} />
      </Route>
      <Route path={containUrls.VIDEO}>
        <Route path=':id' element={<Video />} />
      </Route>
      <Route path={containUrls.ARTICLE}>
        <Route path=':id' element={<Article />} />
      </Route>
      <Route path={containUrls.CHAT}>
        <Route index element={<RequireAuth><Search /></RequireAuth>} />
        <Route path=':id' element={<RequireAuth><Search /></RequireAuth>} />
      </Route>
      <Route path={containUrls.PROFILE}>
        <Route path=':username' element={<Profile />} />
        <Route path='update' element={<RequireAuth><Profile /></RequireAuth>} />
      </Route>

      <Route path={`${containUrls.PANEL}${containUrls.OTHER_LINK}`} element={<RequireAuth roles={[ADMIN, DOCTOR]}><PanelRouter /></RequireAuth>} />

      <Route path={containUrls.OTHER_LINK} element={<NotFoundPage />} />
    </Routes>
  )
}

export default Router