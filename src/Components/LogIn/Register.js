import React from 'react'
import { connect } from "react-redux"
import { FormControl, Input, InputLabel } from '@material-ui/core'
import { NavLink } from 'react-router-dom'
import { useForm } from 'customhooks'
import Loader from 'react-loader-spinner'

import { register } from "../../Actions"
import Logo from '../Images/logo.png'
import { Login, SignInButton, LogoImg } from './styles'

const Register = props => {

  const { fields, handleChanges, submit } = useForm(handleSubmit)

  function handleSubmit() {
    props.register(fields, props.admin)
    setTimeout(() => window.location.pathname = '/dashboard/profile', 2000)
  }

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

      </form>

      <p>Already have an account?</p>
      <NavLink to='/'>Log In</NavLink>

    </Login>

  )

}

const mapStateToProps = state => ({ ...state })

export default connect(
  mapStateToProps,
  { register }
)(Register)
