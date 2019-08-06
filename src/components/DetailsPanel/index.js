import React, { Component } from 'react'
import './styles.scss'

class DetailsPanel extends Component {
	render() {
		const activeItem = this.props.match.params[0]
		return (
			<div className='details'>
			</div>
		)
	}
}

export default DetailsPanel