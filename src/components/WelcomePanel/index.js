import React, { Component } from 'react'
import './styles.scss'

class WelcomePanel extends Component {
	render() {
		const activeItem = this.props.match.params[0]
		return (
			<div className='welcome'>
			</div>
		)
	}
}

export default WelcomePanel