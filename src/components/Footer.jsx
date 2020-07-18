import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import SocialIcons from './SocialIcons';
import { Flex, ThemeSwitcher } from './';

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
      <Flex direction="column">
        <Typography variant="body2" color="textSecondary">
          {`${process.env.NEXT_PUBLIC_APP_NAME} ${new Date().getFullYear()}`}
        </Typography>
        <Typography variant="caption" color="textSecondary">
          {`Made with 🦄 by ${process.env.NEXT_PUBLIC_APP_NAME} Team`}
        </Typography>
      </Flex>
      <SocialIcons />
      <ThemeSwitcher />
    </div>
  );
};

export default Footer;
