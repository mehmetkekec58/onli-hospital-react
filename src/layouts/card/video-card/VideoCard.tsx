import React from 'react'
import VideoModel from '../../../models/videoModel'
import "./VideoCard.css"
import PlayCircleFilledWhiteOutlinedIcon from '@mui/icons-material/PlayCircleFilledWhiteOutlined';
import selectCharacterHelper from '../../../helpers/selectCharacterHelper';

interface Props{
    video:VideoModel
}

const VideoCard:React.FC<Props> = ({video}:Props) => {
  return (
    <div className='video-card'>
            <div className='video-card-user-info'>
   
                <img alt={video.firstName} className='video-card-user-info-avatar' src={video.profilePhotoUrl} />
                <div className='video-card-user-info-full-name-username'>
                    <div className='video-card-user-info-full-name'>{selectCharacterHelper( `${video.firstName} ${video.lastName}`,13)}</div>
                    <div className='video-card-user-info-username'>@{video.username}</div>
                </div>
                <div className='video-card-user-info-date'>1 yıl önce</div>
            </div>

            <img alt={video.title} className='video-card-thumbnail-image' src={video.thumbnailUrl} />
            <div className='video-card-play-icon'><PlayCircleFilledWhiteOutlinedIcon style={{color:'white', width:'100px',height:'100px'}}/></div>
            <h4 className='video-card-article-title'>{video.title}</h4> 
        </div>
  )
}

export default VideoCard