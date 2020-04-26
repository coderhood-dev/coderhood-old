import React from 'react';
import Typography from '@material-ui/core/Typography';
import ColumnLeft from '@components/ColumnLeft';
import { makeStyles } from '@material-ui/core/styles';
import SocialIcons from './SocialIcons';

const useStyles = makeStyles((theme) => ({
  footerContainer: {
    width: '100%',
    padding: '40px 80px',
    backgroundColor: theme.palette.primary.main,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
}));

const Footer = () => {
  const styles = useStyles();
  return (
    <div className={styles.footerContainer}>
      <ColumnLeft>
        <Typography variant="body2" color="inherit">
          {`${process.env.APP_NAME} ${new Date().getFullYear()}`}
        </Typography>
        <Typography variant="caption" color="inherit">
          {`Made with 🦄 by ${process.env.APP_NAME} Team`}
        </Typography>
      </ColumnLeft>
      <SocialIcons />
    </div>
  );
};

export default Footer;
