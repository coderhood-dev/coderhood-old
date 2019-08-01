import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { red, indigo, orange, yellow } from '@material-ui/core/colors';
import RoadmapItem from './RoadmapItem';

const Container = styled.div`
  height: auto;
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 50px 11%;
`;
const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const useStyles = makeStyles(theme => ({
  container: {
    backgroundColor: theme.palette.background.default,
  },
  basedOn: {
    marginRight: theme.spacing(2),
  },
  tabs: {
    marginBottom: theme.spacing(4),
  },
}));

const dataHTML = {
  title: 'HTML',
  image: '/static/htmlIcon.png',
  background: red[500],
  items: [
    {
      title: 'Learn the basics',
      description:
        'Learn the basics porque asd a sd adlkasjd asldjasd lad asdlakjda sdfsds sdf sdfsfs sdf',
    },
    {
      title: 'Write Semantic HTML',
      description:
        'Write Semantic HTML asd a sd adlkasjd asldjasd lad asdlakjda sdfsds sdf sdfsfs sdf',
    },
    {
      title: 'Basic SEO',
      description:
        'Basic SEO Write Semantic HTML asd a sd adlkasjd asldjasd lad asdlakjda sdfsds sdf sdfsfs sdf',
    },
    {
      title: 'Accesibility',
      description: 'Accesibility asd a sd adlkasjd asldjasd lad asdlakjda sdfsds sdf sdfsfs sdf',
    },
  ],
};

const dataCSS = {
  title: 'CSS',
  image: '/static/cssIcon.png',
  background: indigo[500],
  items: [
    {
      title: 'Learn the basics',
      description: ' asd a sd adlkasjd asldjasd lad asdlakjda sdfsds sdf sdfsfs sdf',
      links: [
        'https://material.io/design/components/cards.html#card-collections',
        'https://www.howtographql.com/basics/2-core-concepts/',
        'https://buttercms.com/docs/api-client/nextjs',
        'https://material.io/design/components/cards.html#card-collections',
        'https://www.howtographql.com/basics/2-core-concepts/',
        'https://buttercms.com/docs/api-client/nextjs',
      ],
    },
    {
      title: 'Learn the basics',
      description: ' asd a sd adlkasjd asldjasd lad asdlakjda sdfsds sdf sdfsfs sdf',
    },
    {
      title: 'Learn the basics',
      description: ' asd a sd adlkasjd asldjasd lad asdlakjda sdfsds sdf sdfsfs sdf',
    },
    {
      title: 'Learn the basics',
      description: ' asd a sd adlkasjd asldjasd lad asdlakjda sdfsds sdf sdfsfs sdf',
    },
  ],
};

const dataJS = {
  title: 'Basics of Javascript',
  image: '/static/jsIcon.jpg',
  background: orange[500],
  items: [
    {
      title: 'Learn the basics',
      description: ' asd a sd adlkasjd asldjasd lad asdlakjda sdfsds sdf sdfsfs sdf',
    },
    {
      title: 'Learn the basics',
      description: ' asd a sd adlkasjd asldjasd lad asdlakjda sdfsds sdf sdfsfs sdf',
    },
    {
      title: 'Learn the basics',
      description: ' asd a sd adlkasjd asldjasd lad asdlakjda sdfsds sdf sdfsfs sdf',
    },
    {
      title: 'Learn the basics',
      description: ' asd a sd adlkasjd asldjasd lad asdlakjda sdfsds sdf sdfsfs sdf',
    },
  ],
};

const dataPackageManagers = {
  title: 'Package Managers',
  image: '/static/npmIcon.png',
  background: red[500],
  items: [
    {
      title: 'Learn the basics',
      description: ' asd a sd adlkasjd asldjasd lad asdlakjda sdfsds sdf sdfsfs sdf',
    },
    {
      title: 'Learn the basics',
      description: ' asd a sd adlkasjd asldjasd lad asdlakjda sdfsds sdf sdfsfs sdf',
    },
    {
      title: 'Learn the basics',
      description: ' asd a sd adlkasjd asldjasd lad asdlakjda sdfsds sdf sdfsfs sdf',
    },
    {
      title: 'Learn the basics',
      description: ' asd a sd adlkasjd asldjasd lad asdlakjda sdfsds sdf sdfsfs sdf',
    },
  ],
};

const Roadmaps = () => {
  const styles = useStyles();
  const [roadmap, setRoadmap] = React.useState(0);
  function handleChangeRoadmap(event, value) {
    setRoadmap(value);
  }
  return (
    <Container className={styles.container}>
      <Typography variant="subtitle1" color="textPrimary" gutterBottom>
        Caminos disponibles
      </Typography>
      <Row>
        <Typography variant="overline" color="textPrimary" className={styles.basedOn}>
          Basados en el popular developer roadmap
        </Typography>
        <IconButton target="_blank" href="https://github.com/kamranahmedse/developer-roadmap">
          <FontAwesomeIcon icon={faGithub} />
        </IconButton>
      </Row>
      <Paper className={styles.tabs}>
        <Tabs
          value={roadmap}
          onChange={handleChangeRoadmap}
          indicatorColor="secondary"
          textColor="secondary"
          centered
        >
          <Tab label="Frontend" />
          <Tab label="Backend" />
          <Tab label="Devops" />
        </Tabs>
      </Paper>
      <RoadmapItem data={dataHTML} />
      <RoadmapItem data={dataCSS} />
      <RoadmapItem data={dataJS} />
      <RoadmapItem data={dataPackageManagers} />
    </Container>
  );
};

export default Roadmaps;
