import { bindActionCreators } from '@reduxjs/toolkit'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { deleteToken } from '../../services/tokenService'
import LoginFunction from '../../store/actions/loginAction'


const Logout = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { changeValueLogin } = bindActionCreators(LoginFunction, dispatch)

    function SignOut() {
        changeValueLogin(false)
        deleteToken()
        navigate("/")

    }

    useEffect(() => {
        SignOut()
    }, [])

    return (
        <div>
        </div>
    )
}

export default Logout