import React, { useEffect } from 'react'
import Cookies from 'js-cookie'
import { connect } from "react-redux"
import { CssBaseline, FormControl, Input, InputLabel, Paper, withStyles } from '@material-ui/core'
import { NavLink } from 'react-router-dom'
import { useForm } from 'customhooks'
import Loader from 'react-loader-spinner'
import { login } from "../../Actions"
import mainScomp from '../GlobalStyles'
import styles, { scomp } from './styles'

import GLogo from '../Images/G-Sign-In-Normal.png'
import GoogleLogin from 'react-google-login'

const { Flex, Button } = mainScomp
const { Oauth, Login, SignInButton } = scomp

function LogIn(props) {

  const { fields, handleChanges, submit } = useForm(handleSubmit)

  const { classes } = props

  const creds = Cookies.get('creds') &&
    JSON.parse(Cookies.get('creds'))

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

    props.login(google, props.history)

  }

  function handleSubmit() {
    props.login(fields, props.history)
  }


  useEffect(() => creds && props.login(creds), [creds])

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
      <Login>
        <form onSubmit={(e) => submit(e)}>

          <FormControl
            margin="normal"
            required
            fullWidth
          >
            <InputLabel htmlFor="email" style={{ fontSize: 14, color: '#999' }}>Email</InputLabel>
            <Input
              id="email"
              name="email"
              type='email'
              autoComplete="email"
              onChange={handleChanges}
              autoFocus
              style={{ fontSize: 16 }}
            />
          </FormControl>

          <FormControl
            margin="normal"
            required
            fullWidth
          >
            <InputLabel htmlFor="password" style={{ fontSize: 14, color: '#999' }}>Password</InputLabel>
            <Input
              name="password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={handleChanges}
              style={{ fontSize: 18 }}
            />
          </FormControl>

          <SignInButton>Sign in</SignInButton>

        </form>

        <SignInButton onClick={() => props.blockstackConfig.redirectToSignIn()}>Sign in with Blockstack</SignInButton>

        <Flex>
          <GoogleLogin
            clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
            render={renderProps => (
              <Oauth
                onClick={renderProps.onClick}
                alt='Google Logo' src={GLogo}
              />
            )}
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={'single_host_origin'}
          />
        </Flex>



        <div style={{ marginTop: '25px' }}>

        </div>

        <p>Don't have an account?</p>
        <NavLink to="/register">Register Here</NavLink>
      </Login>
    </main>

  )

}

const mapStateToProps = state => ({ ...state })

export default connect(
  mapStateToProps,
  { login }
)(withStyles(styles)(LogIn))
