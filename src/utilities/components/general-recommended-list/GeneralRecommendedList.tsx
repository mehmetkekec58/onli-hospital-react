import React, { useState } from 'react'
import ArticleModel from '../../../models/articleModel';
import VideoModel from '../../../models/videoModel';
import "./GeneralRecommendedList.css";
import PlayCircleFilledWhiteOutlinedIcon from '@mui/icons-material/PlayCircleFilledWhiteOutlined';

interface Props {
    items: ArticleModel[] | VideoModel[]
}


const GeneralRecommendedList = ({ items }: Props) => {

    const [model] = useState<boolean>(items.length > 0 ? instanceOfVideoModel(items[0]) : false)

    function instanceOfVideoModel(item: any) {
        return "videoUrl" in (item as any)
    }

    return (
        <div className='general-recommended-list-container'>
            {items.map(item => (
                <div key={item.id} className="general-recommended-list-card">
                    <img alt={item.title} className="general-recommended-list-image" src={item.thumbnailUrl} />
                    {model && <div className="general-recommended-list-play-icon"><PlayCircleFilledWhiteOutlinedIcon fontSize='large' style={{color:'white'}}/></div>}
                    <div className="general-recommended-list-title-and-text-container">
                        <div className="general-recommended-list-title">{item.title}</div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default GeneralRecommendedList