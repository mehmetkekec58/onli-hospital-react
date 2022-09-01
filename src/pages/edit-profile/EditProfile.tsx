import TextField from '@mui/material/TextField/TextField';
import React, { useRef, useState } from 'react'
import { containTexts } from '../../contains/containTexts';
import useWindowSize from '../../hooks/useWindowSize';
import "./EditProfile.css";

const EditProfile = () => {
    const [file, setFile] = useState("https://thumbs.dreamstime.com/b/default-profile-picture-avatar-photo-placeholder-vector-illustration-default-profile-picture-avatar-photo-placeholder-vector-189495158.jpg")
    const { width } = useWindowSize();
    const fileRef = useRef<HTMLInputElement>(null);

    const handleSave = () => {

    }
    const handleCancel = () => {

    }
    const handleSelectImage = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(file);
        if (e.target.files && e.target.files[0]) {
            setFile(URL.createObjectURL(e.target.files[0]))
        }
    }
    function widthbiggerThan568() {
        return (width && width > 568) ? true : false;
    }

    if (widthbiggerThan568()) {
        return (
            <div className='edit-profile-container'>
                <form className={'edit-profile-form'}>
                    <div className="edit-profile-general-info">
                        <TextField className='edit-profile-input-email' fullWidth required label={containTexts.FIRST_NAME} type="text" variant="outlined" color='secondary' />
                        <TextField className='edit-profile-input-email' fullWidth required label={containTexts.LAST_NAME} type="text" variant="outlined" color='secondary' />
                        <TextField className='edit-profile-input-email' fullWidth required label={containTexts.EMAIL} type="email" variant="outlined" color='secondary' />
                        <TextField className='edit-profile-input-email' fullWidth required label={containTexts.AGE} type="number" variant="outlined" color='secondary' />
                        <TextField className='edit-profile-input-email' fullWidth label={containTexts.HEIGHT} type="number" variant="outlined" color='secondary' />
                        <TextField className='edit-profile-input-email' fullWidth label={containTexts.WEIGHT} type="number" variant="outlined" color='secondary' />
                    </div>
                    <div className="edit-profile-photo">
                        <img width={200} height={200} alt='profilephoto' src={file} />
                        <input onChange={(e) => handleSelectImage(e)} ref={fileRef} type="file" accept='image/png,image/jpeg,image/jpg' />
                    </div>
                    <div className="edit-profile-password">
                        {containTexts.CHANGE_PASSWORD}
                        <TextField className='edit-profile-input-email' fullWidth label={containTexts.REPEAT_PASSWORD} type="password" variant="outlined" color='secondary' />
                        <TextField className='edit-profile-input-email' fullWidth label={containTexts.PREVIOUS_PASSWORD} type="password" variant="outlined" color='secondary' />
                        <TextField className='edit-profile-input-email' fullWidth label={containTexts.PASSWORD} type="password" variant="outlined" color='secondary' />

                    </div>

                </form>
                <div className="edit-profile-button-container">
                    <button onClick={handleCancel} className='edit-profile-button'>{containTexts.CANCEL}</button>
                    <button onClick={handleSave} className='edit-profile-button'>{containTexts.SAVE}</button>
                </div>
            </div>
        )
    } else {
        return (
            <div className='edit-profile-container'>
                <div className="edit-profile-form2">

                    <div className="edit-profile-photo">
                        <img width={200} height={200} alt='profilephoto' src={file} />
                        <input onChange={(e) => handleSelectImage(e)} ref={fileRef} accept='image/png,image/jpeg,image/jpg' type="file" />
                    </div>

                    <div className="edit-profile-general-info2">
                        <TextField className='edit-profile-input-email' fullWidth required label={containTexts.FIRST_NAME} type="text" variant="outlined" color='secondary' />
                        <TextField className='edit-profile-input-email' fullWidth required label={containTexts.LAST_NAME} type="text" variant="outlined" color='secondary' />
                        <TextField className='edit-profile-input-email' fullWidth required label={containTexts.EMAIL} type="email" variant="outlined" color='secondary' />
                        <TextField className='edit-profile-input-email' fullWidth required label={containTexts.AGE} type="number" variant="outlined" color='secondary' />
                        <TextField className='edit-profile-input-email' fullWidth label={containTexts.HEIGHT} type="number" variant="outlined" color='secondary' />
                        <TextField className='edit-profile-input-email' fullWidth label={containTexts.WEIGHT} type="number" variant="outlined" color='secondary' />
                    </div>


                    <hr />

                    <div className="edit-profile-password2">
                        {containTexts.CHANGE_PASSWORD}
                        <TextField className='edit-profile-input-email' fullWidth label={containTexts.PREVIOUS_PASSWORD} type="password" variant="outlined" color='secondary' />
                        <TextField className='edit-profile-input-email' fullWidth label={containTexts.PASSWORD} type="password" variant="outlined" color='secondary' />
                        <TextField className='edit-profile-input-email' fullWidth label={containTexts.REPEAT_PASSWORD} type="password" variant="outlined" color='secondary' />

                    </div>
                    <hr />
                    <button onClick={handleSave} className='edit-profile-button'>{containTexts.SAVE}</button>
                    <button onClick={handleCancel} className='edit-profile-button'>{containTexts.CANCEL}</button>


                </div>


            </div>
        )
    }
}

export default EditProfile