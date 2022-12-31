import { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import CardList from './components/card-list/card-list.component'

class App extends Component {
	constructor() {
		super()

		this.state = {
			monsters: [],
			searchField: '',
		}

		//console.log('constructor')
	}

	componentDidMount() {
		//console.log('componentDidMount')

		// const myPromise = new Promise((resolve, reject) => {
		// 	if (true) {
		// 		setTimeout(() => {
		// 			resolve('lalalala')
		// 		}, 1000)
		// 	} else {
		// 		reject('failed')
		// 	}
		// })

		// myPromise
		// 	.then((value) => //console.log(value + 'aaa'))
		// 	.then((newValue) => //console.log(newValue))
		// 	.catch((rejectVal) => //console.log(rejectVal))

		fetch('https://jsonplaceholder.typicode.com/users').then((response) =>
			response.json().then((users) =>
				this.setState(
					() => {
						return { monsters: users }
					},
					() => {
						//console.log(this.state)
					}
				)
			)
		)
	}

	//create method in class instead of render, so that it will only be created once, instead of every render.
	onSearchChange = (event) => {
		const searchField = event.target.value.toLocaleLowerCase()

		this.setState(() => {
			return { searchField }
		})
	}

	render() {
		//console.log('render')

		const { monsters, searchField } = this.state
		const { onSearchChange } = this

		const filteredMonsters = monsters.filter((monster) => {
			return monster.name.toLocaleLowerCase().includes(searchField)
		})

		return (
			<div className='App'>
				<input
					type='search'
					className='search-box'
					placeholder='search monsters'
					onChange={onSearchChange}
				/>
				{filteredMonsters.map((monster) => {
					return (
						<div key={monster.id}>
							<h1>{monster.name}</h1>
						</div>
					)
				})}
				<CardList monsters={filteredMonsters} />
			</div>
		)
	}
}

export default App
