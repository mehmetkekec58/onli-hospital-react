import React, { useState } from 'react'
import { constantsText } from '../../constants/constantsText';
import useWindowSize from '../../hooks/useWindowSize';
import VideoModel from '../../models/videoModel';
import ArticleAndVideoUserInfo from '../../utilities/components/article-and-video-user-info/ArticleAndVideoUserInfo';
import Tag from '../../utilities/components/tag/Tag';
import VideoPlayer from '../../utilities/components/video-player/VideoPlayer';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import PlaylistAddCheckIcon from '@mui/icons-material/PlaylistAddCheck';
import "./Video.css";
import GeneralRecommendedList from '../../utilities/components/general-recommended-list/GeneralRecommendedList';
import { useSelector } from 'react-redux';
import State from '../../store/state';
import { LikeModel } from '../../models/likeModel';
import { useSnackbar } from 'notistack';
import RequireAuthButton from '../../utilities/Auth/RequireAuthButton';
import Tooltip from '@mui/material/Tooltip/Tooltip';
import ReportProblemOutlinedIcon from '@mui/icons-material/ReportProblemOutlined';

const video: VideoModel = {
  id: 0,
  videoUrl: "http://static.videogular.com/assets/videos/videogular.mp4",
  thumbnailUrl: "https://im.haberturk.com/2019/02/05/ver1549345599/2341369_810x458.jpg",
  title: "Kanser Oluşumu",
  explanation: "Kanser hakkında detaylı animasyon video",
  date: new Date(2022, 8, 3),
  tags: ["kanser", "kanser oluşumu"],
  username: "mehmetkekec",
  firstName: "Mehmet",
  lastName: "Kekeç",
  profilePhotoUrl: "https://pbs.twimg.com/profile_images/1523976377074163713/hRUFPi6z_400x400.jpg",
}


const videos: VideoModel[] = [
  {
    id: 0,
    videoUrl: "http://static.videogular.com/assets/videos/videogular.mp4",
    thumbnailUrl: "https://im.haberturk.com/2019/02/05/ver1549345599/2341369_810x458.jpg",
    title: "Kanser Oluşumu",
    explanation: "Kanser hakkında detaylı animasyon video",
    date: new Date(2022, 8, 3),
    tags: ["kanser", "kanser oluşumu"],
    username: "mehmetkekec",
    firstName: "Mehmet",
    lastName: "Kekeç",
    profilePhotoUrl: "https://pbs.twimg.com/profile_images/1523976377074163713/hRUFPi6z_400x400.jpg",
  },
  {
    id: 2,
    videoUrl: "http://static.videogular.com/assets/videos/videogular.mp4",
    thumbnailUrl: "https://im.haberturk.com/2019/02/05/ver1549345599/2341369_810x458.jpg",
    title: "Kanser Oluşumu",
    explanation: "Kanser hakkında detaylı animasyon video",
    date: new Date(2022, 8, 3),
    tags: ["kanser", "kanser oluşumu"],
    username: "mehmetkekec",
    firstName: "Mehmet",
    lastName: "Kekeç",
    profilePhotoUrl: "https://pbs.twimg.com/profile_images/1523976377074163713/hRUFPi6z_400x400.jpg",
  },
  {
    id: 3,
    videoUrl: "http://static.videogular.com/assets/videos/videogular.mp4",
    thumbnailUrl: "https://im.haberturk.com/2019/02/05/ver1549345599/2341369_810x458.jpg",
    title: "Kanser Oluşumu nasıl olur? Detaylı bilgi ve ölmeden önce izlenmesi gereken video",
    explanation: "Kanser hakkında detaylı animasyon video",
    date: new Date(2022, 8, 3),
    tags: ["kanser", "kanser oluşumu"],
    username: "mehmetkekec",
    firstName: "Mehmet",
    lastName: "Kekeç",
    profilePhotoUrl: "https://pbs.twimg.com/profile_images/1523976377074163713/hRUFPi6z_400x400.jpg",
  },
  {
    id: 4,
    videoUrl: "http://static.videogular.com/assets/videos/videogular.mp4",
    thumbnailUrl: "https://im.haberturk.com/2019/02/05/ver1549345599/2341369_810x458.jpg",
    title: "Kanser Oluşumu nasıl olur? Detaylı bilgi ve ölmeden önce izlenmesi gereken video",
    explanation: "Kanser hakkında detaylı animasyon video",
    date: new Date(2022, 8, 3),
    tags: ["kanser", "kanser oluşumu"],
    username: "mehmetkekec",
    firstName: "Mehmet",
    lastName: "Kekeç",
    profilePhotoUrl: "https://pbs.twimg.com/profile_images/1523976377074163713/hRUFPi6z_400x400.jpg",
  },
  {
    id: 5,
    videoUrl: "http://static.videogular.com/assets/videos/videogular.mp4",
    thumbnailUrl: "https://im.haberturk.com/2019/02/05/ver1549345599/2341369_810x458.jpg",
    title: "Kanser Oluşumu nasıl olur? Detaylı bilgi ve ölmeden önce izlenmesi gereken video",
    explanation: "Kanser hakkında detaylı animasyon video",
    date: new Date(2022, 8, 3),
    tags: ["kanser", "kanser oluşumu"],
    username: "mehmetkekec",
    firstName: "Mehmet",
    lastName: "Kekeç",
    profilePhotoUrl: "https://pbs.twimg.com/profile_images/1523976377074163713/hRUFPi6z_400x400.jpg",
  },
  {
    id: 6,
    videoUrl: "http://static.videogular.com/assets/videos/videogular.mp4",
    thumbnailUrl: "https://im.haberturk.com/2019/02/05/ver1549345599/2341369_810x458.jpg",
    title: "Kanser Oluşumu nasıl olur? Detaylı bilgi ve ölmeden önce izlenmesi gereken video",
    explanation: "Kanser hakkında detaylı animasyon video",
    date: new Date(2022, 8, 3),
    tags: ["kanser", "kanser oluşumu"],
    username: "mehmetkekec",
    firstName: "Mehmet",
    lastName: "Kekeç",
    profilePhotoUrl: "https://pbs.twimg.com/profile_images/1523976377074163713/hRUFPi6z_400x400.jpg",
  },
  {
    id: 7,
    videoUrl: "http://static.videogular.com/assets/videos/videogular.mp4",
    thumbnailUrl: "https://im.haberturk.com/2019/02/05/ver1549345599/2341369_810x458.jpg",
    title: "Kanser Oluşumu nasıl olur? Detaylı bilgi ve ölmeden önce izlenmesi gereken video",
    explanation: "Kanser hakkında detaylı animasyon video",
    date: new Date(2022, 8, 3),
    tags: ["kanser", "kanser oluşumu"],
    username: "mehmetkekec",
    firstName: "Mehmet",
    lastName: "Kekeç",
    profilePhotoUrl: "https://pbs.twimg.com/profile_images/1523976377074163713/hRUFPi6z_400x400.jpg",
  },
  {
    id: 8,
    videoUrl: "http://static.videogular.com/assets/videos/videogular.mp4",
    thumbnailUrl: "https://im.haberturk.com/2019/02/05/ver1549345599/2341369_810x458.jpg",
    title: "Kanser Oluşumu nasıl olur? Detaylı bilgi ve ölmeden önce izlenmesi gereken video",
    explanation: "Kanser hakkında detaylı animasyon video",
    date: new Date(2022, 8, 3),
    tags: ["kanser", "kanser oluşumu"],
    username: "mehmetkekec",
    firstName: "Mehmet",
    lastName: "Kekeç",
    profilePhotoUrl: "https://pbs.twimg.com/profile_images/1523976377074163713/hRUFPi6z_400x400.jpg",
  },
  {
    id: 9,
    videoUrl: "http://static.videogular.com/assets/videos/videogular.mp4",
    thumbnailUrl: "https://im.haberturk.com/2019/02/05/ver1549345599/2341369_810x458.jpg",
    title: "Kanser Oluşumu nasıl olur? Detaylı bilgi ve ölmeden önce izlenmesi gereken video",
    explanation: "Kanser hakkında detaylı animasyon video",
    date: new Date(2022, 8, 3),
    tags: ["kanser", "kanser oluşumu"],
    username: "mehmetkekec",
    firstName: "Mehmet",
    lastName: "Kekeç",
    profilePhotoUrl: "https://pbs.twimg.com/profile_images/1523976377074163713/hRUFPi6z_400x400.jpg",
  },
]

const Video = () => {
  const openDrawer = useSelector((state: State) => state.openDrawer.openDrawer)
  const [like, setLike] = useState<LikeModel>({ numberOfLikes: 250, like: false })
  const [addPlaylist, setAddPlaylist] = useState<boolean>(false)


  const { enqueueSnackbar } = useSnackbar();

  const handleAddPlaylist = () => {
    setAddPlaylist(!addPlaylist)
    enqueueSnackbar(addPlaylist ? constantsText.REMOVED_FROM_PLAYLIST : constantsText.ADDED_TO_PLAYLIST)
  }

  const handleLike = () => {
    setLike({ numberOfLikes: like.like ? like.numberOfLikes - 1 : like.numberOfLikes + 1, like: !like.like })
  }

  const { width } = useWindowSize();

  function videoGridContainer(): string {
    return openDrawer ? "video-grid-container2" : "video-grid-container";
  }

  function smallSizeScreen(): string {
    return (width && width <= 606) ? "video-no-grid-container" : videoGridContainer();
  }

  return (
    <div>
      <div className='video-container'>
        <div className={smallSizeScreen()}>
          <div className="video-grid-item1">
            <h1 className="video-title">{video.title}</h1>
            <div className="video-user-info"><ArticleAndVideoUserInfo userInfo={{ username: video.username, firstName: video.firstName, lastName: video.lastName, profilePhotoUrl: video.profilePhotoUrl }} /></div>
            <VideoPlayer video={videos[0]} />
            <div className="video-text-container"> <div className="video-text">{video.explanation}</div></div>
            <div className='video-tags-general-container'><Tag tags={video.tags} /></div>
            {width && width <= 1283 && width > 606 && <GeneralRecommendedList items={videos} />}
          </div>
          {width !== undefined && width >= 1283 && <div className="video-grid-item2"><GeneralRecommendedList items={videos} /></div>}
          <div className="video-buttons-container">
            <RequireAuthButton title={constantsText.LIKE} errorMessage={constantsText.YOU_MUST_BE_LOGGED_IN_TO_LIKE_VIDEOS} onClick={handleLike} className='video-like-button video-general-button'>{like.like ? <FavoriteIcon style={{ color: 'red' }} /> : <FavoriteBorderOutlinedIcon />} {like.numberOfLikes}</RequireAuthButton>
            <RequireAuthButton title={constantsText.PLAYLIST} errorMessage={constantsText.YOU_MUST_BE_LOGGED_IN_TO_ADD_THE_VIDEO_TO_YOUR_PLAYLIST} onClick={handleAddPlaylist} className='video-general-button'>{addPlaylist ? (<PlaylistAddCheckIcon />) : <PlaylistAddIcon />} </RequireAuthButton>
            <Tooltip title={constantsText.SHARE} placement="right">
            <button className='video-general-button'><ShareOutlinedIcon style={{ color: 'blue' }} /></button>
            </Tooltip>
            <Tooltip title={constantsText.REPORT} placement="right">
            <button className='video-general-button'><ReportProblemOutlinedIcon style={{ color: 'brown' }} /></button>
            </Tooltip>
          </div>
          {(width !== undefined && width <= 606) && <GeneralRecommendedList items={videos} />}
        </div>
      </div>
    </div>
  )
}

export default Video