import { useState } from "react"
import DropdownArrow from "../assets/dropdown-arrow.svg?react"
import { TextArea } from "./inputs/TextArea.jsx";
import { SmallButton } from "./buttons/SmallButton.jsx";

export function CareerObjectiveDropDown({dispatch, details}) {
    const [open, setOpen] = useState(false);
    
    const handleOpen = () => {
        open ? setOpen(false): setOpen(true);
    }
    
    return (
        <div className="dropdown-container">
            <div className="dropdown">
                <h1>Career Objective</h1>
                <button className="dropdown-arrow-button flip" onClick={handleOpen}>
                    <DropdownArrow/>
                </button>
            </div>
            {open && (
            <div className="dropdown-contents">
                <TextArea dispatch={dispatch} value={details} onChange={(e) => dispatch({type: 'changed-text', value: e.target.value})}/>
                <div className="dropdown-contents-buttons">
                    <SmallButton name="Clear" onClick={() => dispatch({type: 'cleared-all'})}/>
                </div>
            </div>)}
        </div>
    )
}