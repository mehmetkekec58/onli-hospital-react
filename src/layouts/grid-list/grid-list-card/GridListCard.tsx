import React from 'react'
import ArticleModel from '../../../models/articleModel'
import ArticleCard from '../../card/article-card/ArticleCard'
import "./GridListCard.css"

interface Props{
    articles:ArticleModel[]
}

const GridListCard : React.FC<Props> = ({articles}:Props) => {
  return (
    <div className="grid-list-card-grid-container">
            {articles.map((article) => (
              <div key={article.articleId} className="grid-list-card-grid-item"> <ArticleCard article={article} /></div>
            ))}
          </div>
  )
}

export default GridListCard