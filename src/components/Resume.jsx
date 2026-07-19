export function Resume({genInfoDetails, careerObjectiveDetails}) {
    
    return (
        <div className="resume">
            <header>
                <h1>{genInfoDetails.name}</h1>
                <div className="resume-header-grid">
                    <h2 id="phone">{genInfoDetails.phone}</h2>
                    <h2 id="email">{genInfoDetails.email}</h2>
                    <h2 id="linkedin">{genInfoDetails.linkedIn}</h2>
                    <h2 id="github">{genInfoDetails.gitHub}</h2>
                </div>
                <br />
                <h1>Career Objective</h1>
                <hr />
                <h2 id="careerObjective"> {careerObjectiveDetails}</h2>

                
                <h1>Education</h1>
                <hr />

                
                <h1>Experience</h1>
                <hr />
            </header>
            
            
        </div>
    )
}