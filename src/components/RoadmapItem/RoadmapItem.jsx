import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import RoadmapCard from '@components/RoadmapCard';
import RoadmapDetail from '@components/RoadmapItem';
import { motion, AnimatePresence } from 'framer-motion';

const useStyles = makeStyles((theme) => ({
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
  progressDivider: (props) => ({
    width: theme.spacing(0.5),
    height: theme.spacing(4),
    position: 'relative',
    right: theme.spacing(15),
    backgroundColor: props.complete
      ? theme.palette.secondary.main
      : theme.palette.primary.main,
  }),
}));

const RoadmapItem = ({ data }) => {
  const [detailIndex, setDetailIndex] = useState(null);
  const [progress, setProgress] = useState(0);

  const handlePressDetail = (i) => {
    setDetailIndex(detailIndex !== i ? i : null);
  };
  const handleProgressUpdate = (newProgress) => setProgress(newProgress);

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
        {detailIndex !== null && (
          <AnimatePresence>
            <motion.div
              initial={{ x: -300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -300, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
              <RoadmapDetail detailIndex={detailIndex} data={data} />
            </motion.div>
          </AnimatePresence>
        )}
      </div>
      <div className={styles.progressDivider} />
    </div>
  );
};

export default RoadmapItem;
