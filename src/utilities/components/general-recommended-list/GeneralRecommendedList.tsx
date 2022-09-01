import React, { useState } from 'react'
import ArticleModel from '../../../models/articleModel';
import VideoModel from '../../../models/videoModel';
import "./GeneralRecommendedList.css";
import PlayCircleFilledWhiteOutlinedIcon from '@mui/icons-material/PlayCircleFilledWhiteOutlined';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { containUrls } from '../../../contains/containUrls';
import selectCharacterHelper from '../../../helpers/selectCharacterHelper';

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
                <Link to={`${model ? containUrls.VIDEO : containUrls.ARTICLE}/${item.id}`}>
                    <div key={item.id} className="general-recommended-list-card">
                        <img alt={item.title} className="general-recommended-list-image" src={item.thumbnailUrl} />
                        {model && <div className="general-recommended-list-play-icon"><PlayCircleFilledWhiteOutlinedIcon fontSize='large' style={{ color: 'white' }} /></div>}
                        <div className="general-recommended-list-title-and-text-container">
                            <div className="general-recommended-list-title">{selectCharacterHelper(item.title,60)}</div>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    )
}

export default GeneralRecommendedList