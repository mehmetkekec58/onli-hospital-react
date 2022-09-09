import TextField from '@mui/material/TextField/TextField'
import React from 'react'
import { constantsText } from '../../constants/constantsText'
import "./ResetPassword.css"

const ResetPassword = () => {

const handleReset = () =>{

}

  return (
    <div className='reset-password-container'>
    <div className='reset-password-form'>
        <div className="reset-password-text">Şifresini sıfırlamak istediğiniz e-posta adresini giriniz.</div>
        <TextField fullWidth  label={constantsText.EMAIL} variant="outlined" color='secondary' />
        <button onClick={handleReset} className='reset-password-submit-button' type='submit'>{constantsText.RESET}</button>    
    </div>
</div>
  )
}

export default ResetPassword