import React from 'react'
import CategoryModel from '../../../models/categoryModel';
import CategoryCard from '../../card/category-card/CategoryCard';
import './GridListCategoryCard.css';

interface Props{
    categories:CategoryModel[]
}

const GridListCategoryCard:React.FC<Props> = ({categories}:Props) => {
  return (
    <div className="grid-list-category-card-grid-container">
            {categories.map((category,index) => (
              <div key={category.id} className="grid-list-category-card-grid-item"> <CategoryCard category={category} /></div>
            ))}
          </div>
  )
}

export default GridListCategoryCard