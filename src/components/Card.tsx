import React from 'react';
import Link from 'next/link';
import { makeStyles } from '@material-ui/core/styles';
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import {
  Card,
  CardActionArea,
  CardContent,
  Typography,
} from '@material-ui/core';

interface Props {
  title: string;
  description: string;
  href?: string;
  as?: string;
}

const useStyles = makeStyles((theme: Theme) => ({
  card: {
    width: '25%',
    margin: theme.spacing(2),
  },
}));

const CardComponent: React.FC<Props> = ({ title, description, href, as }) => {
  const styles = useStyles({});
  const [raised, setRaised] = React.useState(false);
  const toogleRaised = () => {
    setRaised(!raised);
  };
  return (
    <Card
      className={styles.card}
      onMouseEnter={toogleRaised}
      onMouseLeave={toogleRaised}
      raised={raised}
    >
      <CardActionArea>
        <Link href={href} as={as}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {description}
            </Typography>
          </CardContent>
        </Link>
      </CardActionArea>
    </Card>
  );
};

export default CardComponent;
