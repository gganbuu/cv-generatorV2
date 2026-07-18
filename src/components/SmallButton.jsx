export function SmallButton({onClick, name}) {
    return (
        <>
            <button onClick={onClick} className="small-button">
                {name}
            </button>
        </>
    )
}