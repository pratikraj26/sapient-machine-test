import axios from 'axios'
import config from '~/config'

export const getAccessToken = async () => {
	const refreshToken = window.sessionStorage.getItem('refreshToken')
	const accessToken = window.sessionStorage.getItem('accessToken')
	if(accessToken){
		return accessToken
	}else{
		try{
			const response = await axios({
				url: `${config.apiBase}/oauth/token?refreshToken=${refreshToken}`,
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
				}
			})
			console.log(JSON.stringify(responseBody))
			const responseBody = await response.data
			if(responseBody.success) {
				window.sessionStorage.setItem('accessToken', responseBody.accessToken)
				return responseBody.accessToken
			}
			return null
		}catch(error){
			return null
		}
	}
}