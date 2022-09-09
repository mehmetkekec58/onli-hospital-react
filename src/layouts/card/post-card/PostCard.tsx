import React, { useState } from 'react'
import selectCharacterHelper from '../../../helpers/selectCharacterHelper'
import PostModel from '../../../models/postModel'
import "./PostCard.css"
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CardUserInfo from '../../../utilities/components/card-user-info/CardUserInfo';
import { LikeModel } from '../../../models/likeModel';
import RequireAuthButton from '../../../utilities/Auth/RequireAuthButton';
import { numberRounder } from '../../../helpers/numberRounder';
import { constantsText } from '../../../constants/constantsText';
interface Props {
  post: PostModel
}
const PostCard: React.FC<Props> = ({ post }: Props) => {

  const [like, setLike] = useState<LikeModel>({ numberOfLikes: 450, like: false })
  
  const handleLike = () => {
    setLike({ numberOfLikes: like.like ? like.numberOfLikes - 1 : like.numberOfLikes + 1, like: !like.like })
}

  return (
    <div className='post-card'>
      <CardUserInfo userInfo={{ firstName: post.firstName, lastName: post.lastName, username: post.username, profilePhotoUrl: post.profilePhotoUrl }} />
      <img alt={post.text} className='post-card-thumbnail-image' src={post.thumbnailUrl} />
      <div className='post-card-post-text'>{selectCharacterHelper(post.text, 120)}</div>
      <div className='post-card-operations-icons'>
        <RequireAuthButton errorMessage={constantsText.YOU_MUST_BE_LOGGED_IN_TO_LIKE_POSTS} onClick={handleLike} > {like.like ? <FavoriteIcon style={{ color: 'red' }} /> : <FavoriteBorderOutlinedIcon />} {numberRounder(like.numberOfLikes)}</RequireAuthButton>
      </div>

    </div>
  )
}

export default PostCard