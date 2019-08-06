import React, { Component } from 'react';
import Main from '~/views/Main'

import '~/assets/styles/main.scss'

class App extends Component{
	state = {
		isLoading: true
	}
	componentDidMount(){
		this.setState({
			isLoading: false
		})
	}
	render() {
		const { isLoading } = this.state
		
		if(isLoading) return null

		return <Main />
	}
}

export default App