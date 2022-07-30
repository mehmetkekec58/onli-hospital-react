import React from 'react'
import ArticleModel from '../../models/articleModel'
import "./ArticleCard.css";
import selectCharacterHelper from '../../helpers/selectCharacterHelper'
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import BookmarkOutlinedIcon from '@mui/icons-material/BookmarkOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';
import VerifiedOutlinedIcon from '@mui/icons-material/VerifiedOutlined';

interface Props {
    article: ArticleModel
}
const ArticleCard: React.FC<Props> = ({ article }: Props) => {
    return (

        <div className='article-card'>
            <div className='article-card-user-info'>
                <img alt={article.firstName} className='article-card-user-info-avatar' src={article.profilePhotoUrl} />
                <div className='article-card-user-info-full-name-username'>
                    <div className='article-card-user-info-full-name'>{article.firstName} {article.lastName} <VerifiedOutlinedIcon style={{color:'#3fbdeb'}}/></div>
                    <div className='article-card-user-info-username'>@{article.username}</div>
                </div>
                <div className='article-card-user-info-date'>1 ay önce</div>
            </div>
            <img alt={article.title} className='article-card-thumbnail-image' src={article.thumbnailUrl} />
            <h4 className='article-card-article-title'>{article.title}</h4>
           <div className='article-card-article-text'>{selectCharacterHelper(article.text)}</div> 
           <div className='article-card-operations-icons'>
           <div style={{...(article.articleId % 2 === 0 && {color:'red'})}}> {article.articleId % 2 === 1 ?    <FavoriteBorderOutlinedIcon/>  :<FavoriteIcon/>}</div>
           <div style={{color:'#ab1bc4'}}>{article.articleId % 2 === 0 ? <BookmarkOutlinedIcon/>  :<BookmarkBorderOutlinedIcon/>}</div>
          
           <div className='article-card-read-more'>Devamını Oku</div>
           </div>
           
        </div>

    )
}

export default ArticleCard