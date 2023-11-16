// Dropdown.js
import React, { useState } from 'react';
import './LocationDropDown.scss';

const Dropdown = ({ options, onSelect }) => {
    const [selectedOption, setSelectedOption] = useState(null);

    const handleSelect = (option) => {
        setSelectedOption(option);
        onSelect(option);
    };

    return (
        <div className="location-dropdown">
            <div className="selected-option" onClick={() => handleSelect(null)}>
                {selectedOption || 'Select an option'}
            </div>
            <ul className="options">
                {options.map((option) => (
                    <li key={option} onClick={() => handleSelect(option)}>
                        {option}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Dropdown;
