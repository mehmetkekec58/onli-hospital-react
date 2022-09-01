import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { containTexts } from '../../../contains/containTexts';
import { containUrls } from '../../../contains/containUrls';
import { numberRounder } from '../../../helpers/numberRounder';
import UserInfoModel from '../../../models/userInfoModel';
import './ArticleAndVideoUserInfo.css';


interface Props {
    userInfo: UserInfoModel
}

const ArticleAndVideoUserInfo: React.FC<Props> = ({ userInfo }: Props) => {
    let navigate = useNavigate();
    const [follower, setFollower] = useState<number>(142);
    const [follow, setFollow] = useState<boolean>(false);

    const handleFollowOrUnfollow = () => {
        setFollower(follow ? follower - 1 : follower + 1)
        setFollow(!follow)
    }
    const handleGoProfilePage = () => {
        navigate(`${containUrls.PROFILE}/${userInfo.username}`)
    }
    return (
        <div className='article-and-video-user-info-container'>

            <img onClick={handleGoProfilePage} src={userInfo.profilePhotoUrl} alt={userInfo.firstName} className="article-and-video-user-info-image" />
            <div onClick={handleGoProfilePage} className="article-and-video-user-info-full-name-last-name-username-container">
                <div className="article-and-video-user-info-first-name-and-last-name">{userInfo.firstName} {userInfo.lastName}</div>
                <div className="article-and-video-user-info-username">@{userInfo.username}</div>
            </div>
            <div className="article-and-video-user-follower-count">{numberRounder(follower)} {containTexts.FOLLOWER}</div>
            <button onClick={handleFollowOrUnfollow} className={follow ? "article-and-video-user-info-follow-button article-and-video-user-info-card-unfollow" : "article-and-video-user-info-follow-button"}>{follow ? containTexts.UNFOLLOW : containTexts.FOLLOW}</button>
        </div>

    )
}

export default ArticleAndVideoUserInfo