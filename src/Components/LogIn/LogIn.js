import React, { useEffect } from 'react'
import Cookies from 'js-cookie'
import { connect } from "react-redux"
import { FormControl, Input, InputLabel } from '@material-ui/core'
import { NavLink } from 'react-router-dom'
import { useForm } from 'customhooks'
import Loader from 'react-loader-spinner'

import { login, bsLogin, bsRedirect } from "../../Actions"
import { Login, SignInButton, LogoImg } from './styles'
import Logo from '../Images/logo.png'

function LogIn(props) {

  const { fields, handleChanges, submit } = useForm(handleSubmit)

  const creds = Cookies.get('creds') &&
    JSON.parse(Cookies.get('creds'))

  function handleSubmit() {
    props.login(fields, props.history)
  }


  useEffect(_ => creds && props.login(creds), [creds])

  useEffect(_ => {
    if (props.blockstackConfig.isSignInPending() && !props.blockstackConfig.isUserSignedIn())
      props.bsLogin(props.blockstackConfig)
  }, [])

  if (props.loggingIn) return (

    <Login>
      <Loader
        style={{
          paddingTop: '130px',
          paddingBottom: '150px'
        }}
        type="Circles"
        color="#BB1333"
        height="100"
        width="100"
      />
    </Login>

  )

  else return (

    <Login>

      <LogoImg src={Logo} />

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

        <SignInButton>Sign in Using E-mail</SignInButton>

      </form>

      <SignInButton
        onClick={() => props.bsRedirect(props.blockstackConfig)}
      >Sign in with Blockstack</SignInButton>

      <p>Don't have an account?</p>
      <NavLink to="/register">Register Here</NavLink>

    </Login>

  )

}

export default connect(
  state => ({ ...state }),
  { login, bsLogin, bsRedirect }
)(LogIn)
