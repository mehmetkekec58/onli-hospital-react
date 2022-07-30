import React from 'react'
import selectCharacterHelper from '../../helpers/selectCharacterHelper'
import DoctorModel from '../../models/doctorModel'
import "./DoctorCard.css"
import VerifiedOutlinedIcon from '@mui/icons-material/VerifiedOutlined';
interface Props {
  doctor: DoctorModel
}

const DoctorCard: React.FC<Props> = ({ doctor }: Props) => {

  return (
    <div className='doctor-card'>
      <img alt={doctor.firstName} className='doctor-card-profile-photo' src={doctor.profilePhotoUrl} />
      <h4 className='doctor-card-first-name-last-name'>{doctor.firstName} {doctor.lastName} <VerifiedOutlinedIcon style={{color:'#3fbdeb'}}/></h4>
      <div className='doctor-card-username'>@{doctor.username}</div>
      <div className='doctor-card-branch'>{doctor.branch}</div>
      <div className='doctor-card-about'>{selectCharacterHelper(doctor.about)}</div>
      <div className='doctor-card-operations-icons'>
        <div className='doctor-card-follow-button doctor-card-follow'>Takip Et</div>
      </div>

    </div>

  )
}

export default DoctorCard