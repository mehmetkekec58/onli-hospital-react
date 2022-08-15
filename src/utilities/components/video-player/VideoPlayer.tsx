import React, { useRef } from 'react'
import { containTexts } from '../../../contains/containTexts';
import "./VideoPlayer.css";


const VideoPlayer = () => {
    const videoPlayer = useRef<HTMLVideoElement>(null);
    const handle = () => {
        console.log("first")
    }

    return (
        <div>
            <video className='video-player-video' ref={videoPlayer} about="hello"  controlsList="nodownload" controls>
                <source src='http://media.w3.org/2010/05/sintel/trailer.mp4' type='video/mp4' />
                {containTexts.yourBrowserDoesNotSupportTheVideoTag}
            </video>
            <button onClick={handle}>Bas</button>
        </div>
    )
}

export default VideoPlayer