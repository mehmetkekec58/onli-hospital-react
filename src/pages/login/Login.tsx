import React from 'react'
import TextField from '@mui/material/TextField/TextField';
import { Link } from 'react-router-dom';
import './Login.css';
import { Checkbox } from '@mui/material';
import { containTexts } from '../../contains/containTexts';

const Login = () => {

    return (
        <div className='login-container'>
            <div className='login-form'>
                <TextField className='login-input-email' sx={{ width: '50%' }} id="outlined-basic" label={containTexts.email} variant="outlined" color='secondary' />
                <TextField className='login-input-password' sx={{ width: '50%' }} id="outlined-basic" label={containTexts.password} variant="outlined" color='secondary' />
                <div className='login-checkbox'> <Checkbox color='secondary' />{containTexts.rememberMe}</div>
                <Link className='i-forgot-my-password' to="/resetpassword">{containTexts.forgetMyPassword}</Link>
                <button className='login-submit-button' type='submit'>{containTexts.login}</button>
                <div className='dont-have-an-account-text'>{containTexts.dontHaveAnAccountText}</div>
                <Link className='login-create-account' to="/register">{containTexts.register}</Link>
            </div>
        </div>
    )
}

export default Login