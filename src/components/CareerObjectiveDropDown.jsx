import { useState } from "react"
import DropdownArrow from "../assets/dropdown-arrow.svg?react"
import { TextArea } from "./TextArea.jsx";
import { SmallButton } from "./SmallButton.jsx";

export function CareerObjectiveDropDown({handlers, details}) {
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
                <TextArea/>
                <div>
                    <SmallButton name="Clear" onClick={() => handlers.handleClear()}/>
                </div>
            </div>)}
        </div>
    )
}