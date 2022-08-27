import React from 'react'
import selectCharacterHelper from '../../../helpers/selectCharacterHelper'
import DoctorModel from '../../../models/doctorModel'
import "./DoctorCard.css"
import VerifiedOutlinedIcon from '@mui/icons-material/VerifiedOutlined';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { containUrls } from '../../../contains/containUrls';
interface Props {
  doctor: DoctorModel
}

const DoctorCard: React.FC<Props> = ({ doctor }: Props) => {
  const navigate = useNavigate();
  const handleGoDoctorProfile = (username: string) => {
    navigate(containUrls.PROFILE + "/" + username)
  }

  return (

    <div onClick={()=>handleGoDoctorProfile(doctor.username)} className='doctor-card'>
      <img alt={doctor.firstName} className='doctor-card-profile-photo' src={doctor.profilePhotoUrl} />
      <h4 className='doctor-card-first-name-last-name'>{doctor.firstName} {doctor.lastName} <VerifiedOutlinedIcon style={{ color: '#3fbdeb' }} /></h4>
      <div className='doctor-card-username'>@{doctor.username}</div>
      <div className='doctor-card-branch'>{doctor.branch}</div>
      <div className='doctor-card-about'>{selectCharacterHelper(doctor.about, 120)}</div>
      <div className='doctor-card-operations-icons'>
        <div className={doctor.id % 2 === 1 ? 'doctor-card-follow-button doctor-card-follow' : 'doctor-card-follow-button doctor-card-unfollow'}>{doctor.id % 2 === 1 ? "Takip et" : "Takibi bırak"}</div>
      </div>


    </div>
  )
}

export default DoctorCard