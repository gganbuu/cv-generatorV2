import { useState } from "react"
import DropdownArrow from "../assets/dropdown-arrow.svg?react"
import { TextInput } from "./inputs/TextInput.jsx";
import { SmallButton } from "./buttons/SmallButton.jsx";

export function GeneralInfoDropDown({details, dispatch}) {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        open ? setOpen(false): setOpen(true);
    }

    return (
        <div className="dropdown-container">
            <div className="dropdown">
                <h1>General Information</h1>
                <button className="dropdown-arrow-button flip" onClick={handleOpen}>
                    <DropdownArrow/>
                </button>
            </div>
            {open && (
            <div className="dropdown-contents">
                <label htmlFor="name">
                    <h2>Name</h2>
                    <TextInput className="text-input" placeholder="full name..." value={details.name} onChange={(e) => dispatch({type: 'changed-name', value: e.target.value})}/>
                </label>
                <label htmlFor="phone">
                    <h2>Phone</h2>
                    <TextInput className="text-input" placeholder="04123456789..." value={details.phone} onChange={(e) => dispatch({type: 'changed-phone', value: e.target.value})}/>
                </label>
                <label htmlFor="Email">
                    <h2>Email</h2>
                    <TextInput className="text-input" placeholder="example@gmail.com..." value={details.email} onChange={(e) => dispatch({type: 'changed-email', value: e.target.value})}/>
                </label>
                <label htmlFor="LinkedIn">
                    <h2>LinkedIn</h2>
                    <TextInput className="text-input" placeholder="url..." value={details.linkedIn} onChange={(e) => dispatch({type: 'changed-linkedIn', value: e.target.value})}/>
                </label>
                <label htmlFor="GitHub">
                    <h2>GitHub</h2>
                    <TextInput className="text-input" placeholder="url..." value={details.gitHub} onChange={(e) => dispatch({type: 'changed-gitHub', value: e.target.value})}/>
                </label>
                <div className="dropdown-contents-buttons">
                    <SmallButton name="Clear" onClick={() => dispatch({type: 'cleared-all'})}/>
                </div>
            </div>)}
        </div>

    )
}