import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import Typography from "@material-ui/core/Typography";
import Layout from "@components/Layout";

export default function BlogTemplate(props) {
  // data from getInitialProps
  const markdownBody = props.content;
  const frontmatter = props.data;
  return (
    <Layout>
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
    ...data
  };
};
