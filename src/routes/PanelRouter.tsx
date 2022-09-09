import Search from '@mui/icons-material/Search'
import { Route, Routes } from 'react-router-dom'
import { constantsUrl } from '../constants/constantsUrl'
import DoctorPanel from '../pages/panel/doctor-panel/DoctorPanel'

const PanelRouter = () => {
    return (
        <Routes>
            <Route index element={<DoctorPanel />} />
            <Route path={constantsUrl.VIDEO}>
                <Route index element={<Search />} />
                <Route path='upload' element={<Search />} />
                <Route path='update' element={<Search />} />
            </Route>

            <Route path={constantsUrl.ARTICLE}>
                <Route index element={<Search />} />
                <Route path='add' element={<Search />} />
                <Route path='update' element={<Search />} />
            </Route>

            <Route path={constantsUrl.ANALYTICS}>
                <Route index element={<Search />} />
            </Route>

            <Route path={constantsUrl.ARTICLE} >
                <Route index element={<Search />} />
                <Route path='add' element={<Search />} />
                <Route path='update' element={<Search />} />
            </Route>

            <Route path={constantsUrl.POST} >
                <Route index element={<Search />} />
                <Route path='publish' element={<Search />} />
                <Route path='update' element={<Search />} />
            </Route>

        </Routes>
    )
}

export default PanelRouter