import React, { useState } from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Collapse from '@material-ui/core/Collapse';
import Checkbox from '@material-ui/core/Checkbox';
import clsx from 'clsx';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import LinearProgress from '@material-ui/core/LinearProgress';
import styled from 'styled-components';

import useStyles from './styles';

const AvatarBackground = styled(Avatar)`
  background-color: ${props => props.background} !important;
`;

const RoadmapCard = ({ data, progress, onProgressUpdate, detailIndex, onPressDetail }) => {
  const { items } = data;

  const styles = useStyles();
  const [expanded, setExpanded] = useState(false);
  const [checked, setChecked] = useState([]);

  const handleExpandClick = () => {
    if (detailIndex !== null) {
      onPressDetail(null);
    }
    setExpanded(!expanded);
  };
  const handleDetailClick = i => {
    onPressDetail(i);
  };

  const handleToggle = i => () => {
    const currentIndex = checked.indexOf(i);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(i);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
    onProgressUpdate((newChecked.length * 100) / items.length);
  };
  return (
    <Card className={styles.card}>
      <CardHeader
        avatar={
          <AvatarBackground
            aria-label="Recipe"
            src={data.image}
            background={data.background}
            className={styles.avatar}
          >
            CG
          </AvatarBackground>
        }
        action={
          <IconButton
            className={clsx(styles.expand, {
              [styles.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="Show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        }
        title={data.title}
      />
      <Collapse in={expanded} timeout="auto" unmountOnExit style={{ flex: 1 }}>
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            HTML es un lenguaje de sintaxis y el esqueleto de cada web. Nos permitira definir la
            estructura de elementos de nuestra web.
          </Typography>
          <List className={styles.root}>
            {items.map((item, i) => {
              const labelId = `checkbox-list-label-${i}`;

              return (
                <ListItem
                  key={i}
                  role={undefined}
                  dense
                  button
                  onClick={handleToggle(i)}
                  selected={detailIndex === i}
                >
                  <ListItemIcon>
                    <Checkbox
                      edge="start"
                      checked={checked.indexOf(i) !== -1}
                      tabIndex={-1}
                      disableRipple
                      inputProps={{ 'aria-labelledby': labelId }}
                    />
                  </ListItemIcon>
                  <ListItemText id={labelId} primary={item.title} />
                  <ListItemSecondaryAction>
                    <IconButton
                      className={clsx(styles.expand, {
                        [styles.expandOpen]: detailIndex === i,
                      })}
                      edge="end"
                      aria-label="Comments"
                      onClick={() => handleDetailClick(i)}
                    >
                      <ChevronRightIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
              );
            })}
          </List>
        </CardContent>
      </Collapse>
      <LinearProgress
        color="secondary"
        variant="determinate"
        value={progress}
        className={styles.progress}
      />
    </Card>
  );
};

export default RoadmapCard;
