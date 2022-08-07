import React from 'react'
import selectCharacterHelper from '../../../helpers/selectCharacterHelper'
import PostModel from '../../../models/postModel'
import "./PostCard.css"
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';
interface Props{
    post:PostModel
}
const PostCard:React.FC<Props> = ({post}:Props) => {
  return (
    <div className='post-card'>
    <div className='post-card-user-info'>
        <img alt={post.firstName} className='post-card-user-info-avatar' src={post.profilePhotoUrl} />
        <div className='post-card-user-info-full-name-username'>
            <div className='post-card-user-info-full-name'>{selectCharacterHelper( `${post.firstName} ${post.lastName}`,13)} </div>
            <div className='post-card-user-info-username'>@{post.username}</div>
        </div>
        <div className='post-card-user-info-date'>3 hafta önce</div>
    </div>
    <img alt={post.text} className='post-card-thumbnail-image' src={post.thumbnailUrl} />
   <div className='post-card-post-text'>{selectCharacterHelper(post.text,120)}</div> 
   <div className='post-card-operations-icons'>
   <div style={{...(post.postId % 2 === 0 && {color:'red'})}}> {post.postId % 2 === 1 ?    <FavoriteBorderOutlinedIcon/>  :<FavoriteIcon/>}</div>

  

   </div>
   
</div>
  )
}

export default PostCard