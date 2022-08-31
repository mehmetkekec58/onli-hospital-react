import TextField from '@mui/material/TextField/TextField'
import React from 'react'
import { containTexts } from '../../contains/containTexts'
import "./ResetPassword.css"

const ResetPassword = () => {

const handleReset = () =>{

}

  return (
    <div className='reset-password-container'>
    <div className='reset-password-form'>
        <div className="reset-password-text">Şifresini sıfırlamak istediğiniz e-posta adresini giriniz.</div>
        <TextField className='reset-password-input-email' sx={{ width: '50%' }} id="outlined-basic" label={containTexts.EMAIL} variant="outlined" color='secondary' />
        <button onClick={handleReset} className='reset-password-submit-button' type='submit'>{containTexts.RESET}</button>    
    </div>
</div>
  )
}

export default ResetPassword