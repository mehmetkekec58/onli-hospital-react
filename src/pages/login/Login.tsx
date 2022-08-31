import TextField from '@mui/material/TextField/TextField';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';
import { Checkbox } from '@mui/material';
import { containTexts } from '../../contains/containTexts';
import { setToken } from '../../services/tokenService';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from '@reduxjs/toolkit';
import LoginFunction from '../../store/actions/loginAction';
import { VariantType, useSnackbar } from 'notistack';
import useWindowSize from '../../hooks/useWindowSize';

const Login = () => {
    const { enqueueSnackbar } = useSnackbar();
    const {width} = useWindowSize();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { changeValueLogin } = bindActionCreators(LoginFunction, dispatch)
    const handleLogin = () => {
        changeValueLogin(true)
        setToken("token12322332432")
        navigate("/")
    }
    const handleHata = () => {
        enqueueSnackbar("Giriş Başarısız. Şifre veya e-posta hatalı!", { variant: 'error', anchorOrigin: { vertical: 'bottom', horizontal: 'right' } })
    }

    return (
        <div className='login-container'>
            <div className='login-form'>
                <div className="login-text">{containTexts.LOGIN}</div>
                <TextField className='login-input-email' name='email'  sx={{width:'100%'}} type="email" label={containTexts.EMAIL} variant="outlined" color='secondary' />
                <TextField className='login-input-password' name='password' sx={{width:'100%'}} type="password"  label={containTexts.PASSWORD} variant="outlined" color='secondary' />
                <div className='login-checkbox'> <Checkbox color='secondary' />{containTexts.REMEMBER_ME}</div>
                <Link className='i-forgot-my-password' to="/resetpassword">{containTexts.FORGET_MY_PASSWORD}</Link>
                <button onClick={handleLogin} className='login-submit-button' type='submit'>{containTexts.LOGIN}</button>
                <div className='dont-have-an-account-text'>{containTexts.DONT_HAVE_AN_ACCOUNT_TEXT}</div>
                <Link className='login-create-account' to="/register">{containTexts.REGISTER}</Link>
            </div>
        </div>
    )
}

export default Login