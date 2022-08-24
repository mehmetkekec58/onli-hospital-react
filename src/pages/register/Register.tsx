import TextField from '@mui/material/TextField/TextField'
import React from 'react'
import { Link } from 'react-router-dom'
import './Register.css'
import { containTexts } from '../../contains/containTexts'


const Register = () => {
    return (
        <div className='register-container'>
            <div className='register-form'>
                <TextField className='register-input-first-name' sx={{ width: '50%' }} id="outlined-basic" label={containTexts.FIRST_NAME} variant="outlined" color='secondary' />
                <TextField className='register-input-last-name' sx={{ width: '50%' }} id="outlined-basic" label={containTexts.LAST_NAME} variant="outlined" color='secondary' />
                <TextField className='register-input-username' sx={{ width: '50%' }} id="outlined-basic" label={containTexts.USERNAME} variant="outlined" color='secondary' />
                <TextField className='register-input-email' sx={{ width: '50%' }} id="outlined-basic" label={containTexts.EMAİL} variant="outlined" color='secondary' />
                <TextField className='register-input-password' sx={{ width: '50%' }} id="outlined-basic" label={containTexts.PASSWORD} variant="outlined" color='secondary' />
                <button className='register-submit-button' type='submit'>{containTexts.REGISTER}</button>
                <div className='register-already-have-an-account-text'>{containTexts.ALREADY_HAVE_AN_ACCOUNT_TEXT}</div>
                <Link className='register-login-page' to="/login">{containTexts.LOGIN}</Link>
            </div>
        </div>
    )
}

export default Register