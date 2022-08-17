import React from 'react'
import { containTexts } from '../../contains/containTexts';
import useWindowSize from '../../hooks/useWindowSize';
import VideoModel from '../../models/videoModel';
import ArticleAndVideoUserInfo from '../../utilities/components/article-and-video-user-info/ArticleAndVideoUserInfo';
import RecommendedArticle from '../../utilities/components/recommended-article/RecommendedArticle';
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

const video:VideoModel={
      videoId:0,
      videoUrl:"http://static.videogular.com/assets/videos/videogular.mp4",
      thumbnailUrl:"https://im.haberturk.com/2019/02/05/ver1549345599/2341369_810x458.jpg",
      title:"Kanser Oluşumu",
      explanation:"Kanser hakkında detaylı animasyon video",
      date:new Date(2022,8,3),
      tags:["kanser","kanser oluşumu"],
      username:"mehmetkekec",
      firstName:"Mehmet",
      lastName:"Kekeç",
      profilePhotoUrl:"https://pbs.twimg.com/profile_images/1523976377074163713/hRUFPi6z_400x400.jpg",
    }
    

const videos:VideoModel[]=[
    {
      videoId:0,
      videoUrl:"http://static.videogular.com/assets/videos/videogular.mp4",
      thumbnailUrl:"https://im.haberturk.com/2019/02/05/ver1549345599/2341369_810x458.jpg",
      title:"Kanser Oluşumu",
      explanation:"Kanser hakkında detaylı animasyon video",
      date:new Date(2022,8,3),
      tags:["kanser","kanser oluşumu"],
      username:"mehmetkekec",
      firstName:"Mehmet",
      lastName:"Kekeç",
      profilePhotoUrl:"https://pbs.twimg.com/profile_images/1523976377074163713/hRUFPi6z_400x400.jpg",
    },
    {
      videoId:2,
      videoUrl:"http://static.videogular.com/assets/videos/videogular.mp4",
      thumbnailUrl:"https://im.haberturk.com/2019/02/05/ver1549345599/2341369_810x458.jpg",
      title:"Kanser Oluşumu",
      explanation:"Kanser hakkında detaylı animasyon video",
      date:new Date(2022,8,3),
      tags:["kanser","kanser oluşumu"],
      username:"mehmetkekec",
      firstName:"Mehmet",
      lastName:"Kekeç",
      profilePhotoUrl:"https://pbs.twimg.com/profile_images/1523976377074163713/hRUFPi6z_400x400.jpg",
    },
    {
      videoId:3,
      videoUrl:"http://static.videogular.com/assets/videos/videogular.mp4",
      thumbnailUrl:"https://im.haberturk.com/2019/02/05/ver1549345599/2341369_810x458.jpg",
      title:"Kanser Oluşumu nasıl olur? Detaylı bilgi ve ölmeden önce izlenmesi gereken video",
      explanation:"Kanser hakkında detaylı animasyon video",
      date:new Date(2022,8,3),
      tags:["kanser","kanser oluşumu"],
      username:"mehmetkekec",
      firstName:"Mehmet",
      lastName:"Kekeç",
      profilePhotoUrl:"https://pbs.twimg.com/profile_images/1523976377074163713/hRUFPi6z_400x400.jpg",
    },
  ]

const Video = ({ openDrawer }: { openDrawer: boolean }) => {
    const {width} = useWindowSize();
  return (
    <div>
          <div className='article-container'>
            <div className={openDrawer ? "article-grid-container2" : "article-grid-container"}>
                <div className="article-grid-item1">
                    <h1 className="article-title">{video.title}</h1>
                    <div className="article-user-info"><ArticleAndVideoUserInfo userInfo={{ username: video.username, firstName: video.firstName, lastName: video.lastName, profilePhotoUrl: video.profilePhotoUrl }} /></div>
                    <VideoPlayer video={videos[0]} />
            
                    <div className="article-text-container"> <div className="article-text">{video.explanation}</div></div>
                    <div className='article-tags-general-container'><Tag tags={video.tags} /></div>
             
                </div>
                {width !==undefined && width >= 1283 && <div className="article-grid-item2">Önerilenler</div> }
                <div className="article-buttons-container">
                    <div className='article-like-button article-general-button'><FavoriteIcon style={{ color: 'red' }} /> {containTexts.LIKE}</div>
                    <div className='article-general-button'><PlaylistAddIcon /> {containTexts.ADD_PLAYLIST}</div>
                    <div className='article-general-button'><ShareOutlinedIcon style={{ color: 'blue' }} /> {containTexts.SHARE}</div>
                </div>
            </div>
        </div>
       
    </div>
  )
}

export default Video