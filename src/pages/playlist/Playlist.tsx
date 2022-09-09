import React from 'react'
import { constantsText } from '../../constants/constantsText';
import GridListVideoCard from '../../layouts/grid-list/grid-list-video-card/GridListVideoCard';
import VideoModel from '../../models/videoModel';
import './Playlist.css';


const videos:VideoModel[]=[
    {
      id:0,
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
      id:2,
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
      id:3,
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

const Playlist = () => {
  return (
    <div className='playlist-container'>
             <div className="playlist-text">{constantsText.PLAYLIST}</div>
      <hr/>
    <GridListVideoCard videos={videos} />
    </div>
  )
}

export default Playlist