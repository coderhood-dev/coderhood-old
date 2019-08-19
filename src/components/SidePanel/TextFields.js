import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: "column",
  },
  textField: {
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    width: 200,
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
  finishButton: {
    marginTop: 30,
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    margin: theme.spacing(2),
  },
}));


export default function TextFields() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    name: 'Cat in the Hat',
    age: '',
    multiline: 'Controlled',
    currency: 'EUR',
  });

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  return (
    <form className={classes.container} noValidate autoComplete="off">
      <TextField
        id="sideName"
        label="Nombre"
        className={classes.textField}
        onChange={handleChange('name')}
        margin="normal"
      />
      <TextField
        id="sideSurname"
        label="Apellido"
        className={classes.textField}
        onChange={handleChange('name')}
        margin="normal"
      />
      <TextField
        id="sideUser"
        label="Nombre de usuario"
        className={classes.textField}
        onChange={handleChange('name')}
        margin="normal"
      />
      <TextField
        id="sideEmail"
        label="Email"
        className={classes.textField}
        onChange={handleChange('name')}
        margin="normal"
      />
      <TextField
        id="sidePass"
        label="Passwords"
        className={classes.textField}
        onChange={handleChange('name')}
        margin="normal"
      />
      <div className={classes.finishButton}>
        <Button variant="contained" className={classes.button}>
            Finalizar
        </Button>
      </div>
      
    </form>
  );
}