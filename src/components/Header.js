/* eslint-disable no-undef */
import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ThemeSwitcher from './ThemeSwitcher';
import SidePanel from './SidePanel/SidePanel'

const useStyles = makeStyles({
  container: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    fontWeight: 500,
  },
});

const Header = () => {
  const [elevated, setElevated] = useState(false);

  function handleScroll() {
    if (!elevated && window.scrollY > 0) {
      setElevated(true);
    } else if (elevated && window.scrollY === 0) {
      setElevated(false);
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });
  const styles = useStyles();
  return (
    <div className={styles.container}>
      <AppBar position="fixed" color="primary" elevation={elevated ? 4 : 0}>
        <Toolbar>
          <Typography variant="h6" color="inherit" className={styles.title}>
            CODERHOOD
          </Typography>
          <ThemeSwitcher />
          <SidePanel />
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
