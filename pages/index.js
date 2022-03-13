import Head from "next/head";
import ArticleList from "../components/ArticleList";

const Home = ({ articles }) => {
  return (
    <div>
      <Head>
        <title>WebDev Newz</title>
      </Head>
      <ArticleList articles={articles} />
    </div>
  );
};

export default Home;

export const getStaticProps = async () => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=6`
  );
  const articles = await res.json();
  return {
    props: {
      articles,
    },
  };
};
