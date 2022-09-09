import React, { useState } from 'react'
import VideoModel from '../../../models/videoModel'
import "./VideoCard.css"
import PlayCircleFilledWhiteOutlinedIcon from '@mui/icons-material/PlayCircleFilledWhiteOutlined';
import CardUserInfo from '../../../utilities/components/card-user-info/CardUserInfo';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import PlaylistAddCheckIcon from '@mui/icons-material/PlaylistAddCheck';
import { Link } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import { constantsText } from '../../../constants/constantsText';
import RequireAuthButton from '../../../utilities/Auth/RequireAuthButton';
interface Props {
    video: VideoModel
}

const VideoCard: React.FC<Props> = ({ video }: Props) => {

    const { enqueueSnackbar } = useSnackbar();
    const [addPlaylist, setAddPlaylist] = useState<boolean>(false)

    const handleAddPlaylist = () => {
        setAddPlaylist(!addPlaylist)
        enqueueSnackbar(addPlaylist ? constantsText.ADDED_TO_PLAYLIST : constantsText.REMOVED_FROM_PLAYLIST)
    }

    return (
        <div className='video-card'>
            <CardUserInfo userInfo={{ firstName: video.firstName, lastName: video.lastName, username: video.username, profilePhotoUrl: video.profilePhotoUrl }} />
            <Link style={{ textDecoration: 'none', color: 'black' }} to={`/video/${video.id}`}>   <img alt={video.title} className='video-card-thumbnail-image' src={video.thumbnailUrl} />
                <div className='video-card-play-icon'><PlayCircleFilledWhiteOutlinedIcon style={{ color: 'white', borderRadius: '100%', backgroundColor: 'rgba(0,0,0,0.6)', width: '100px', height: '100px' }} /></div>
                <h4 className='video-card-article-title'>{video.title}</h4>
            </Link>
            <div className='video-card-operations-icons'>
                <RequireAuthButton errorMessage={constantsText.YOU_MUST_BE_LOGGED_IN_TO_ADD_THE_VIDEO_TO_YOUR_PLAYLIST} onClick={handleAddPlaylist} className='video-card-playlist-icon'> {addPlaylist ? <PlaylistAddCheckIcon /> : <PlaylistAddIcon />}</RequireAuthButton>
            </div>
        </div>
    )
}

export default VideoCard