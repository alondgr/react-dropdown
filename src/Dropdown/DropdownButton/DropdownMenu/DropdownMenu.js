import React, {useState} from 'react'
import DropdownItem from './DropdownItem/DropdownItem';
import 'Dropdown/DropdownButton/DropdownMenu/DropdownMenu.scss';


export default function DropdownMenu(props) {

    return (
        <div className= {props.open? "menu" : "none"}>
            {props.open && props.children}
        </div>
    )
}

