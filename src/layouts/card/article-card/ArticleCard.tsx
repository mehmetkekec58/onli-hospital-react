import React from 'react'
import ArticleModel from '../../../models/articleModel'
import "./ArticleCard.css";
import selectCharacterHelper from '../../../helpers/selectCharacterHelper'
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import BookmarkOutlinedIcon from '@mui/icons-material/BookmarkOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { containTexts } from "../../../contains/containTexts"
import CardUserInfo from '../../../utilities/components/card-user-info/CardUserInfo';
import { Link } from 'react-router-dom';

interface Props {
    article: ArticleModel
}
const ArticleCard: React.FC<Props> = ({ article }: Props) => {
    return (

        <div className='article-card'>
            <CardUserInfo userInfo={{ firstName: article.firstName, lastName: article.lastName, username: article.username, profilePhotoUrl: article.profilePhotoUrl }} />
            <Link style={{ textDecoration: 'none', color: 'black' }} to={`/article/${article.id}`}>
                <img alt={article.title} className='article-card-thumbnail-image' src={article.thumbnailUrl} />
                <h4 className='article-card-article-title'>{article.title}</h4>
                <div className='article-card-article-text'>{selectCharacterHelper(article.text, 120)}</div>
                </Link>
                <div className='article-card-operations-icons'>
                    <div className='article-card-button' style={{ ...(article.id % 2 === 0 && { color: 'red' }) }}> {article.id % 2 === 1 ? <FavoriteBorderOutlinedIcon /> : <FavoriteIcon />}</div>
                    <div className='article-card-button' style={{ color: '#ab1bc4' }}>{article.id % 2 === 0 ? <BookmarkOutlinedIcon /> : <BookmarkBorderOutlinedIcon />}</div>

                    <Link  to={`/article/${article.id}`}> <div  className='article-card-read-more'>{containTexts.READ_MORE}</div>  </Link>

                </div>
        

        </div>

    )
}

export default ArticleCard