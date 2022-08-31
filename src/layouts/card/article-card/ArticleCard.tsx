import React, { useState } from 'react'
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
import { useSnackbar } from 'notistack';
import { LikeModel } from '../../../models/likeModel';
import { containUrls } from '../../../contains/containUrls';

interface Props {
    article: ArticleModel
}
const ArticleCard: React.FC<Props> = ({ article }: Props) => {

    const { enqueueSnackbar } = useSnackbar();
    const [addReadingList, setAddReadingList] = useState<boolean>(false)
    const [like, setLike] = useState<LikeModel>({numberOfLikes:250, like:false})

    const handleAddReadingList = () => {
        setAddReadingList(!addReadingList)
        enqueueSnackbar(addReadingList ? containTexts.REMOVED_FROM_READING_LIST : containTexts.ADDED_TO_READING_LIST)
    }

    const handleLike = () => {
        setLike({ numberOfLikes: like.like ? like.numberOfLikes - 1 : like.numberOfLikes + 1, like: !like.like })
    }

    return (
        <div className='article-card'>
            <CardUserInfo userInfo={{ firstName: article.firstName, lastName: article.lastName, username: article.username, profilePhotoUrl: article.profilePhotoUrl }} />
            <Link style={{ textDecoration: 'none', color: 'black' }} to={`/article/${article.id}`}>
                <img alt={article.title} className='article-card-thumbnail-image' src={article.thumbnailUrl} />
                <h4 className='article-card-article-title'>{article.title}</h4>
                <div className='article-card-article-text'>{selectCharacterHelper(article.text, 120)}</div>
            </Link>
            <div className='article-card-operations-icons'>
                <button onClick={handleLike} className='article-card-button' style={{ ...(like.like  && { color: 'red' }) }}> {like.like? <FavoriteIcon /> : <FavoriteBorderOutlinedIcon />} {like.numberOfLikes}</button>
                <button onClick={handleAddReadingList} className='article-card-button' style={{ color: '#ab1bc4' }}>{addReadingList ? <BookmarkOutlinedIcon /> : <BookmarkBorderOutlinedIcon />}</button>
                <Link to={`${containUrls.ARTICLE}/${article.id}`}> <div className='article-card-read-more'>{containTexts.READ_MORE}</div>  </Link>
            </div>


        </div>

    )
}

export default ArticleCard