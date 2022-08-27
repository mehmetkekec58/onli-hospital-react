import React from 'react'
import { useNavigate } from 'react-router-dom'
import { containUrls } from '../../../contains/containUrls'
import CategoryModel from '../../../models/categoryModel'
import "./CategoryCard.css"

interface Props{
  category:CategoryModel 
}

const CategoryCard:React.FC<Props> = ({category}:Props) => {
  const navigate = useNavigate()

  const handleGoCategoryPage = (id:number) =>{
    navigate(containUrls.CATEGORY+"/"+id)
  }
  return (
    <div onClick={() =>handleGoCategoryPage(category.id)} className='category-card'>
      <img alt={category.name} className='category-card-photo' src={category.thumbnailUrl} />
      <h4 className='category-card-name'>{category.name} </h4>
    </div>
  )
}

export default CategoryCard