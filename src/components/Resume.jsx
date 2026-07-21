export function Resume({genInfoDetails, careerObjectiveDetails, educationDetails, experienceDetails}) {
    return (
        <>
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
                
                <br />
                
                <h1>Education</h1>
                <hr />

                {educationDetails.map(education => 
                    (
                    <>
                        <div key={education.id} className="education-block">
                            <div className="education-block-degree-and-time">
                                <h1>{education.details.degree}</h1>
                                <div>
                                    <em><h2>{education.details.timeStart} — {education.details.timeEnd}</h2></em>
                                </div>
                            </div>
                            <h2>{education.details.university}</h2>
                            <ul>
                                {education.details.achievements.map(item => (<li key={item.id}><h2>{item.description}</h2></li>))}
                            </ul>
                        </div>
                        <br></br>
                    </>)
                )}
                
                <h1>Experience</h1>
                <hr />

                {experienceDetails.map(experience =>
                    (
                    <>
                        <div key={experience.id} className="education-block">
                            <div className="education-block-degree-and-time">
                                <h1>{experience.details.role}</h1>
                                <div>
                                    <em><h2>{experience.details.timeStart} — {experience.details.timeEnd}</h2></em>
                                </div>
                            </div>
                            <h2>{experience.details.location}</h2>
                            <ul>
                                {experience.details.achievements.map(item => (<li key={item.id}><h2>{item.description}</h2></li>))}
                            </ul>
                        </div>
                        <br></br>
                    </>)
                )}
            </header>
       </>
    )
}