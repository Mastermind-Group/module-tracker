import React from 'react'
import { connect } from "react-redux"
import { CssBaseline, FormControl, Input, InputLabel, Paper, Button, withStyles } from '@material-ui/core'
import GoogleLogin from 'react-google-login'
import { NavLink } from 'react-router-dom'
import { useForm } from 'customhooks'

import styles from './styles'
import { register, createGoogleUser } from "../../Actions"

import GLogo from '../Images/G-Sign-In-Normal.png'
import Loader from 'react-loader-spinner'
import Logo1 from '../Images/final.png'

import './register.scss'

const Register = props => {

  const responseGoogle = res => {

    console.log('res', res)

    const google = {
      token: res.accessToken,
      image: res.profileObj.imageUrl,
      name: res.profileObj.name,
      email: res.profileObj.email,
      password: `${res.googleId}${res.profileObj.familyName}`
    }

    console.log(google)

    props.createGoogleUser(google)
    setTimeout(() => window.location.pathname = '/dashboard/profile', 1000)

  }

  const { fields, handleChanges, submit } = useForm(handleSubmit)

  const { classes } = props

  function handleSubmit() {
    props.register(fields, props.admin)
    setTimeout(() => window.location.pathname = '/dashboard/profile', 2000)
  }

  if (props.loggingIn) return <main className={classes.main}>
    <CssBaseline />
    <Paper className={classes.paper} style={{ height: '600px', display: 'flex' }}>
      <Loader
        style={{ paddingTop: '225px' }}
        type="Circles"
        color="#BB1333"
        height="100"
        width="100"
      />
    </Paper>
  </main>

  else return (

    <main className={classes.main}>
      <CssBaseline />
      <p style={{ width: '100%' }}></p>
      <Paper className={classes.paper} >
        <img alt='Logo' style={{ height: '175px', width: '175px' }} src={Logo1} />
        {/* <img
          alt='Lambda Logo'
          style={lambdaLogo}
          src={Logo}
        /> */}
        {/* <span>Career Readiness Portal</span> */}

        <form
          onSubmit={(e) => submit(e)}
          className={classes.form}
        >
          <FormControl
            margin="normal"
            required
            fullWidth
          >
            <InputLabel htmlFor="email" style={{ fontSize: 14, color: '#999' }}>Email:</InputLabel>
            <Input
              id="email"
              name="email"
              type="email"
              onChange={handleChanges} autoComplete="email"
              autoFocus
            />
          </FormControl>

          <FormControl
            margin="normal"
            required
            fullWidth
          >
            <InputLabel htmlFor="password" style={{ fontSize: 14, color: '#999' }}>New Password</InputLabel>
            <Input
              name="password"
              type="password"
              onChange={handleChanges}
              id="password"
              autoComplete="current-password"
            />
          </FormControl>

          <Button
            variant="outlined"
            color="secondary"
            className={classes.submit}
            type="submit"
            fullWidth
            style={{ padding: '8px' }}
          >Register</Button>

          {!props.admin &&
            <div style={{ marginTop: '25px' }}>
              <GoogleLogin
                clientId={`${process.env.REACT_APP_GOOGLE_CLIENT_ID}`}
                render={renderProps => (
                  <img className={'oauth'} onClick={renderProps.onClick} alt='Google Logo' src={GLogo} />
                )}
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}
              />
            </div>}
        </form>

        <p>Already have an account?</p>
        <NavLink to='/'>Log In</NavLink>
      </Paper>
    </main>

  )

}

const mapStateToProps = state => ({ ...state })

export default connect(
  mapStateToProps,
  { register, createGoogleUser }
)(withStyles(styles)(Register))
