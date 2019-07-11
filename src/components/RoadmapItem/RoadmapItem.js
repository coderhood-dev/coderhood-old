import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import RoadmapCard from 'components/RoadmapCard';
import RoadmapDetail from 'components/RoadmapDetail';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  cardContainer: {
    display: 'flex',
    flexDirection: 'row',
    overflow: 'hidden',
    transition: 'all 0.3s ease-in-out',
    position: 'relative',
  },
  progressDivider: props => ({
    width: theme.spacing(0.5),
    height: theme.spacing(4),
    position: 'relative',
    right: theme.spacing(15),
    backgroundColor: props.complete ? theme.palette.secondary.main : theme.palette.primary.main,
  }),
}));

const RoadmapItem = ({ data }) => {
  const [detailIndex, setDetailIndex] = useState(false);
  const [progress, setProgress] = useState(0);

  const handlePressDetail = i => {
    setDetailIndex(detailIndex !== i ? i : null);
  };
  const handleProgressUpdate = newProgress => setProgress(newProgress);

  const styles = useStyles({ complete: progress === 100 });
  return (
    <div className={styles.container}>
      <div className={styles.cardContainer}>
        <RoadmapCard
          data={data}
          progress={progress}
          detailIndex={detailIndex}
          onPressDetail={handlePressDetail}
          onProgressUpdate={handleProgressUpdate}
        />
        <RoadmapDetail detailIndex={detailIndex} data={data} />
      </div>
      <div className={styles.progressDivider} />
    </div>
  );
};

export default RoadmapItem;
