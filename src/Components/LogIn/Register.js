import React, { useState } from 'react'
import { connect } from "react-redux"
import { NavLink } from 'react-router-dom'
import { useForm } from 'customhooks'
import Loader from 'react-loader-spinner'

import { register } from "../../Actions"
import Logo from '../Images/logo.png'
import { Login, SignInButton, LogoImg, EmailForm, LinkButton } from './styles'
import { colors } from '../GlobalStyles'

const Register = props => {

  const { fields, handleChanges, submit } = useForm(handleSubmit)

  const [focus, setFocus] = useState(false)
  const [focused, setFocused] = useState(false)

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
        color={colors.primary}
        height="100"
        width="100"
      />
    </Login>

  )

  else return (

    <Login>

      <LogoImg src={Logo} />

      <form onSubmit={(e) => submit(e)}>

        <EmailForm required focused={focus}>
          <label htmlFor="username">E-mail</label>
          <input
            id="username"
            name="username"
            type="email"
            onChange={handleChanges}
            onFocus={() => setFocus(true)}
            onBlur={() => !fields.email && setFocus(false)}
          />
        </EmailForm>

        <EmailForm required focused={focused}>
          <label htmlFor="password">New Password</label>
          <input
            name="password"
            type="password"
            onChange={handleChanges}
            id="password"
            onFocus={() => setFocused(true)}
            onBlur={() => !fields.password && setFocused(false)}
          />
        </EmailForm>

        <SignInButton>Register</SignInButton>

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
