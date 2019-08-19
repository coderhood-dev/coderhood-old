import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import TextFields from './TextFields';
import MenuIcon from '@material-ui/icons/Menu';



const useStyles = makeStyles(theme => ({
    list: {
      width: 250,
    },
    fullList: {
      width: 'auto',
    },
    sidePanel: {
        width: 300,
    },
    iconButton: {
        padding: 10,
    },
    button: {
        margin: theme.spacing(1),
      },
    contentTitle: {
        textAlign: 'left',
    },
    content: {
        margin: theme.spacing(2),
        textAlign: 'center',
    },
  }));
  
  export default function SidePanel() {
    const classes = useStyles();
    const [state, setState] = React.useState({
      top: false,
      left: false,
      bottom: false,
      right: false,
    });
  
    const toggleDrawer = (side, open) => event => {
      if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
        return;
      }
  
      setState({ ...state, [side]: open });
    };
  
    return (
      <div>
        <Button className={classes.button} onClick={toggleDrawer('right', true)}>
            Registro
        </Button>
        <SwipeableDrawer
          className={classes.sidePanel}
          anchor="right"
          open={state.right}
          onClose={toggleDrawer('right', false)}
          onOpen={toggleDrawer('right', true)}
        >
        <div className={classes.content}>
            <div className={classes.contentTitle}>
                <h3>Bienvenidos!</h3>
            </div>
            <p>
                Necesitamos algunos datos para poder<br/>
                registrarte en la plataforma.
            </p>
        </div>
        <TextFields />
        </SwipeableDrawer>
      </div>
    );
  }
  