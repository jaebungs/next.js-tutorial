import articleStyle from '../styles/Article.module.css';

const ArticleLists = ({ articles }) => {
    return (
        <div className={articleStyle.grid}>
            {articles.map(article => {
                return (
                    <div className={articleStyle.card} key={article.id}>
                        <h3>{article.title}</h3>
                        <p>{article.body}</p>
                    </div>
                    )
                })
            }
        </div>
    )
}

export default ArticleLists

