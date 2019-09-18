import React from 'react'
import { connect } from "react-redux"
import { FormControl, Input, InputLabel } from '@material-ui/core'
import GoogleLogin from 'react-google-login'
import { NavLink } from 'react-router-dom'
import { useForm } from 'customhooks'

import { register, createGoogleUser } from "../../Actions"

import GLogo from '../Images/G-Sign-In-Normal.png'
import Loader from 'react-loader-spinner'

import { Flex } from '../GlobalStyles'
import { Oauth, Login, SignInButton } from './styles'

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

  function handleSubmit() {
    props.register(fields, props.admin)
    setTimeout(() => window.location.pathname = '/dashboard/profile', 2000)
  }

  if (props.loggingIn) return (

    <Login>
      <Loader
        style={{ paddingTop: '130px', paddingBottom: '150px' }}
        type="Circles"
        color="#BB1333"
        height="100"
        width="100"
      />
    </Login>

  )

  else return (

    <Login>

      <form onSubmit={(e) => submit(e)}>

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

        <SignInButton
          variant="outlined"
          color="secondary"
          type="submit"
          fullWidth
          style={{ padding: '8px' }}
        >Register</SignInButton>

        {!props.admin &&
          <Flex>
            <GoogleLogin
              clientId={`${process.env.REACT_APP_GOOGLE_CLIENT_ID}`}
              render={renderProps => (
                <Oauth
                  onClick={renderProps.onClick}
                  alt='Google Logo'
                  src={GLogo}
                />
              )}
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              cookiePolicy={'single_host_origin'}
            />
          </Flex>}
      </form>

      <p>Already have an account?</p>
      <NavLink to='/'>Log In</NavLink>

    </Login>

  )

}

const mapStateToProps = state => ({ ...state })

export default connect(
  mapStateToProps,
  { register, createGoogleUser }
)(Register)
