import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';
import { Button, Icon } from '@chakra-ui/core';

import { Layout, Text } from '../../components';

export default function BlogTemplate({
  content: markdownBody,
  data: frontmatter,
  post,
}) {
  return (
    <Layout>
      <Button variantColor="teal" size="sm">
        <Icon name="search" />
      </Button>
      <article>
        <Text fontSize="3xl" color="inherit">
          {frontmatter.title}
        </Text>
        <div>
          <ReactMarkdown source={markdownBody} />
        </div>
      </article>
    </Layout>
  );
}

BlogTemplate.getInitialProps = async (context) => {
  // context contains the query param
  const { post } = context.query;
  // grab the file in the posts dir based on the slug
  const content = await import(`../../posts/${post}.md`);
  // gray-matter parses the yaml frontmatter from the md body
  const data = matter(content.default);
  return {
    ...data,
    post,
  };
};
