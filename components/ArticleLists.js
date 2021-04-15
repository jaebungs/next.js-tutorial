import ArticleItem from './ArticleItem';
import articleStyle from '../styles/Article.module.css';

const ArticleLists = ({ articles }) => {
    return (
        <div className={articleStyle.grid}>
            {articles.map(article => {
                return (
                        <ArticleItem key={article.id} article={article} />
                    )
                })
            }
        </div>
    )
}

export default ArticleLists

