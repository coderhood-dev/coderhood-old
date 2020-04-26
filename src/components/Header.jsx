/* eslint-disable no-undef */
import React from 'react';
import Link from 'next/link';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import useDidScroll from '@hooks/useDidScroll';
import ThemeSwitcher from './ThemeSwitcher';

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
  const styles = useStyles({});
  const didScroll = useDidScroll();
  return (
    <div className={styles.container}>
      <Toolbar>
        <AppBar position="fixed" color="primary" elevation={didScroll ? 4 : 0}>
          <Toolbar>
            <Link href="/">
              <Typography variant="h6" color="inherit" className={styles.title}>
                {process.env.APP_NAME}
              </Typography>
            </Link>
            <ThemeSwitcher />
            <Link href="/blog">
              <Button color="inherit">Blog</Button>
            </Link>
            <Link href="/about">
              <Button color="inherit">Nosotros</Button>
            </Link>
          </Toolbar>
        </AppBar>
      </Toolbar>
    </div>
  );
};

export default Header;
