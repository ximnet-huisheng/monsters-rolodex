import './search-box.styles.css'
const SearchBox = ({ className, placeholder, onSearchHandler }) => {
	return (
		<input
			type='search'
			className={`search-box ${className}`}
			placeholder={placeholder}
			onChange={onSearchHandler}
		/>
	)
}

export default SearchBox
