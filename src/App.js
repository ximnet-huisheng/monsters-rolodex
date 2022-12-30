import { Component } from 'react'
import logo from './logo.svg'
import './App.css'

class App extends Component {
	constructor() {
		super()

		this.state = {
			monsters: [],
			searchField: '',
		}

		console.log('constructor')
	}

	componentDidMount() {
		console.log('componentDidMount')

		const myPromise = new Promise((resolve, reject) => {
			if (true) {
				setTimeout(() => {
					resolve('lalalala')
				}, 1000)
			} else {
				reject('failed')
			}
		})

		myPromise
			.then((value) => console.log(value + 'aaa'))
			.then((newValue) => console.log(newValue))
			.catch((rejectVal) => console.log(rejectVal))

		fetch('https://jsonplaceholder.typicode.com/users').then((response) =>
			response.json().then((users) =>
				this.setState(
					() => {
						return { monsters: users }
					},
					() => {
						console.log(this.state)
					}
				)
			)
		)
	}

	render() {
		console.log('render')

		const filteredMonsters = this.state.monsters.filter((monster) => {
			return monster.name.toLocaleLowerCase().includes(this.state.searchField)
		})

		return (
			<div className='App'>
				<input
					type='search'
					className='search-box'
					placeholder='search monsters'
					onChange={(event) => {
						const searchField = event.target.value.toLocaleLowerCase()

						this.setState(() => {
							return { searchField }
						})
					}}
				/>
				{filteredMonsters.map((monster) => {
					return (
						<div key={monster.id}>
							<h1>{monster.name}</h1>
						</div>
					)
				})}
			</div>
		)
	}
}

export default App
