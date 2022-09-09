import TextField from '@mui/material/TextField/TextField'
import React from 'react'
import { Link } from 'react-router-dom'
import './Register.css'
import { constantsText } from '../../constants/constantsText'
import { constantsUrl } from '../../constants/constantsUrl'


const Register = () => {
    return (
        <div className='register-container'>
            <div className='register-form'>
                <div className="register-text">{constantsText.REGISTER}</div>
                <TextField fullWidth className='register-input-first-name' type="text" label={constantsText.FIRST_NAME} variant="outlined" color='secondary' />
                <TextField fullWidth className='register-input-last-name' type="text" label={constantsText.LAST_NAME} variant="outlined" color='secondary' />
                <TextField fullWidth className='register-input-email' type="email" label={constantsText.EMAIL} variant="outlined" color='secondary' />
                <TextField fullWidth className='register-input-password' type="password" label={constantsText.PASSWORD} variant="outlined" color='secondary' />
                <button className='register-submit-button' type='submit'>{constantsText.REGISTER}</button>
                <div className='register-already-have-an-account-text'>{constantsText.ALREADY_HAVE_AN_ACCOUNT_TEXT}</div>
                <Link className='register-login-page' to={constantsUrl.LOGIN}>{constantsText.LOGIN}</Link>
            </div>
        </div>
    )
}

export default Register