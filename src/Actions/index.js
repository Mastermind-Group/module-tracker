import Cookies from 'js-cookie'
import jwt_decode from 'jwt-decode'
import axios from 'axios'
import { handleError } from '../Utilities'

const REQUEST = 'REQUEST',
	BS_REQUEST = 'BS_REQUEST',
	BS = 'BS',
	NEW_BS = 'NEW_BS',
	SUCCESS = 'SUCCESS',
	GETJOBS = 'GETJOBS'

const url = 'https://element-learning.herokuapp.com/graphql'

const register = user => dispatch => {

	dispatch({ type: REQUEST })

	axios.post(url, {
		query: `
      mutation{
        createUser(inUser: {
          username:"${user.username}",
          password:"${user.password}"
        }){
          _id
          token
        }
	  }
	  `
	})
		.then(res => {
			console.log('REGISTERED', res)
			const token = res.data.data.createUser.token
			Cookies.set('token', token)
			dispatch({ type: SUCCESS, payload: res.data })
			if (jwt_decode(token).role === "Admin") window.location.pathname = '/admin/dashboard'
			else if (token) window.location.pathname = '/dashboard/profile'
		})
		.catch(err => handleError(err))
}

const login = creds => dispatch => {

	dispatch({ type: REQUEST })

	console.log('yeah')

	axios.post(url, {
		query: `{
			login(username:"${creds.username}", password:"${creds.password}"){
				token
			}
		}`
	})
		.then(res => {
			console.log('second response', res)
			const { token } = res.data.data.login
			Cookies.set('token', token)
			Cookies.set('creds', JSON.stringify(creds))
			const admin = jwt_decode(token)
			console.log('admin', admin)
			const location = Cookies.get('location')
			dispatch({ type: SUCCESS, payload: token })
			window.location.pathname = `${
				token &&
					location ? location
					:
					jwt_decode(token).role === "Admin" ?
						'/admin/dashboard'
						:
						'/dashboard/profile'
				}`
		})
		.catch(err => handleError(err))
}

const bsRedirect = bs => dispatch => {

	dispatch({ type: BS_REQUEST })

	bs.redirectToSignIn()

}

const bsLogin = bs => dispatch => {
	if (!bs.isUserSignedIn() && bs.isSignInPending()) {
		bs.handlePendingSignIn()
			.then(userData => {
				if (!userData.username) {
					throw new Error("Username required")
				}

				const creds = {
					username: userData.username,
					password: userData.decentralizedID
				}

				axios.post(url, {
					query: `{users{username}}`
				})
					.then(res => {
						let { users } = res.data.data
						users = users.filter(user => user.username === creds.username)
						if (!users.length) dispatch({ type: NEW_BS, payload: creds })
						else dispatch({ type: BS, payload: creds })
					})

			})
			.catch(err => handleError(err))
	}
}

export {
	REQUEST,
	BS_REQUEST,
	BS,
	NEW_BS,
	SUCCESS,
	GETJOBS,
	register,
	login,
	bsRedirect,
	bsLogin,
}
