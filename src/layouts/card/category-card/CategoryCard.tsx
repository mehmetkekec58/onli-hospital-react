import React from 'react'
import CategoryModel from '../../../models/categoryModel'
import "./CategoryCard.css"

interface Props{
  category:CategoryModel 
}

const CategoryCard:React.FC<Props> = ({category}:Props) => {
  return (
    <div className='category-card'>
      <img alt={category.categoryName} className='category-card-photo' src={category.categoryPhotoUrl} />
      <h4 className='category-card-name'>{category.categoryName} </h4>
    </div>
  )
}

export default CategoryCard