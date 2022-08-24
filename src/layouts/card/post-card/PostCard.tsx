import React from 'react'
import selectCharacterHelper from '../../../helpers/selectCharacterHelper'
import PostModel from '../../../models/postModel'
import "./PostCard.css"
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CardUserInfo from '../../../utilities/components/card-user-info/CardUserInfo';
interface Props {
  post: PostModel
}
const PostCard: React.FC<Props> = ({ post }: Props) => {
  return (
    <div className='post-card'>
      <CardUserInfo userInfo={{ firstName: post.firstName, lastName: post.lastName, username: post.username, profilePhotoUrl: post.profilePhotoUrl }} />
      <img alt={post.text} className='post-card-thumbnail-image' src={post.thumbnailUrl} />
      <div className='post-card-post-text'>{selectCharacterHelper(post.text, 120)}</div>
      <div className='post-card-operations-icons'>
        <div style={{ ...(post.id % 2 === 0 && { color: 'red' }) }}> {post.id % 2 === 1 ? <FavoriteBorderOutlinedIcon /> : <FavoriteIcon />}</div>



      </div>

    </div>
  )
}

export default PostCard