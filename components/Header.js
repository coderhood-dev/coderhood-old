import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  container: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
});

const Header = () => {
  const styles = useStyles();
  return (
    <div className={styles.container}>
      <AppBar position="static" color="default">
        <Toolbar>
          <Typography variant="h6" color="inherit" className={styles.title}>
            Code Garage Beta
          </Typography>
          <Button color="inherit">Ingresa</Button>
          <Button color="inherit">Registrate</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
