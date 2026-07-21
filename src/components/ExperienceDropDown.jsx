import { useState } from "react"
import DropdownArrow from "../assets/dropdown-arrow.svg?react"
import AddSquare from "../assets/add-square.svg?react"
import MinusSign from "../assets/minus-sign.svg?react"
import { BigButton } from "./buttons/BigButton.jsx"

import { DateInput } from "./inputs/DateInput.jsx";
import { TextInput } from "./inputs/TextInput.jsx";

import { Achievement } from "./Achievement.jsx";
import { SmallButton } from "./buttons/SmallButton.jsx"

export function ExperienceDropDown({dispatch, details}) {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        open ? setOpen(false): setOpen(true);
    }

    return (
        <>
            <div className="dropdown-container">
                <div className="dropdown">
                    <h1>Experience</h1>
                    <button className="dropdown-arrow-button" onClick={handleOpen}>
                        <DropdownArrow/>
                    </button>
                </div>
                {open && (
                <>
                    {details.map(experience => {return (<div className="dropdown-contents" key={experience.id}>
                                                            <ExperienceBlock experience={experience} dispatch={dispatch}/>
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

export function ExperienceBlock({experience, dispatch}) {
    return (
        <>
            <label htmlFor="role">
                <div className="buttons-container">
                    <h2>Role</h2>
                    <button className="dropdown-content-delete-button" onClick={(e) => dispatch({type: 'deleted-block', id: experience.id})}><MinusSign/></button>
                </div>
                <TextInput className="text-input" placeholder="..." value={experience.details.role} onChange={(e) => dispatch({type: 'changed-role', id: experience.id, value: e.target.value})}/>
            </label>

            <label htmlFor="location">
                <h2>Location</h2>
                <TextInput className="text-input" placeholder="..." value={experience.details.location} onChange={(e) => dispatch({type: 'changed-location', id: experience.id, value: e.target.value})}/>
            </label>

            <div className='date-box'>
                <label htmlFor="time-start">
                    <h2>Time Start</h2>
                    <DateInput className="date-input" value={experience.details.timeStart} onChange={(e) => dispatch({type:'changed-time-start', id: experience.id, value: e.target.value})}/>
                </label>
                <label htmlFor="time-end">
                    <h2>Time End</h2>
                    <DateInput className="date-input" value={experience.details.timeEnd} onChange={(e) => dispatch({type:'changed-time-end', id: experience.id, value: e.target.value})}/>
                </label>
            </div>

            <label htmlFor="achievements">
                <h2>Achievements</h2>
                <ul className='achievements-box'>
                   {experience.details.achievements.map(achievement =>
                    (<li key={achievement.id}>
                        <Achievement value={achievement.description} 
                        onChange={(e) => dispatch({type: "edited-achievement", experienceId: experience.id, achievementId: achievement.id, value: e.target.value})}
                        onClick={() => dispatch({type: "deleted-achievement", experienceId: experience.id, achievementId: achievement.id})}
                        />
                    
                    </li>)
                    )}

                    <li>
                        <button className="dropdown-content-add-button" onClick={() => dispatch({type: "added-achievement", experienceId: experience.id})}>
                            <AddSquare/>
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
