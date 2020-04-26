import React from 'react';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import CL from '@components/ColumnLeft';

const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 50px 11%;
`;
const ColumnLeft = styled(CL)`
  width: 50%;
`;

const useStyles = makeStyles({
  heroImage: {
    width: 'auto',
    height: '80%',
  },
});

const Hero = () => {
  const styles = useStyles();
  return (
    <Container>
      <ColumnLeft>
        <Typography variant="h1" color="inherit" gutterBottom>
          Todos pueden programar, aprendamos juntos.
        </Typography>
        <Typography variant="subtitle1" color="inherit">
          {`${process.env.APP_NAME} es la plataforma open source que impulsa el aprendizaje colaborativo y continuo.`}
        </Typography>
      </ColumnLeft>
      <img
        src="/static/learning_together.png"
        alt="Learning Together"
        className={styles.heroImage}
      />
    </Container>
  );
};

export default Hero;
