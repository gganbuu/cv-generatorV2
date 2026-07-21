import { BigButton } from "./components/buttons/BigButton.jsx" 
import { Resume } from "./components/Resume.jsx"
import { useState } from "react";
import { useReducer } from "react";
import React from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";


import { genInfoInitialState, genInfoReducer } from "./components/reducers/genInfoReducer.jsx";
import { careerObjectiveInitialState, careerObjectiveReducer} from './components/reducers/careerObjectiveReducer.jsx';
import { educationInitialState, educationReducer } from "./components/reducers/educationReducer.jsx";
import { experienceInitialState, experienceReducer } from "./components/reducers/experienceReducer.jsx";

import { EducationDropDown, EducationBlock } from "./components/EducationDropDown.jsx";
import { ExperienceDropDown } from "./components/ExperienceDropDown.jsx";
import { GeneralInfoDropDown } from "./components/GeneralInfoDropDown.jsx"
import { CareerObjectiveDropDown } from "./components/CareerObjectiveDropDown.jsx"


export default function App() {
    const [genInfoState, genInfoDispatch] = useReducer(genInfoReducer, genInfoInitialState);
    const [careerObjectiveState, careerObjectiveDispatch] = useReducer(careerObjectiveReducer, careerObjectiveInitialState)
    const [educationState, educationDispatch] = useReducer(educationReducer, educationInitialState)
    const [experienceState, experienceDispatch] = useReducer(experienceReducer, experienceInitialState)
    
    const printRef = React.useRef(null)
    const handleDownloadPDF = async () => {
        const element = printRef.current

        if(!element) return

        element.style.backgroundColor = 'transparent';
        const canvas = await html2canvas(element);
        element.style.backgroundColor = '#d9d9d9';
        const data = canvas.toDataURL('image/png');

        const pdf = new jsPDF({
            orientation: "portrait",
            unit: "px",
            format: 'a4',
        });

        const imgProperties = pdf.getImageProperties(data);
        const pdfWidth = pdf.internal.pageSize.getWidth()
        const pdfHeight = (imgProperties.height * pdfWidth) / imgProperties.width


        pdf.addImage(data, 'PNG', 0, 0, pdfWidth, pdfHeight)
        pdf.save('MyResume.pdf');

    }


    function handleClearAll() {
        genInfoDispatch({type: 'cleared-all'})
        careerObjectiveDispatch({type: 'cleared-all'})
        educationDispatch({type: 'cleared-all'})
        experienceDispatch({type: 'cleared-all'})
    }

    function handleSampleInfo() {
        genInfoDispatch({type: 'fill-with-sample'})
        careerObjectiveDispatch({type: 'fill-with-sample'})
        educationDispatch({type: 'fill-with-sample'})
        experienceDispatch({type: 'fill-with-sample'})
    }

    return (
        <main>  
            <article className="menu">
                <div className="buttons-container">
                    <BigButton onClick={() => handleDownloadPDF()} name="Download"/>
                    <BigButton onClick={() => handleClearAll()} name="Clear All"/>
                    <BigButton onClick={() => handleSampleInfo()} name="Sample Info"/>
                </div>
                <div className="all-dropdowns-container">
                    <GeneralInfoDropDown dispatch={genInfoDispatch} details={genInfoState}/>
                    <CareerObjectiveDropDown dispatch={careerObjectiveDispatch} details={careerObjectiveState}/>
                    <EducationDropDown dispatch={educationDispatch} details={educationState}/>
                    <ExperienceDropDown dispatch={experienceDispatch} details={experienceState}/>
                </div>
            </article>
            <div className="resume" ref={printRef}>
                <Resume genInfoDetails={genInfoState}
                        careerObjectiveDetails={careerObjectiveState}
                        educationDetails={educationState}
                        experienceDetails={experienceState}
                        />
            </div>
        </main>
    )
}