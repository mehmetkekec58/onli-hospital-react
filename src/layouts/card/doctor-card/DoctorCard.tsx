import React, { useState } from 'react'
import selectCharacterHelper from '../../../helpers/selectCharacterHelper'
import DoctorModel from '../../../models/doctorModel'
import "./DoctorCard.css"
import VerifiedOutlinedIcon from '@mui/icons-material/VerifiedOutlined';
import { useNavigate } from 'react-router-dom';
import { constantsUrl } from '../../../constants/constantsUrl';
import { constantsText } from '../../../constants/constantsText';
import RequireAuthButton from '../../../utilities/Auth/RequireAuthButton';

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
    navigate(`${constantsUrl.PROFILE}/${username}`)
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
        <RequireAuthButton errorMessage={constantsText.YOU_MUST_BE_LOGGED_IN_TO_FOLLOW_DOCTORS} onClick={handleFollow} className={follow?'doctor-card-follow-button  doctor-card-unfollow' : 'doctor-card-follow-button doctor-card-follow' }>{follow ? constantsText.UNFOLLOW : constantsText.FOLLOW}</RequireAuthButton>
      </div>


    </div>
  )
}

export default DoctorCard