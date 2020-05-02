import React from 'react';
import fetch from 'isomorphic-unfetch';
import styled from 'styled-components';
import { GetStaticProps } from 'next';
import {
  Card,
  CardActionArea,
  CardContent,
  Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import { Layout, Flex } from '../src/components';

const useStyles = makeStyles((theme: Theme) => ({
  card: {
    width: '25%',
    margin: theme.spacing(2),
  },
}));

const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 50px 11%;
`;

const Home = ({ roadmaps }) => {
  const styles = useStyles({});
  return (
    <Layout>
      <Container>
        <Flex width="50%">
          <Typography variant="h1" color="inherit" gutterBottom>
            Todos pueden programar, aprendamos juntos.
          </Typography>
          <Typography variant="subtitle1" color="inherit">
            {`${process.env.APP_NAME} es la plataforma open source que impulsa el aprendizaje colaborativo y continuo.`}
          </Typography>
        </Flex>
      </Container>
      <Flex alignItems="flex-end" pr={16}>
        <Typography variant="h4" color="inherit">
          Elige un camino
        </Typography>
      </Flex>
      <Flex row center p={8}>
        {roadmaps &&
          roadmaps.map((roadmap) => (
            <Card key={roadmap._id} className={styles.card}>
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {roadmap.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {roadmap.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          ))}
      </Flex>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const url = `${process.env.BASE_URL}/roadmaps`;
  const res = await fetch(url);
  const { data } = await res.json();

  return {
    props: { roadmaps: data },
  };
};

export default Home;
