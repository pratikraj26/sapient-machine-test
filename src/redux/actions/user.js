import axios from 'axios'
import _ from 'lodash'
import config from '~/config'
import credentialConfig from '~/config/credentialConfig'
import { getAccessToken } from '~/redux/helpers'

const responseBody = {
}

export const userInfo = (accessToken) => async (dispatch) => {
	try{
		// const accessToken = await getAccessToken()
		// const response = await axios({
		// 	url: `${config.apiBase}/user/me`,
		// 	method: 'GET',
		// 	headers: {
		// 		'Content-Type': 'application/json',
		// 		'Authorization': `${accessToken}`,
		// 	}
		// })
		// const responseBody = await response.data
		const userData = _.find(credentialConfig, credential => credential.role === accessToken)
		if(!responseBody.error && userData){
			dispatch({
				type: 'LOGIN_SUCCESS',
				payload: {
					email: userData.email,
					role: userData.role
				}
			})
			return true
		}
		dispatch({
			type: 'LOGIN_FAILED',
			payload: {
				error: responseBody.error || "An error has occured."
			}
		})
		return false
	}catch(error){
		dispatch({
			type: 'LOGIN_FAILED',
			payload: {
				error: error.message || "An error has occured."
			}
		})
		return false
	}
}

export const login = (credentials) => async (dispatch) => {
	try{
		const { email, password } = credentials
		// const response = await axios({
		// 	url: `${config.apiBase}/oauth/login`,
		// 	method: 'POST',
		// 	headers: {
		// 		'Content-Type': 'application/json',
		// 	},
		// 	data: JSON.stringify(credentials)
		// })
		// const responseBody = await response.data
		const userData = _.find(credentialConfig, credential => credential.email === email && credential.password === password)
		if(!responseBody.error && userData){
			window.sessionStorage.setItem('accessToken', userData.role)
			window.sessionStorage.setItem('refreshToken', userData.role)
			dispatch({
				type: 'LOGIN_SUCCESS',
				payload: {
					email: userData.email,
					role: userData.role
				}
			})
			return true
		}
		dispatch({
			type: 'LOGIN_FAILED',
			payload: {
				error: responseBody.error
			}
		})
		return false
	}catch(error){
		dispatch({
			type: 'LOGIN_FAILED',
			payload: {
				error: error.message || "An error has occured."
			}
		})
		return false
	}
}

export const logout = () => {
	window.sessionStorage.removeItem('accessToken')
	window.sessionStorage.removeItem('refreshToken')
	return {
		type: 'LOGOUT_SUCCESS',
		payload: {}
	}
}