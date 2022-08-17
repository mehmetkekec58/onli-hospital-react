import React from 'react'
import selectCharacterHelper from '../../../helpers/selectCharacterHelper';
import ArticleModel from '../../../models/articleModel';
import './RecommendedArticle.css';

interface Props {
    articles: ArticleModel[]
}

const RecommendedArticle = ({ articles }: Props) => {
    return (
        <div className='recommended-article-container'>
            {articles.map(article => (
                <div key={article.articleId} className="recommended-article-card">
                    <img alt={article.title} className="recommended-article-image" src={article.thumbnailUrl} />
                    <div className="recommended-article-title-and-text-container">
                        <div className="recommended-article-title">{article.title}</div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default RecommendedArticle