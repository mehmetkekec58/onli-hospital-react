import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AdminPanel from '../pages/panel/admin-panel/AdminPanel'

const AdminPanelRouter = () => {
    return (
        <Routes>
            <Route index element={<AdminPanel />} />
        </Routes> 
    )
}

export default AdminPanelRouter