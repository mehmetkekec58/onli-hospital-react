import React from 'react'
import selectCharacterHelper from '../../../helpers/selectCharacterHelper'
import DoctorModel from '../../../models/doctorModel'
import "./DoctorCard.css"
import VerifiedOutlinedIcon from '@mui/icons-material/VerifiedOutlined';
import { Link } from 'react-router-dom';
interface Props {
  doctor: DoctorModel
}

const DoctorCard: React.FC<Props> = ({ doctor }: Props) => {

  return (
    <Link style={{textDecoration:'none',color:'black'}} to={`profile/${doctor.username}`}>
    <div className='doctor-card'>
      <img alt={doctor.firstName} className='doctor-card-profile-photo' src={doctor.profilePhotoUrl} />
      <h4 className='doctor-card-first-name-last-name'>{doctor.firstName} {doctor.lastName} <VerifiedOutlinedIcon style={{color:'#3fbdeb'}}/></h4>
      <div className='doctor-card-username'>@{doctor.username}</div>
      <div className='doctor-card-branch'>{doctor.branch}</div>
      <div className='doctor-card-about'>{selectCharacterHelper(doctor.about,120)}</div>
      <div className='doctor-card-operations-icons'>
        <div className={doctor.id % 2 ===1 ? 'doctor-card-follow-button doctor-card-follow': 'doctor-card-follow-button doctor-card-unfollow'}>{doctor.id % 2 ===1 ? "Takip et" : "Takibi bırak"}</div>
      </div>
     

    </div>
    </Link>
  )
}

export default DoctorCard