import "./styles.css"
export const TextInput = ({searchValue, handleChange}) => {
    return(
    <input
    type="search" 
    className="text-input"
    placeholder="Type your search"
    onChange={handleChange}
    value={searchValue}
    />
)
}   