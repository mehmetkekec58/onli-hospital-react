import React, { useState } from 'react'
import selectCharacterHelper from '../../../helpers/selectCharacterHelper'
import DoctorModel from '../../../models/doctorModel'
import "./DoctorCard.css"
import VerifiedOutlinedIcon from '@mui/icons-material/VerifiedOutlined';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { containUrls } from '../../../contains/containUrls';
import { containTexts } from '../../../contains/containTexts';
interface Props {
  doctor: DoctorModel
}

const DoctorCard: React.FC<Props> = ({ doctor }: Props) => {
  const navigate = useNavigate();
  const [follow, setFollow] = useState<boolean>(false)
  const handleFollow = () =>{
    setFollow(!follow)
  }
  const handleGoDoctorProfile = (username: string) => {
    navigate(containUrls.PROFILE + "/" + username)
  }

  return (

    <div className='doctor-card'>
      <div  onClick={()=>handleGoDoctorProfile(doctor.username)} className="doctor-card-general-div">
      <img alt={doctor.firstName} className='doctor-card-profile-photo' src={doctor.profilePhotoUrl} />
      <h4 className='doctor-card-first-name-last-name'>{doctor.firstName} {doctor.lastName} <VerifiedOutlinedIcon style={{ color: '#3fbdeb' }} /></h4>
      <div className='doctor-card-username'>@{doctor.username}</div>
      <div className='doctor-card-branch'>{doctor.branch}</div>
      <div className='doctor-card-about'>{selectCharacterHelper(doctor.about, 120)}</div>
      </div>
      <div className='doctor-card-operations-icons'>
        <button onClick={handleFollow} className={follow?'doctor-card-follow-button  doctor-card-unfollow' : 'doctor-card-follow-button doctor-card-follow' }>{follow ? containTexts.UNFOLLOW : containTexts.FOLLOW}</button>
      </div>


    </div>
  )
}

export default DoctorCard