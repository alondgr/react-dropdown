import React, { useState } from 'react';
import DropdownMenu from './DropdownMenu/DropdownMenu';
import 'Dropdown/DropdownButton/DropdownButton.scss';



export default function DropdownButton(props) {




    return (
        <div>
            <div className="button" onClick={() => props.setOpen(!props.open)}>{props.children}</div>
        </div>
    )
}

