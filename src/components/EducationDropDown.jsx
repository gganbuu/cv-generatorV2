import { useState } from "react"
import { useReducer } from "react";
import DropdownArrow from "../assets/dropdown-arrow.svg?react"
import AddSquare from "../assets/add-square.svg?react"
import MinusSign from "../assets/minus-sign.svg?react"
import { DateInput } from "./inputs/DateInput.jsx";
import { TextInput } from "./inputs/TextInput.jsx";
import { SmallButton } from "./buttons/SmallButton.jsx";
import { educationReducer, educationInitialState } from "./reducers/educationReducer.jsx";

export function EducationDropDown({dispatch, details}) {
    const [educationState, educationDispatch] = useReducer(educationReducer, educationInitialState)
    
    const [open, setOpen] = useState(false);
    
    const handleOpen = () => {
        open ? setOpen(false): setOpen(true);
    }

    const [educationBlocks, setEducationBlocks] = useState([<EducationBlock id={crypto.randomUUID()} handleDeleteEducationBlock={(e) => handleDeleteEducationBlock(e)}/>])
    
    const handleAddEducationBlocks = () => {
        setEducationBlocks([...educationBlocks, <EducationBlock id={crypto.randomUUID()} handleDeleteEducationBlock={(e) => handleDeleteEducationBlock(e)}/>])
    }

    const handleDeleteEducationBlock = (e) => {
        const editedEducationBlocks = [...educationBlocks.filter(block => block.props.id != e.target.id)]
        setEducationBlocks(editedEducationBlocks)
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
                    {educationBlocks.map(block => {return (<div className="dropdown-contents" key={block.props.id}>{block}</div>)})}
                    <button className="dropdown-content-add-button" onClick={handleAddEducationBlocks}>
                        <AddSquare/>
                    </button>
                </>
                )}
            </div>
        </>
    )
}

function EducationBlock({id, handleDeleteEducationBlock, dispatch}) {
    const [educationState, educationDispatch] = useReducer(educationReducer, educationInitialState)

    return (
        <>
            <label htmlFor="degree">
                <div className="buttons-container">
                    <h2>Degree</h2>
                    <button id={id} className="dropdown-content-delete-button" onClick={(e) => handleDeleteEducationBlock(e)}><MinusSign/></button>
                </div>
                <TextInput className="text-input" placeholder="..." value={educationState.degree} onChange={(e) => dispatch({type: 'changed-degree', value: e.target.value})}/>
            </label>
                
            <label htmlFor="university">
                <h2>University</h2>
                <TextInput className="text-input" placeholder="..." value={educationState.university} onChange={(e) => dispatch({type: 'changed-university', value: e.target.value})}/>
            </label>
            <div className='date-box'>
                <label htmlFor="time-start">
                    <h2>Time Start</h2>
                    <DateInput className="date-input"></DateInput>
                </label>
                <label htmlFor="time-end">
                    <h2>Time End</h2>
                    <DateInput className="date-input"></DateInput>
                </label>
            </div>
            
        </>
    )
}