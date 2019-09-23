import React, { useState, useEffect } from 'react'
import Cookies from 'js-cookie'
import { connect } from "react-redux"
import Loader from 'react-loader-spinner'

import EmailModal from './Email'
import { register, login, bsLogin, bsRedirect } from "../../Actions"
import { colors } from '../GlobalStyles'
import { Login, SignInButton, LogoImg } from './styles'
import Logo from '../Images/logo.png'

function LogIn(props) {

  const [isEmail, setIsEmail] = useState(false)

  const creds = Cookies.get('creds') &&
    JSON.parse(Cookies.get('creds'))


  useEffect(_ => creds && props.login(creds), [creds])

  useEffect(_ => {
    if (props.blockstackConfig.isSignInPending() && !props.blockstackConfig.isUserSignedIn())
      props.bsLogin(props.blockstackConfig)
    if (props.bsUser) props.bsUser ?
      props.login(props.user) :
      props.register(props.user)
  }, [props.user])

  if (props.loggingIn) return (

    <Login>
      <Loader
        style={{
          paddingTop: '130px',
          paddingBottom: '150px'
        }}
        type="Circles"
        color={colors.secondary}
        height="100"
        width="100"
      />
    </Login>

  )

  if (isEmail) return <Login><EmailModal setIsEmail={setIsEmail} /></Login>

  else return (

    <Login>

      <LogoImg src={Logo} />

      <SignInButton
        onClick={() => props.bsRedirect(props.blockstackConfig)}
      >Sign in with Blockstack</SignInButton>

      <p style={{ marginTop: '20px' }}>Don't have a Blockstack ID?
      <a href='https://browser.blockstack.org/' target='_blank' rel='noopener noreferrer'> Make one here</a></p>
      <p>Prefer email? <a href='#' onClick={_ => setIsEmail(true)}>Click here</a></p>

    </Login>

  )

}

export default connect(
  state => ({ ...state }),
  { register, login, bsLogin, bsRedirect }
)(LogIn)
