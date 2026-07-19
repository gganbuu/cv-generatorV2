export function DateInput({value, className, id, placeholder, onChange}) {
    return (
        <input type="date"
        // id={id} 
        value={value}
        placeholder={placeholder}
        className={className}
        onChange={onChange}/>
    )
}