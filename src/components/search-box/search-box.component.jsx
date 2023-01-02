import './search-box.styles.css'
const SearchBox = ({ className, placeholder, onSearchHandler }) => (
	<input
		type='search'
		className={`search-box ${className}`}
		placeholder={placeholder}
		onChange={onSearchHandler}
	/>
)

export default SearchBox
