import Head from "next/head";
import AllPosts from "../../components/posts/all-post";
import { getAllPosts } from "../../lib/posts-util";

export default function AllPostsPage(props) {
  return (
    <>
      <Head>
        <title>All my posts</title>
        <meta name="description" content="something" />
      </Head>
      <AllPosts posts={props.posts} />
    </>
  );
}

export function getStaticProps() {
  const allPosts = getAllPosts();
  return {
    props: {
      posts: allPosts,
    },
  };
}
