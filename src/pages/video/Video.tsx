import React from 'react'
import { containTexts } from '../../contains/containTexts';
import useWindowSize from '../../hooks/useWindowSize';
import VideoModel from '../../models/videoModel';
import ArticleAndVideoUserInfo from '../../utilities/components/article-and-video-user-info/ArticleAndVideoUserInfo';
import Tag from '../../utilities/components/tag/Tag';
import VideoPlayer from '../../utilities/components/video-player/VideoPlayer';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import BookmarkOutlinedIcon from '@mui/icons-material/BookmarkOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import PlaylistAddCheckIcon from '@mui/icons-material/PlaylistAddCheck';
import "./Video.css";
import GeneralRecommendedList from '../../utilities/components/general-recommended-list/GeneralRecommendedList';
import { useSelector } from 'react-redux';
import State from '../../store/state';

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
            <button className='video-like-button video-general-button'><FavoriteIcon style={{ color: 'red' }} /> {containTexts.LIKE}</button>
            <button className='video-general-button'><PlaylistAddIcon /> {containTexts.ADD_PLAYLIST}</button>
            <button className='video-general-button'><ShareOutlinedIcon style={{ color: 'blue' }} /> {containTexts.SHARE}</button>
          </div>
          {(width !== undefined && width <= 606) && <GeneralRecommendedList items={videos} />}
        </div>
      </div>
    </div>
  )
}

export default Video