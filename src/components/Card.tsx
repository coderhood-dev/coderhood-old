import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import Card, { CardProps } from '@material-ui/core/Card';
import clsx from 'clsx';

interface ComponentProps {
  children: React.ReactNode;
}

type Props = CardProps & ComponentProps;

const useStyles = makeStyles((theme: Theme) => ({
  card: {
    minWidth: '25%',
    margin: theme.spacing(2),
  },
}));

const CardComponent: React.FC<Props> = ({ children, className }) => {
  const styles = useStyles({});
  const [raised, setRaised] = React.useState(false);
  const toogleRaised = () => {
    setRaised(!raised);
  };
  return (
    <Card
      className={clsx(styles.card, className)}
      onMouseEnter={toogleRaised}
      onMouseLeave={toogleRaised}
      elevation={raised ? 3 : 1}
    >
      {children}
    </Card>
  );
};

export default CardComponent;
