import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Slide from '@material-ui/core/Slide';
import { makeStyles } from '@material-ui/core/styles';
import { grey } from '@material-ui/core/colors';

const useStyles = makeStyles(theme => ({
  slideContainer: {
    position: 'relative',
    left: -theme.spacing(1),
    top: theme.spacing(2),
    backgroundColor: grey[200],
    maxWidth: 500,
  },
}));

const RoadmapDetail = ({ data: { items }, detailIndex }) => {
  const styles = useStyles();
  const detailData = items[detailIndex] || {};

  return (
    <Slide
      direction="right"
      in={detailIndex !== null}
      timeout={500}
      className={styles.slideContainer}
      mountOnEnter
      unmountOnExit
    >
      <Paper elevation={0}>
        <Typography component="p">{detailData.description}</Typography>
      </Paper>
    </Slide>
  );
};

export default RoadmapDetail;
