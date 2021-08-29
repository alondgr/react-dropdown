import React from 'react';
import 'Dropdown/DropdownButton/DropdownMenu/DropdownItem/DropdownItem.scss';

export default function DropdownItem({item}) {
    return (
        <div className="item">
            {item}
        </div>
    )
}
