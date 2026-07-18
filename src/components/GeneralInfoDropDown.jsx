import { useState } from "react"
import DropdownArrow from "../assets/dropdown-arrow.svg?react"
import { TextInput } from "./TextInput.jsx";
import { SmallButton } from "./SmallButton.jsx";

export function GeneralInfoDropDown({details, handlers}) {
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
                    <TextInput className="text-input" placeholder="full name..." value={details.name} onChange={(e) => handlers.onNameChange(e)}/>
                </label>
                <label htmlFor="phone">
                    <h2>Phone</h2>
                    <TextInput className="text-input" placeholder="04123456789..." value={details.phone} onChange={(e) => handlers.onPhoneChange(e)}/>
                </label>
                <label htmlFor="Email">
                    <h2>Email</h2>
                    <TextInput className="text-input" placeholder="example@gmail.com..." value={details.email} onChange={(e) => handlers.onEmailChange(e)}/>
                </label>
                <label htmlFor="LinkedIn">
                    <h2>LinkedIn</h2>
                    <TextInput className="text-input" placeholder="url..." value={details.linkedIn} onChange={(e) => handlers.onLinkedInChange(e)}/>
                </label>
                <label htmlFor="GitHub">
                    <h2>GitHub</h2>
                    <TextInput className="text-input" placeholder="url..." value={details.gitHub} onChange={(e) => handlers.onGitHubChange(e)}/>
                </label>

                <div>
                    <SmallButton name="Clear" onClick={() => handlers.handleClear()}/>
                </div>
            </div>)}
        </div>

    )
}