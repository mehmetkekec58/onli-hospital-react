import TextField from '@mui/material/TextField/TextField'
import React from 'react'
import { Link } from 'react-router-dom'
import './Register.css'
import { containTexts } from '../../contains/containTexts'


const Register = () => {
    return (
        <div className='register-container'>
            <div className='register-form'>
                <TextField className='register-input-first-name' sx={{ width: '50%' }} id="outlined-basic" label={containTexts.firstName} variant="outlined" color='secondary' />
                <TextField className='register-input-last-name' sx={{ width: '50%' }} id="outlined-basic" label={containTexts.lastName} variant="outlined" color='secondary' />
                <TextField className='register-input-username' sx={{ width: '50%' }} id="outlined-basic" label={containTexts.username} variant="outlined" color='secondary' />
                <TextField className='register-input-email' sx={{ width: '50%' }} id="outlined-basic" label={containTexts.email} variant="outlined" color='secondary' />
                <TextField className='register-input-password' sx={{ width: '50%' }} id="outlined-basic" label={containTexts.password} variant="outlined" color='secondary' />

                {/* <Link className='i-forgot-my-password' to="/resetpassword">Şifremi Unuttum</Link> */}
                <button className='register-submit-button' type='submit'>{containTexts.register}</button>
                <div className='register-already-have-an-account-text'>{containTexts.alreadyHaveAnAccountText}</div>
                <Link className='register-login-page' to="/login">{containTexts.login}</Link>
            </div>
        </div>
    )
}

export default Register