import React, { useState, useEffect } from 'react'
import Cookies from 'js-cookie'
import { connect } from "react-redux"
import Loader from 'react-loader-spinner'

import EmailModal from './EmailModal'
import { register, login, bsLogin, bsRedirect } from "../../Actions"
import { colors } from '../GlobalStyles'
import { Login, SignInButton, LogoImg } from './styles'
import Logo from '../Images/logo.png'

function LogIn(props) {

  const [fuckery, setFuckery] = useState(false)

  const creds = Cookies.get('creds') &&
    JSON.parse(Cookies.get('creds'))


  useEffect(_ => creds && props.login(creds), [creds])

  useEffect(_ => {
    if (props.blockstackConfig.isSignInPending() && !props.blockstackConfig.isUserSignedIn())
      props.bsLogin(props.blockstackConfig)
    if (props.bsUser === (true || false) && props.user !== undefined) props.bsUser ?
      props.login(props.user) :
      props.register(props.user)
  }, [props.bsUser])

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

  if (fuckery) return <Login><EmailModal /></Login>

  else return (

    <Login>

      <LogoImg src={Logo} />

      <SignInButton
        onClick={() => props.bsRedirect(props.blockstackConfig)}
      >Sign in with Blockstack</SignInButton>

      <p style={{ marginTop: '20px' }}>Don't have a Blockstack ID?
      <a href='https://browser.blockstack.org/' target='_blank' rel='noopener noreferrer'> Make one here</a></p>
      <p>Prefer email? <span onClick={_ => setFuckery(true)}>Click here</span></p>

    </Login>

  )

}

export default connect(
  state => ({ ...state }),
  { register, login, bsLogin, bsRedirect }
)(LogIn)
