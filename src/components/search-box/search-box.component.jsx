import { Component } from 'react'
class SearchBox extends Component {
	render() {
		const { className, placeholder, onSearchHandler } = this.props

		return (
			<input
				type='search'
				className={className}
				placeholder={placeholder}
				onChange={onSearchHandler}
			/>
		)
	}
}

export default SearchBox
