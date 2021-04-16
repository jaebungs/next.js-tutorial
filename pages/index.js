import { server } from '../config/index';
import Head from 'next/head';
import ArticleLists from '../components/ArticleLists';

export default function Home({articles}) {

  return (
    <div>
      <Head>
        <title>J learning Next.js</title>
        <meta name="keywords" contents="first time next.js! excited!" />
      </Head>
      welcome to Next.js!
      <ArticleLists articles={articles} />

    </div>
  )
}

// Our own API with data.js
export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/articles`)
  
  const articles = await res.json();

  return {
    props: {
      articles
    }
  }
}


// External API
// export const getStaticProps = async () => {
//   const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=6');
//   const articles = await res.json();

//   return {
//     props: {
//       articles
//     }
//   }
// }