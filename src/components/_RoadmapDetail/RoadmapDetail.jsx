/* eslint-disable react/no-array-index-key */
import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import Box from '@material-ui/core/Box';
import ThumbUpIcon from '@material-ui/icons/ThumbUpAltOutlined';
import clsx from 'clsx';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  contentContainer: {
    position: 'relative',
    left: -theme.spacing(2),
    paddingLeft: theme.spacing(2),
    paddingBottom: theme.spacing(6),
    backgroundColor: theme.palette.primary.light,
    width: 500,
    height: '100%',
  },
  listItem: {
    margin: `${theme.spacing(1)}px 0`,
  },
  addButtonContainer: {
    position: 'absolute',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  addButton: {
    marginLeft: theme.spacing(2),
  },
}));

const RoadmapDetail = ({ data: { items }, detailIndex }) => {
  const styles = useStyles();
  const detailData = items[detailIndex] || {};

  const renderRecomendationList = () => {
    const { links } = detailData;
    const haveItems = links && links.length > 0;
    return haveItems ? (
      <List>
        {links.map((item, i) => (
          <ListItem key={i} role={undefined} dense button>
            <ListItemText primary="Este es un link" secondary={item} />
            <ListItemSecondaryAction>
              <IconButton
                className={clsx(styles.expand, {
                  [styles.expandOpen]: detailIndex === i,
                })}
                edge="end"
                aria-label="Comments"
                onClick={() => {}}
              >
                <ThumbUpIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    ) : (
      <Box
        mx="auto"
        height="100%"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Box
          component="img"
          src="/static/notFound.png"
          alt="No content"
          width="40%"
          mb={2}
          s
        />
        <Typography color="textSecondary" variant="subtitle1">
          Todavia no hay recomendaciones
        </Typography>
      </Box>
    );
  };

  return (
    <Paper className={styles.contentContainer} elevation={0}>
      <Box
        component={CardContent}
        display="flex"
        flexDirection="column"
        height="100%"
      >
        <Typography color="textSecondary" variant="overline" gutterBottom>
          Recursos útiles
        </Typography>
        {renderRecomendationList()}
        <div className={styles.addButtonContainer}>
          <Typography color="textSecondary" variant="overline">
            Agrega un enlace
          </Typography>
          <Fab color="primary" aria-label="Add" className={styles.addButton}>
            <AddIcon />
          </Fab>
        </div>
      </Box>
    </Paper>
  );
};

export default RoadmapDetail;
