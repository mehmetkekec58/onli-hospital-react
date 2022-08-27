import TextField from '@mui/material/TextField/TextField';
import React from 'react'
import { containTexts } from '../../contains/containTexts';
import "./EditProfile.css";

const EditProfile = () => {
    const handleSave = () => {

    }
    const handleCancel = () => {

    }
    return (
        <div className='edit-profile-container'>
            <form className='edit-profile-form'>
                <div className="edit-profile-general-info">
                    <TextField className='edit-profile-input-email' sx={{ width: '90%' }} required id="outlined-basic" label={containTexts.FIRST_NAME} type="text" variant="outlined" color='secondary' />
                    <TextField className='edit-profile-input-email' sx={{ width: '90%' }} required id="outlined-basic" label={containTexts.LAST_NAME} type="text" variant="outlined" color='secondary' />
                    <TextField className='edit-profile-input-email' sx={{ width: '90%' }} required id="outlined-basic" label={containTexts.EMAİL} type="email" variant="outlined" color='secondary' />
                    <TextField className='edit-profile-input-email' sx={{ width: '90%' }} required id="outlined-basic" label={containTexts.AGE} type="number" variant="outlined" color='secondary' />
                    <TextField className='edit-profile-input-email' sx={{ width: '90%' }} id="outlined-basic" label={containTexts.HEIGHT} type="number" variant="outlined" color='secondary' />
                    <TextField className='edit-profile-input-email' sx={{ width: '90%' }} id="outlined-basic" label={containTexts.WEIGHT} type="number" variant="outlined" color='secondary' />
                </div>
                <div className="edit-profile-photo">
                    <img width={200} height={200} alt='profilephoto' src="https://thumbs.dreamstime.com/b/default-profile-picture-avatar-photo-placeholder-vector-illustration-default-profile-picture-avatar-photo-placeholder-vector-189495158.jpg" />
                    <input type="file" />
                </div>
                <div className="edit-profile-password">
                    Şifre Değiştir
                    <TextField className='edit-profile-input-email' sx={{ width: '90%' }} id="outlined-basic" label={containTexts.PREVIOUS_PASSWORD} type="password" variant="outlined" color='secondary' />
                    <TextField className='edit-profile-input-email' sx={{ width: '90%' }} id="outlined-basic" label={containTexts.PASSWORD} type="password" variant="outlined" color='secondary' />
                    <TextField className='edit-profile-input-email' sx={{ width: '90%' }} id="outlined-basic" label={containTexts.REPEAT_PASSWORD} type="password" variant="outlined" color='secondary' />

                </div>
               
            </form>
            <div className="edit-profile-button-container">
                <button onClick={handleCancel} className='edit-profile-button'>{containTexts.CANCEL}</button>
                <button onClick={handleSave} className='edit-profile-button'>{containTexts.SAVE}</button>
            </div>
        </div>
    )
}

export default EditProfile