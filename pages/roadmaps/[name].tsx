import React from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import {
  getRoadmaps,
  getRoadmap,
  GetRoadmapResponse,
  Subject,
} from '../../src/api/roadmaps';
import { Layout, Card, Flex } from '../../src/components';

import clsx from 'clsx';
import {
  CardHeader,
  CardContent,
  CardActions,
  Collapse,
  Avatar,
  IconButton,
  colors,
  Typography,
  Container,
} from '@material-ui/core';
import {
  Favorite as FavoriteIcon,
  Share as ShareIcon,
  ExpandMore as ExpandMoreIcon,
} from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import AvatarGroup from '@material-ui/lab/AvatarGroup';

interface Props {
  roadmap: GetRoadmapResponse;
}

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: theme.spacing(80),
    marginBottom: theme.spacing(2),
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  subjectAvatar: {
    backgroundColor: theme.palette.primary.main,
  },
  peopleAvatar: {
    position: 'relative',
    left: -theme.spacing(1),
  },
}));

const Roadmap: React.FC<Props> = ({ roadmap }) => {
  const classes = useStyles({});
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <Layout>
      <Typography variant="h1" color="inherit" gutterBottom={true}>
        {roadmap.title}
      </Typography>
      <Typography variant="subtitle1" color="inherit" gutterBottom={true}>
        {roadmap.description}
      </Typography>
      <Container>
        <Flex direction="column" paddingY={4}>
          {roadmap.subjects.map((subject: Subject) => {
            return (
              <Card key={subject._id} className={classes.root}>
                <CardHeader
                  avatar={
                    <Avatar
                      className={classes.subjectAvatar}
                      src={subject.image_url}
                    >
                      {subject.title}
                    </Avatar>
                  }
                  title={subject.title}
                  titleTypographyProps={{
                    variant: 'overline',
                  }}
                />
                <CardContent>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {subject.description}
                  </Typography>
                  <Flex direction="row" pt={4}>
                    <AvatarGroup max={4}>
                      {[
                        { id: 0, name: 'A', color: colors.amber[500] },
                        { id: 1, name: 'E', color: colors.indigo[500] },
                        { id: 2, name: 'L', color: colors.pink[500] },
                      ].map((person, i) => (
                        <Avatar
                          key={person.id}
                        // style={{
                        //   position: 'relative',
                        //   left: -theme.spacing(i),
                        //   color: theme.palette.getContrastText(person.color),
                        //   backgroundColor: person.color,
                        // }}
                        >
                          {person.name}
                        </Avatar>
                      ))}
                    </AvatarGroup>
                  </Flex>
                </CardContent>
                <CardActions disableSpacing>
                  <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                  </IconButton>
                  <IconButton aria-label="share">
                    <ShareIcon />
                  </IconButton>
                  <IconButton
                    className={clsx(classes.expand, {
                      [classes.expandOpen]: expanded,
                    })}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                  >
                    <ExpandMoreIcon />
                  </IconButton>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                  <CardContent>
                    <Typography paragraph>Method:</Typography>
                    <Typography paragraph>
                      Heat 1/2 cup of the broth in a pot until simmering, add
                      saffron and set aside for 10 minutes.
                    </Typography>
                    <Typography>
                      Set aside off of the heat to let rest for 10 minutes, and
                      then serve.
                    </Typography>
                  </CardContent>
                </Collapse>
              </Card>
            );
          })}
        </Flex>
      </Container>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const roadmaps = await getRoadmaps();

  // Get the paths we want to pre-render based on roadmaps
  const paths = roadmaps.map((roadmap) => `/roadmaps/${roadmap.name}`);

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }: any) => {
  const roadmap = await getRoadmap(params.name);
  return {
    props: { roadmap },
  };
};

export default Roadmap;
