import { BigButton } from "./components/buttons/BigButton.jsx" 
import { Resume } from "./components/Resume.jsx"
import { useState } from "react";
import { useReducer } from "react";

import { genInfoInitialState, genInfoReducer } from "./components/reducers/genInfoReducer.jsx";
import { careerObjectiveInitialState, careerObjectiveReducer} from './components/reducers/careerObjectiveReducer.jsx';
import { educationInitialState, educationReducer } from "./components/reducers/educationReducer.jsx";

import { EducationDropDown } from "./components/EducationDropDown.jsx";
import { GeneralInfoDropDown } from "./components/GeneralInfoDropDown.jsx"
import { CareerObjectiveDropDown } from "./components/CareerObjectiveDropDown.jsx"


export default function App() {
    const [genInfoState, genInfoDispatch] = useReducer(genInfoReducer, genInfoInitialState);
    const [careerObjectiveState, careerObjectiveDispatch] = useReducer(careerObjectiveReducer, careerObjectiveInitialState)

    return (
        <main>  
            <article className="menu">
                <div className="buttons-container">
                    <BigButton name="Download"/>
                    <BigButton name="Clear All"/>
                    <BigButton name="Sample Info"/>
                </div>
                <div className="all-dropdowns-container">
                    <GeneralInfoDropDown dispatch={genInfoDispatch} details={genInfoState}/>
                    <CareerObjectiveDropDown dispatch={careerObjectiveDispatch} details={careerObjectiveState}/>
                    <EducationDropDown/>
                </div>
            </article>
            <Resume genInfoDetails={genInfoState} 
                    careerObjectiveDetails={careerObjectiveState} />
        </main>
    )
}