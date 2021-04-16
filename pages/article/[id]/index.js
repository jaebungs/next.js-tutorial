import { server } from '../../../config/index';
import Link from 'next/link';
import { useRouter } from 'next/router';

const article = ({ article }) => {
    // const router = useRouter();
    // const { id } = router.query;

    return (
        <div>
            This is an article - {article.id}
            <h1>{article.title}</h1>
            <p>{article.body}</p>
            <br></br>
            <Link href='/'>Go back</Link>
        </div>
    )
}
// Each time we go into a page (article), getServerSideProps is fetching data.
// export const getServerSideProps = async (context) => {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`);
//     const article = await res.json();
//     console.log(article)
//     return {
//         props: {
//             article
//         }
//     }
// }

// getStaticProps and getStaticPath to generate dynamic pages and routes.
export const getStaticProps = async (context) => {
    // external server `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
    const res = await fetch(`${server}/api/articles/${context.params.id}`);
    const article = await res.json();
    return {
        props: {
            article
        }
    }
}
// `https://jsonplaceholder.typicode.com/posts`
export const getStaticPaths = async () => {
    const res = await fetch(`${server}/api/articles`);
    const articles = await res.json();

    const ids = articles.map(article => article.id);
    const paths = ids.map(id => ({ params: {id: id.toString()} }));

    return {
        paths,
        fallback: false
    }
}

export default article
