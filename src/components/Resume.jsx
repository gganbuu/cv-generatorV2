export function Resume({details}) {
    
    return (
        <div className="resume">
            <header>
                <h1>{details.name}</h1>
                <div className="resume-header-grid">
                    <h2 id="phone">{details.phone}</h2>
                    <h2 id="email">{details.email}</h2>
                    <h2 id="linkedin">{details.linkedIn}</h2>
                    <h2 id="github">{details.gitHub}</h2>
                </div>
            </header>
            
            
        </div>
    )
}