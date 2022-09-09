import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { ADMIN, DOCTOR } from '../constants/constantsRole'
import { constantsUrl } from '../constants/constantsUrl'
import NotFoundPage from '../layouts/not-found-page/NotFoundPage'
import Article from '../pages/article/Article'
import Category from '../pages/category/Category'
import EditProfile from '../pages/edit-profile/EditProfile'
// import History from '../pages/history/History'
import Home from '../pages/home/Home'
import LoadMoney from '../pages/load-money/LoadMoney'
import Login from '../pages/login/Login'
import Logout from '../pages/logout/Logout'
import Payment from '../pages/payment/Payment'
import Playlist from '../pages/playlist/Playlist'
import Profile from '../pages/profile/Profile'
import Question from '../pages/question/Question'
import ReadingList from '../pages/reading-list/ReadingList'
import Register from '../pages/register/Register'
import ResetPassword from '../pages/reset-password/ResetPassword'
import Search from '../pages/search/Search'
import Settings from '../pages/settings/Settings'
import Subscription from '../pages/subscription/Subscription'
import Video from '../pages/video/Video'
import NotAuth from '../utilities/Auth/NotAuth'
import RequireAuth from '../utilities/Auth/RequireAuth'
import AdminPanelRouter from './AdminPanelRouter'
import PanelRouter from './PanelRouter'


const Router = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path={constantsUrl.SEARCH} element={<Search />} />
      <Route path={constantsUrl.LOGIN} element={<NotAuth><Login /></NotAuth>} />
      <Route path={constantsUrl.REGISTER} element={<NotAuth><Register /></NotAuth>} />
      <Route path={constantsUrl.PAYMENTS} element={<RequireAuth roles={[DOCTOR,ADMIN]}><Payment /></RequireAuth>} />
      <Route path={constantsUrl.BUY_CREDIT} element={<RequireAuth><LoadMoney /></RequireAuth>} />
      {/* <Route path={constantsUrl.HISTORY} element={<RequireAuth><History /></RequireAuth>} /> */}
      <Route path={constantsUrl.EDIT_PROFILE} element={<RequireAuth><EditProfile /></RequireAuth>} />
      <Route path={constantsUrl.READING_LIST} element={<RequireAuth><ReadingList /></RequireAuth>} />
      <Route path={constantsUrl.PLAYLIST} element={<RequireAuth><Playlist /></RequireAuth>} />
      <Route path={constantsUrl.SETTINGS} element={<Settings />} />
      <Route path={constantsUrl.ABOUT} element={<Search />} />
      <Route path={constantsUrl.QUESTIONS} element={<Question />} />
      <Route path={constantsUrl.LOGOUT} element={<RequireAuth><Logout /></RequireAuth>} />
      <Route path={constantsUrl.SUBSCRIPTIONS} element={<RequireAuth><Subscription /></RequireAuth>} />
      <Route path={constantsUrl.RESET_PASSWORD} element={<NotAuth><ResetPassword /></NotAuth>} />
      <Route path={constantsUrl.VIDEO_CHAT}>
        <Route path =':id' element={<RequireAuth><Search /></RequireAuth>} />
      </Route>
      <Route path={constantsUrl.POST}>
        <Route path=':id' element={<Search />} />
      </Route>
      <Route path={constantsUrl.CATEGORY}>
        <Route path=':id' element={<Category />} />
      </Route>
      <Route path={constantsUrl.VIDEO}>
        <Route path=':id' element={<Video />} />
      </Route>
      <Route path={constantsUrl.ARTICLE}>
        <Route path=':id' element={<Article />} />
      </Route>
      <Route path={constantsUrl.CHAT}>
        <Route index element={<RequireAuth><Search /></RequireAuth>} />
        <Route path=':id' element={<RequireAuth><Search /></RequireAuth>} />
      </Route>
      <Route path={constantsUrl.PROFILE}>
        <Route path=':username' element={<Profile />} />
        <Route path='update' element={<RequireAuth><Profile /></RequireAuth>} />
      </Route>

      <Route path={`${constantsUrl.PANEL}${constantsUrl.OTHER_LINK}`} element={<RequireAuth roles={[ADMIN, DOCTOR]}><PanelRouter /></RequireAuth>} />
      <Route path={`${constantsUrl.ADMIN_PANEL}${constantsUrl.OTHER_LINK}`} element={<RequireAuth roles={[ADMIN]}><AdminPanelRouter /></RequireAuth>} />

      <Route path={constantsUrl.OTHER_LINK} element={<NotFoundPage />} />
    </Routes>
  )
}

export default Router