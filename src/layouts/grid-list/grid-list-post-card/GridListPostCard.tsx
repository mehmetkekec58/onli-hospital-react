import React from 'react'
import postModel from '../../../models/postModel'
import PostCard from '../../card/post-card/PostCard'
interface Props{
    posts:postModel[]
}

const GridListPostCard:React.FC<Props> = ({posts}:Props) => {
  return (
    <div className="grid-list-card-grid-container">
    {posts.map((post) => (
      <div key={post.postId} className="grid-list-card-grid-item"> <PostCard post={post} /></div>
    ))}
  </div>
  )
}

export default GridListPostCard