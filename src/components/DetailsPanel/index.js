import React, { Component } from 'react'
import './styles.scss'

class DetailsPanel extends Component {
	render() {
		const { denominationCount, denominations, amount } = this.props
		let dispensedNotes = 0
		denominationCount.map(count => dispensedNotes += count)
		return (
			<div className='details'>
			{amount > 0 && (
				<React.Fragment>
					<h3>You will get following amount</h3>
					<ul>
					{denominationCount.map((count, index) => (
						<li key={index}>{count} notes of Rs {denominations[index]}</li>
					))}
					<h3>Total notes dispensed: {dispensedNotes}</h3>
					</ul>
				</React.Fragment>
			)}
			</div>
		)
	}
}

export default DetailsPanel