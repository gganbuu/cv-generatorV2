export function BigButton({onClick, name}) {
    
    return (
        <>
            <button onClick={onClick} className="big-button">
                {name}
            </button>
        </>
    )
}