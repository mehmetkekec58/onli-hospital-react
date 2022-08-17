import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import selectCharacterHelper from '../../../helpers/selectCharacterHelper';
import UserInfoModel from '../../../models/userInfoModel';
import './CardUserInfo.css';

interface Props {
    userInfo?: UserInfoModel
    active?: boolean | undefined
}

const CardUserInfo: React.FC<Props> = ({ userInfo, active }: Props) => {
    let location = useLocation();
    let navigate = useNavigate()

    const handleGoProfilePage = () =>{
        navigate(`/profile/${userInfo?.username}`)
    }

    function isActive() {
        if (location.pathname.substring(0, 9) === "/profile/"){ 
            return false 
        } else {
            return true;
        }
    }
    return (
        active || isActive() ?
            <div  className='card-user-info'>
                <img onClick={handleGoProfilePage} alt={userInfo?.firstName} className='card-user-info-avatar' src={userInfo?.profilePhotoUrl} />
                <div  className='card-user-info-full-name-username'>
                    <div className='card-user-info-full-name'>{selectCharacterHelper(`${userInfo?.firstName} ${userInfo?.lastName}`, 13)} </div>
                    <div className='card-user-info-username'>@{userInfo?.username}</div>
                </div>
                <div className='card-user-info-date'>3 hafta önce</div>
            </div>
            :
            <div style={{ marginBottom:"30px"}}></div>
    )
}

export default CardUserInfo