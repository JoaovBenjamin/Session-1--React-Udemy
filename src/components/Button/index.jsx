import "./styles.css"

export function Button({text, onClick,disabled}){
    return(
        <button 
        disabled = {disabled}
        className="button" 
        onClick={onClick}>
        {text}</button>
    )
}