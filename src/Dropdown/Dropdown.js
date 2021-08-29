import React, { useState } from 'react'
import DropdownButton from './DropdownButton/DropdownButton'
import DropdownItem from './DropdownButton/DropdownMenu/DropdownItem/DropdownItem'
import DropdownMenu from './DropdownButton/DropdownMenu/DropdownMenu'
import 'Dropdown/Dropdown.scss';
import 'Dropdown/DropdownButton/DropdownMenu/DropdownItem/DropdownItem.scss';

export default function Dropdown(props) {

    const [open, setOpen] = useState(false);

    return (
        <div>
            <DropdownButton open={open} setOpen={setOpen}>Dropdown Button</DropdownButton>
            <DropdownMenu open={open}>
                <DropdownItem item="HOME" />
                <DropdownItem item="ABOUT" />
                <DropdownItem item="FAQ" />
                <DropdownItem item="CONTACT" />
            </DropdownMenu>
        </div>
    )
}
