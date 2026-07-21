import MinusSign from "../assets/minus-sign.svg?react"

export function Achievement({onChange, onClick, value}) {
    return (
        <>
            <textarea value={value} onChange={(e) => onChange(e)}/>
            <button onClick={(e) => onClick(e)} className="dropdown-content-delete-button">
                <MinusSign/>
            </button>
        </>
    )
}