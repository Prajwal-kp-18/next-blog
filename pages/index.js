import { Fragment } from 'react';
import Hero from '../components/home-page/hero';
import FeaturedPost from '../components/home-page/featured-posts';
import { getFeaturedPosts } from '../lib/posts-util';
import Head from 'next/head';

export default function HomePage(props) {
  return (
    <Fragment>
      <Head>
        <title>WebDevChronicles</title>
        <meta
          name="description"
          content="I post about programming and web development"
        />
      </Head>
      <Hero />
      <FeaturedPost posts={props.posts} />
    </Fragment>
  );
}

export function getStaticProps() {
  const featuredPost = getFeaturedPosts();

  return {
    props: {
      posts: featuredPost,
    },
  };
}
