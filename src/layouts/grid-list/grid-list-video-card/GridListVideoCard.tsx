import React from 'react'
import VideoModel from '../../../models/videoModel';
import VideoCard from '../../card/video-card/VideoCard';
import './GridListVideoCard.css';

interface Props{
    videos : VideoModel[]
}

const GridListVideoCard:React.FC<Props> = ({videos}:Props) => {
  return (
    <div className="grid-list-video-card-grid-container">
    {videos.map((video,index) => (
      <div key={video.id} className="grid-list-video-card-grid-item"> <VideoCard video={video} /></div>
    ))}
  </div>
  )
}

export default GridListVideoCard