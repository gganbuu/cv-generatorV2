import { BigButton } from "./components/BigButton.jsx" 
import { Resume } from "./components/Resume.jsx"
import { useState } from "react";

import { GeneralInfoDropDown } from "./components/GeneralInfoDropDown.jsx"
import { CareerObjectiveDropDown } from "./components/CareerObjectiveDropDown.jsx"


export default function App() {

    const [genInfo, setGenInfo] = useState({name: "John Smith", 
                                            phone: "04123456789", 
                                            email: "john.smith@gmail.com",
                                            linkedIn: "https://www.linkedin.com/in/john-smith/",
                                            gitHub: "https://github.com/johnsmith/"
                                        }); 
    const genInfoActionHandlers = {
        onNameChange: (e) => handleNameChange(e),
        onPhoneChange: (e) => handlePhoneChange(e),
        onEmailChange: (e) => handleEmailChange(e),
        onLinkedChange: (e) => handleLinkedInChange(e),
        handleGitHubChange: (e) => handleGitHubChange(e),
        handleClear: () => handleClear()
    }

    const handleClear = () => {
        const emptyDetails = {...genInfo}
        Object.keys(emptyDetails).forEach(key => emptyDetails[key] = "");
        setGenInfo(emptyDetails);
    }
    
    const handleNameChange = (e) => {
        setGenInfo({...genInfo, name: e.target.value})
    }

    const handlePhoneChange = (e) => {
        setGenInfo({...genInfo, phone: e.target.value})
    }
    const handleEmailChange = (e) => {
        setGenInfo({...genInfo, email: e.target.value})
    }

    const handleLinkedInChange = (e) => {
        setGenInfo({...genInfo, linkedIn: e.target.value})
    }

    const handleGitHubChange = (e) => { 
        setGenInfo({...genInfo, gitHub: e.target.value})
    }
    

    return (
        <main>  
            <article className="menu">
                <div className="buttons-container">
                    <BigButton name="Download"/>
                    <BigButton name="Clear All"/>
                    <BigButton name="Sample Info"/>
                </div>
                <div className="all-dropdowns-container">
                    <GeneralInfoDropDown handlers={genInfoActionHandlers} details={genInfo}/>
                    <CareerObjectiveDropDown/>
                </div>
            </article>
            <Resume details={genInfo}/>
        </main>
    )
}