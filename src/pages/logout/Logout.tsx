import { bindActionCreators } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { containUrls } from '../../contains/containUrls'
import { deleteToken } from '../../services/tokenService'
import LoginFunction from '../../store/actions/loginAction'


const Logout = () => {
    const dispatch = useDispatch();
    const {changeValueLogin} = bindActionCreators(LoginFunction,dispatch)
    function SignOut() {
        deleteToken()
        changeValueLogin(false)
        return <Navigate to={containUrls.HOME_PAGE} replace />
    }
    return (
        <div>
            {SignOut()}
        </div>
    )
}

export default Logout