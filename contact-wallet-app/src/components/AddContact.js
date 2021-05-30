import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import AssignmentIcon from '@material-ui/icons/Assignment';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';

const useStyles = (theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
  },
  green: {
    color: '#fff',
    backgroundColor: green[500],
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
});

class AddContact extends React.Component {
  state = {
    fullname: '',
    email: '',
    phone: '',
  };

  add = (e) => {
    e.preventDefault();
    if (
      this.state.fullname === '' ||
      this.state.email === '' ||
      this.state.phone === ''
    ) {
      alert('All fields are mandatory');
      return;
    }

    this.props.addContactHandler(this.state);
    this.setState({ fullname: '', email: '', phone: '' });
  };
  render() {
    const { classes } = this.props;
    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />

        <div className={classes.paper}>
          <Avatar className={classes.green}>
            <AssignmentIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Add New Contact
          </Typography>
          <form className={classes.form} noValidate onSubmit={this.add}>
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              name="name"
              label="Full name"
              value={this.state.fullname}
              onChange={(e) => this.setState({ fullname: e.target.value })}
              type="text"
              id="text"
              autoComplete="current-name"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              id="email"
              label="Email Address"
              value={this.state.email}
              onChange={(e) => this.setState({ email: e.target.value })}
              name="email"
              autoComplete="email"
            />
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              name="phone-number"
              label="Phone Number"
              value={this.state.phone}
              onChange={(e) => this.setState({ phone: e.target.value })}
              type="number"
              id="number"
              autoComplete="current-name"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Add Contact
            </Button>
          </form>
        </div>
      </Container>
    );
  }
}

export default withStyles(useStyles, { withTheme: true })(AddContact);
