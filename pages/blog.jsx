import React from 'react';
import Typography from '@material-ui/core/Typography';
import Link from 'next/link';
import matter from 'gray-matter';
import { Layout } from '../src/components';

const Blog = ({ posts }) => (
  <Layout>
    <Typography variant="h1" color="inherit">
      Blog
    </Typography>
    <section>
      {posts.map((post) => (
        <Link key={post.slug} href={{ pathname: `/blog/${post.slug}` }}>
          <h3>{post.data.title}</h3>
        </Link>
      ))}
    </section>
  </Layout>
);

Blog.getInitialProps = () => {
  // get all .md files from the src/posts dir
  const posts = ((ctx) => {
    // grab all the files matching this context
    const keys = ctx.keys();
    // grab the values from these files
    const values = keys.map(ctx);
    // go through each file
    const data = keys.map((key, index) => {
      // Create slug from filename
      const slug = key
        .replace(/^.*[\\\/]/, '')
        .split('.')
        .slice(0, -1)
        .join('.');
      // get the current file value
      const value = values[index];
      // Parse frontmatter & markdownbody for the current file
      // return the .md content & pretty slug
      return {
        ...matter(value.default),
        slug,
      };
    });
    // return all the posts
    return data;
  })(require.context('../posts', true, /\.md$/));

  return { posts };
};

export default Blog;
