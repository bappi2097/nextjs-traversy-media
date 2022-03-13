import Link from "next/link";
import { server } from "../../../config";
import Meta from "../../../components/Meta";

const Article = ({ article }) => {
  return (
    <>
      <Meta title={article.title} description={article.body} />
      <h1>{article.title}</h1>
      <p>{article.body}</p>
      <br />
      <Link href={"/"}>Go Back</Link>
    </>
  );
};

export const getStaticProps = async (context) => {
  const res = await fetch(`${server}/posts/${context.params.id}`);
  const article = await res.json();
  return {
    props: {
      article,
    },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch(`${server}/posts`);
  const articles = await res.json();
  const ids = articles.map((article) => article.id);
  const paths = ids.map((id) => ({
    params: {
      id: id.toString(),
    },
  }));
  return {
    paths,
    fallback: false,
  };
};

// export const getStaticProps = async (context) => {
//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
//   );
//   const article = await res.json();
//   return {
//     props: {
//       article,
//     },
//   };
// };

// export const getStaticPaths = async () => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
//   const articles = await res.json();
//   const ids = articles.map((article) => article.id);
//   const paths = ids.map((id) => ({
//     params: {
//       id: id.toString(),
//     },
//   }));
//   return {
//     paths,
//     fallback: false,
//   };
// };

export default Article;
