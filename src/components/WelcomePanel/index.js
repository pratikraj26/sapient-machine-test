import React, { Component } from 'react'
import './styles.scss'

class WelcomePanel extends Component {
	render() {
		const { getMoney } = this.props
		return (
			<div className='welcome'>
				<h2>Welcome to ATM</h2>
				<div className="form">
					<div className="item">
						<label>Enter the Amount</label>
						<input type="text" ref={el => this.amountEl = el} name="amount" />
					</div>
					<div className="item">
						<button name="getMoney" onClick={e => getMoney(this.amountEl.value)}>Get Money</button>
					</div>
				</div>
			</div>
		)
	}
}

export default WelcomePanel