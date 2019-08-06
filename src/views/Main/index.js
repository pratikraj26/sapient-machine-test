import React, { Component } from 'react'

import WelcomePanel from '~/components/WelcomePanel'
import DetailsPanel from '~/components/DetailsPanel'

import './styles.scss'

class Main extends Component {
	state = {
		denominations: [2000, 500, 200, 100, 50, 20, 10, 5, 2, 1],
		denominationCount: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		amount: 0,
	}
	getMoney = (amount) => {
		let { denominations, denominationCount } = this.state
		this.setState({
			amount
		}, () => {
			if(amount > 0){
				denominations.forEach((denomination, index) => {
					if(amount >= denomination){
						denominationCount[index] = Math.floor(amount / denomination)
						amount = amount % denomination
					}
				})
			}
			this.setState({
				denominationCount,
			})			
		})
	}
	render(){
		const { denominationCount, denominations, amount } = this.state
		return (
			<div className="wrapper">
				<WelcomePanel getMoney={this.getMoney} />
				<DetailsPanel amount={amount} denominations={denominations.reverse()} denominationCount={denominationCount.reverse()} />
			</div>
		)
	}
}

export default Main