import TextField from '@mui/material/TextField/TextField';
import React, { useRef, useState } from 'react'
import { constantsText } from '../../constants/constantsText';
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
        if (e.target.files && e.target.files[0]) {
            setFile(URL.createObjectURL(e.target.files[0]))
        }
    }
    function widthBiggerThan568() {
        return (width && width > 568) ? true : false;
    }

    if (widthBiggerThan568()) {
        return (
            <div className='edit-profile-container'>
                <form className={'edit-profile-form'}>
                    <div className="edit-profile-general-info">
                        <TextField fullWidth required label={constantsText.FIRST_NAME} type="text" variant="outlined" color='secondary' />
                        <TextField fullWidth required label={constantsText.LAST_NAME} type="text" variant="outlined" color='secondary' />
                        <TextField fullWidth required label={constantsText.EMAIL} type="email" variant="outlined" color='secondary' />
                        <TextField fullWidth required label={constantsText.AGE} type="number" variant="outlined" color='secondary' />
                        <TextField fullWidth label={constantsText.HEIGHT} type="number" variant="outlined" color='secondary' />
                        <TextField fullWidth label={constantsText.WEIGHT} type="number" variant="outlined" color='secondary' />
                    </div>
                    <div className="edit-profile-photo">
                        <img width={200} height={200} alt='profilephoto' src={file} />
                        <input onChange={(e) => handleSelectImage(e)} ref={fileRef} type="file" accept='image/png,image/jpeg,image/jpg' />
                    </div>
                    <div className="edit-profile-password">
                        {constantsText.CHANGE_PASSWORD}
                        <TextField fullWidth label={constantsText.REPEAT_PASSWORD} type="password" variant="outlined" color='secondary' />
                        <TextField fullWidth label={constantsText.PREVIOUS_PASSWORD} type="password" variant="outlined" color='secondary' />
                        <TextField fullWidth label={constantsText.PASSWORD} type="password" variant="outlined" color='secondary' />

                    </div>

                </form>
                <div className="edit-profile-button-container">
                    <button onClick={handleCancel} className='edit-profile-button'>{constantsText.CANCEL}</button>
                    <button onClick={handleSave} className='edit-profile-button'>{constantsText.SAVE}</button>
                </div>
            </div>
        )
    } else {
        return (
            <div className='edit-profile-container'>
                <form className="edit-profile-form2">

                    <div className="edit-profile-photo">
                        <img width={200} height={200} alt='profilephoto' src={file} />
                        <input onChange={(e) => handleSelectImage(e)} ref={fileRef} accept='image/png,image/jpeg,image/jpg' type="file" />
                    </div>

                    <div className="edit-profile-general-info2">
                        <TextField fullWidth required label={constantsText.FIRST_NAME} type="text" variant="outlined" color='secondary' />
                        <TextField fullWidth required label={constantsText.LAST_NAME} type="text" variant="outlined" color='secondary' />
                        <TextField fullWidth required label={constantsText.EMAIL} type="email" variant="outlined" color='secondary' />
                        <TextField fullWidth required label={constantsText.AGE} type="number" variant="outlined" color='secondary' />
                        <TextField fullWidth label={constantsText.HEIGHT} type="number" variant="outlined" color='secondary' />
                        <TextField fullWidth label={constantsText.WEIGHT} type="number" variant="outlined" color='secondary' />
                    </div>
                    <hr />
                    <div className="edit-profile-password2">
                        {constantsText.CHANGE_PASSWORD}
                        <TextField fullWidth label={constantsText.PREVIOUS_PASSWORD} type="password" variant="outlined" color='secondary' />
                        <TextField fullWidth label={constantsText.PASSWORD} type="password" variant="outlined" color='secondary' />
                        <TextField fullWidth label={constantsText.REPEAT_PASSWORD} type="password" variant="outlined" color='secondary' />

                    </div>
                    <hr />
                    <button onClick={handleSave} className='edit-profile-button'>{constantsText.SAVE}</button>
                    <button onClick={handleCancel} className='edit-profile-button'>{constantsText.CANCEL}</button>

                </form>


            </div>
        )
    }
}

export default EditProfile