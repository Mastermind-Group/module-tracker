import React, { useState, useEffect } from 'react'
import { connect } from "react-redux"
import Loader from 'react-loader-spinner'
import { NavLink } from 'react-router-dom'

import EmailModal from './Email'
import { register, login, bsLogin, bsRedirect } from "../../Actions"
import { colors } from '../../GlobalStyles'
import { Login, SignInButton, LogoImg, LinkButton, ToP } from './styles'
import Logo from '../Images/logo.png'

function LogIn(props) {

  const [isEmail, setIsEmail] = useState(false)

  useEffect(_ => {
    console.log('Props_User', props.user)
    if (props.blockstackConfig.isSignInPending() && !props.blockstackConfig.isUserSignedIn())
      props.bsLogin(props.blockstackConfig)

    if (props.user) props.bsUser ?
      props.login(props.user) :
      props.register(props.user)

  }, [props.user, props.bsUser])

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

  if (isEmail) return (
    <Login>
      <LogoImg src={Logo} />
      <EmailModal setIsEmail={setIsEmail} login={props.login} />
      <ToP>Don't have your email registered yet? <NavLink to='/register'>Sign up with e-mail</NavLink></ToP>
      <p>Changed your mind?
            <LinkButton onClick={() => setIsEmail(false)}>Go back to Blockstack</LinkButton></p>
    </Login>
  )

  else return (

    <Login>

      <LogoImg src={Logo} />

      <SignInButton
        onClick={() => props.bsRedirect(props.blockstackConfig)}
      >Sign in with Blockstack</SignInButton>

      <ToP>Don't have a Blockstack ID? <a href='https://browser.blockstack.org/' target='_blank' rel='noopener noreferrer'>Make one here</a></ToP>
      <p>Prefer e-mail?<LinkButton onClick={_ => setIsEmail(true)}>Click here</LinkButton></p>

    </Login>

  )

}

export default connect(
  state => ({ ...state }),
  { register, login, bsLogin, bsRedirect }
)(LogIn)
