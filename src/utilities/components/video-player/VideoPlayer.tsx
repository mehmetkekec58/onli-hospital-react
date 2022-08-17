import React, { useRef } from 'react'
import { containTexts } from '../../../contains/containTexts';
import videoModel from '../../../models/videoModel';
import "./VideoPlayer.css";

interface Props{
    video:videoModel
}
const VideoPlayer = ({video}:Props) => {
    const videoPlayer = useRef<HTMLVideoElement>(null);
  

    return (
        <div>
            <video className='video-player-video' ref={videoPlayer} poster={video.thumbnailUrl}  controlsList="nodownload" controls>
                <source src={video.videoUrl} type='video/mp4' />
                {containTexts.YOUR_BROWSER_DOES_NOT_SUPPORT_THE_VIDEO_TAG}
            </video>
        </div>
    )
}

export default VideoPlayer