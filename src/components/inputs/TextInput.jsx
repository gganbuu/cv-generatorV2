export function TextInput({value, className, id, placeholder, onChange}) {
    return (
        <input type="text"
        // id={id} 
        value={value}
        placeholder={placeholder}
        className={className}
        onChange={onChange}/>
    )
}