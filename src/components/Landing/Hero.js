import React from 'react';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import CL from 'components/ColumnLeft';
import Sky from 'react-sky';

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
          Code Garage es la plataforma open source que impulsa el aprendizaje colaborativo y
          continuo.
        </Typography>
      </ColumnLeft>
      <img
        src="/static/learning_together.png"
        alt="Learning Together"
        className={styles.heroImage}
      />
      <Sky
        images={{
          0: '/static/htmlIcon.png',
          1: '/static/cssIcon.png',
          2: '/static/jsIcon.jpg',
          3: '/static/sassIcon.png',
          4: '/static/reactIcon.svg',
          5: '/static/gitIcon.png',
          6: '/static/npmIcon.png',
          7: '/static/codeIcon.png',
          8: '/static/nodeIcon.png',
        }}
        how={40} /* Pass the number of images Sky will render chosing randomly */
        time={200} /* time of animation */
        size="40px" /* size of the rendered images */
        background="palettedvioletred" /* color of background */
      />
    </Container>
  );
};

export default Hero;
