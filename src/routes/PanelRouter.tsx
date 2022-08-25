import Search from '@mui/icons-material/Search'
import { Route, Routes } from 'react-router-dom'
import { containUrls } from '../contains/containUrls'

const PanelRouter = () => {
    return (
        <Routes>
            <Route path={containUrls.VIDEO}>
                <Route index element={<Search />} />
                <Route path='upload' element={<Search />} />
                <Route path='update' element={<Search />} />
            </Route>

            <Route path={containUrls.ARTICLE}>
                <Route index element={<Search />} />
                <Route path='add' element={<Search />} />
                <Route path='update' element={<Search />} />
            </Route>

            <Route path={containUrls.ANALYTICS}>
                <Route index element={<Search />} />
            </Route>

            <Route path={containUrls.ARTICLE} >
                <Route index element={<Search />} />
                <Route path='add' element={<Search />} />
                <Route path='update' element={<Search />} />
            </Route>

            <Route path={containUrls.POST} >
                <Route index element={<Search />} />
                <Route path='publish' element={<Search />} />
                <Route path='update' element={<Search />} />
            </Route>



        </Routes>
    )
}

export default PanelRouter