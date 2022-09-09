import React, { useState } from 'react'
import ArticleModel from '../../../models/articleModel'
import "./ArticleCard.css";
import selectCharacterHelper from '../../../helpers/selectCharacterHelper'
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import BookmarkOutlinedIcon from '@mui/icons-material/BookmarkOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { constantsText } from "../../../constants/constantsText"
import CardUserInfo from '../../../utilities/components/card-user-info/CardUserInfo';
import { Link } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import { LikeModel } from '../../../models/likeModel';
import { constantsUrl } from '../../../constants/constantsUrl';
import { numberRounder } from '../../../helpers/numberRounder';
import RequireAuthButton from '../../../utilities/Auth/RequireAuthButton';

interface Props {
    article: ArticleModel
}
const ArticleCard: React.FC<Props> = ({ article }: Props) => {

    const { enqueueSnackbar } = useSnackbar();
    const [addReadingList, setAddReadingList] = useState<boolean>(false)
    const [like, setLike] = useState<LikeModel>({ numberOfLikes: 999, like: false })

    const handleAddReadingList = () => {
        setAddReadingList(!addReadingList)
        enqueueSnackbar(addReadingList ? constantsText.REMOVED_FROM_READING_LIST : constantsText.ADDED_TO_READING_LIST)
    }

    const handleLike = () => {
        setLike({ numberOfLikes: like.like ? like.numberOfLikes - 1 : like.numberOfLikes + 1, like: !like.like })
    }

    return (
        <div className='article-card'>
            <CardUserInfo userInfo={{ firstName: article.firstName, lastName: article.lastName, username: article.username, profilePhotoUrl: article.profilePhotoUrl }} />
            <Link className='article-card-article-container' style={{ color: 'black' }} to={`${constantsUrl.ARTICLE}/${article.id}`}>
                <img alt={article.title} className='article-card-thumbnail-image' src={article.thumbnailUrl} />
                <h4 className='article-card-article-title'>{article.title}</h4>
                <div className='article-card-article-text'>{selectCharacterHelper(article.text, 120)}</div>
            </Link>
            <div className='article-card-operations-icons'>
                <RequireAuthButton errorMessage={constantsText.YOU_MUST_BE_LOGGED_IN_TO_LIKE_ARTICLES} onClick={handleLike} className='article-card-button'> {like.like ? <FavoriteIcon style={{ color: 'red' }} /> : <FavoriteBorderOutlinedIcon />} {numberRounder(like.numberOfLikes)}</RequireAuthButton>
                <RequireAuthButton errorMessage={constantsText.YOU_MUST_BE_LOGGED_IN_TO_ADD_ARTICLES_TO_READING_LIST} onClick={handleAddReadingList} className='article-card-button' >{addReadingList ? <BookmarkOutlinedIcon style={{ color: '#ab1bc4' }} /> : <BookmarkBorderOutlinedIcon style={{ color: '#ab1bc4' }} />}</RequireAuthButton>
                <Link to={`${constantsUrl.ARTICLE}/${article.id}`}> <div className='article-card-read-more'>{constantsText.READ_MORE}</div>  </Link>
            </div>
        </div>
    )
}

export default ArticleCard