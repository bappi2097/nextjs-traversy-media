import { server } from "../config";
import ArticleList from "../components/ArticleList";
const Home = ({ articles }) => {
  return (
    <div>
      <ArticleList articles={articles} />
    </div>
  );
};

export const getStaticProps = async () => {
  const res = await fetch(server + `/posts`);
  const articles = await res.json();
  return {
    props: {
      articles,
    },
  };
};

export default Home;

// export const getStaticProps = async () => {
//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/posts?_limit=6`
//   );
//   const articles = await res.json();
//   return {
//     props: {
//       articles,
//     },
//   };
// };
