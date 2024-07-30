import PostsGrid from "../posts/posts-grid";
import classes from "./eatured-posts.module.css";

const FeaturedPost = (props) => {
  return (
    <section className={classes.latest}>
      <h2>Featured Posts</h2>
      <PostsGrid posts={props.posts} />
    </section>
  );
};

export default FeaturedPost;
