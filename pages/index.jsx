import React, { useEffect } from 'react';
import fetch from 'isomorphic-unfetch';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import Layout from '@components/Layout';
import Hero from '@components/Landing/Hero';

const Home = ({ roadmaps }) => {
  return (
    <Layout>
      <Hero />
      {roadmaps &&
        roadmaps.map((roadmap) => (
          <Card>
            <CardHeader title={roadmap.name} />
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                {roadmap.description}
              </Typography>
            </CardContent>
          </Card>
        ))}
    </Layout>
  );
};

export async function getStaticProps() {
  const url = `${process.env.BASE_URL}/roadmaps`;
  const res = await fetch(url);
  const { data } = await res.json();

  return {
    props: { roadmaps: data },
  };
}

export default Home;
