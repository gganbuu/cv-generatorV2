import { useState } from "react"
import { useReducer } from "react";
import DropdownArrow from "../assets/dropdown-arrow.svg?react"
import AddSquare from "../assets/add-square.svg?react"
import MinusSign from "../assets/minus-sign.svg?react"

import { DateInput } from "./inputs/DateInput.jsx";
import { TextInput } from "./inputs/TextInput.jsx";
import { SmallButton } from "./buttons/SmallButton.jsx";
import { educationReducer } from "./reducers/educationReducer.jsx";

import { Achievement } from "./Achievement.jsx";

export function EducationDropDown({dispatch, details}) {
    const [open, setOpen] = useState(false);
    
    const handleOpen = () => {
        open ? setOpen(false): setOpen(true);
    }

    return (
        <>
            <div className="dropdown-container">
                <div className="dropdown">
                    <h1>Education</h1>
                    <button className="dropdown-arrow-button" onClick={handleOpen}>
                        <DropdownArrow/>
                    </button>
                </div>
                {open && (
                <>
                    {details.map(education => {return (<div className="dropdown-contents" key={education.id}>
                                                            <EducationBlock education={education} dispatch={dispatch}/>
                                                        </div>)})}
                    <button className="dropdown-content-add-button" onClick={() => dispatch({type: 'added-block'})}>
                        <AddSquare/>
                    </button>
                </>
                )}
            </div>
        </>
    )
}

export function EducationBlock({education, dispatch}) {
    return (
        <>
            <label htmlFor="degree">
                <div className="buttons-container">
                    <h2>Degree</h2>
                    <button className="dropdown-content-delete-button" onClick={(e) => dispatch({type: 'deleted-block', id: education.id})}><MinusSign/></button>
                </div>
                <TextInput className="text-input" placeholder="..." value={education.details.degree} onChange={(e) => dispatch({type: 'changed-degree', id: education.id, value: e.target.value})}/>
            </label>
                
            <label htmlFor="university">
                <h2>University</h2>
                <TextInput className="text-input" placeholder="..." value={education.details.university} onChange={(e) => dispatch({type: 'changed-university', id: education.id, value: e.target.value})}/>
            </label>

            <div className='date-box'>
                <label htmlFor="time-start">
                    <h2>Time Start</h2>
                    <DateInput className="date-input" value={education.details.timeStart} onChange={(e) => dispatch({type:'changed-time-start', id: education.id, value: e.target.value})}/>
                </label>
                <label htmlFor="time-end">
                    <h2>Time End</h2>
                    <DateInput className="date-input" value={education.details.timeEnd} onChange={(e) => dispatch({type:'changed-time-end', id: education.id, value: e.target.value})}/>
                </label>
            </div>

            <label htmlFor="achievements">
                <h2>Achievements</h2>
                <ul className='achievements-box'>
                   {education.details.achievements.map(achievement => 
                    (<li key={achievement.id}>
                        <Achievement value={achievement.description} 
                        onClick={(e) => dispatch({type: "deleted-achievement", educationId: education.id, achievementId: achievement.id})}
                        onChange={(e) => dispatch({type: "edited-achievement", educationId: education.id, achievementId: achievement.id, value: e.target.value})}/>
                    </li>)
                    )}

                    <li>
                        <button className="dropdown-content-add-button" >   
                            <AddSquare onClick={() => dispatch({type: 'added-achievement', educationId: education.id})}/>
                        </button>
                    </li>
                </ul>
            </label>
            <div className="dropdown-contents-buttons">
                <SmallButton name="Clear" onClick={() => dispatch({type: "cleared-all"})}/>
            </div>
            
        </>
    )
}