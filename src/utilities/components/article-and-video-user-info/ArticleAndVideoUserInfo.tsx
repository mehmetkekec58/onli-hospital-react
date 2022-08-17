import React from 'react'
import { useNavigate } from 'react-router-dom';
import { containTexts } from '../../../contains/containTexts';
import UserInfoModel from '../../../models/userInfoModel';
import './ArticleAndVideoUserInfo.css';


interface Props {
    userInfo: UserInfoModel
}


const ArticleAndVideoUserInfo: React.FC<Props> = ({ userInfo }: Props) => {
    let navigate = useNavigate();
 //article-and-video-user-info-card-unfollow
    const handleGoProfilePage = () =>{
        navigate(`/profile/${userInfo.username}`)
    }
    return (
        <div className='article-and-video-user-info-container'>
    
            <img onClick={handleGoProfilePage} src={userInfo.profilePhotoUrl} alt={userInfo.firstName} className="article-and-video-user-info-image" />
            <div onClick={handleGoProfilePage} className="article-and-video-user-info-full-name-last-name-username-container">
                <div className="article-and-video-user-info-first-name-and-last-name">{userInfo.firstName} {userInfo.lastName}</div>
                <div className="article-and-video-user-info-username">@{userInfo.username}</div>
            </div>
            <div className="article-and-video-user-follower-count">102 Takipçi</div>
            <button className="article-and-video-user-info-follow-button ">{containTexts.FOLLOW}</button> 
        </div >

    )
}

export default ArticleAndVideoUserInfo