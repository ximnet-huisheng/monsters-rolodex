import { Component } from 'react'
class CardList extends Component {
	render() {
		const { monsters } = this.props
		console.log('render from card list')
		return monsters.map((monster) => {
			return (
				<div key={monster.id}>
					<h1>{monster.name}</h1>
				</div>
			)
		})
	}
}

export default CardList
