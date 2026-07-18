export function TextArea({value, className, id, placeholder, onChange}) {
    return (
        <textarea
        // id={id} 
        value={value}
        placeholder={placeholder}
        className={className}
        onChange={onChange}/>
    )
}