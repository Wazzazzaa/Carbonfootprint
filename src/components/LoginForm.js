
import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import useLoginForm from '../hooks/LoginHooks';
import {login} from '../hooks/ApiHooks';
import {withRouter} from 'react-router-dom';
import {MediaContext} from '../contexts/MediaContext';
import {Button, TextField, Grid, Typography} from '@material-ui/core';
import Background from './images/tree.jpg';

const sectionStyle = {
  width: "104%",
  height: "1000px",
  backgroundImage: "url(" + Background + ")",
  display: 'flex',
  justifyContent: 'center',
  margin: '-15px',
  marginLeft: '-30px',
  overflowX: "hidden"
};

const LoginForm = ({history}) => {
  // eslint-disable-next-line no-unused-vars
  const [user, setUser] = useContext(MediaContext);
  const doLogin = async () => {
    try {
      const userdata = await login(inputs);
      setUser(userdata.user);
      localStorage.setItem('token', userdata.token);
      history.push('/home');
    } catch (e) {
      console.log(e.message);
    }
  };
  const {inputs, handleInputChange, handleSubmit} = useLoginForm(doLogin);
  return (
      <div style={sectionStyle}>
        <Grid container style={{ width: "40%",
          height: "40%", backgroundColor: "white",
          borderRadius: "4px", margin: "100px"}}>
          <Grid item xs={12} style={{margin: "30px"}}>
            <Typography
                component="h1"
                variant="h2"
                gutterBottom>Login</Typography>
          </Grid>
          <Grid item xs={12} style={{marginTop: "-100px", width: "30%", display: 'flex', justifyContent: 'center'}}>
            <form onSubmit={handleSubmit}>
              <Grid container >
                <Grid container item >
                  <TextField
                      fullWidth
                      type="text"
                      name="username"
                      label="Username"
                      onChange={handleInputChange}
                      value={inputs.username}
                  />
                </Grid>

                <Grid container item>
                  <TextField
                      fullWidth
                      type="password"
                      name="password"
                      label="Password"
                      onChange={handleInputChange}
                      value={inputs.password}
                  />
                </Grid>

                <Grid container item style={{padding: "20px", display: 'flex', justifyContent: 'center'}}>
                  <Button style={{width: "50%", marginTop: "20px"}}
                          fullWidth
                          color="primary"
                          type="submit"
                          variant="contained">
                    Login
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Grid>
        </Grid>
      </div>
  );
};

LoginForm.propTypes = {
  history: PropTypes.object,
};

export default withRouter(LoginForm);