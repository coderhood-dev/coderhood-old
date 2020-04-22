import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import Layout from "@components/Layout";

export default function BlogTemplate({
  content: markdownBody,
  data: frontmatter,
  post
}) {
  return (
    <Layout>
      <IconButton
        target="_blank"
        href={`https://github.com/coderhooddev/coderhood/blob/master/posts/${post}.md`}
      >
        <FontAwesomeIcon icon={faGithub} />
      </IconButton>
      <article>
        <Typography variant="h3" color="inherit">
          {frontmatter.title}
        </Typography>
        <div>
          <ReactMarkdown source={markdownBody} />
        </div>
      </article>
    </Layout>
  );
}

BlogTemplate.getInitialProps = async context => {
  // context contains the query param
  const { post } = context.query;
  // grab the file in the posts dir based on the slug
  const content = await import(`../../posts/${post}.md`);
  // gray-matter parses the yaml frontmatter from the md body
  const data = matter(content.default);
  return {
    ...data,
    post
  };
};
