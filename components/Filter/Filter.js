// Filter.js
import React from "react";
import styles from "./Filter.scss";
import DropDown from "@/components/LocationDropDown/LocationDropDown";
import CheckBox from "@/components/CheckBox/CheckBox";
import RadioInput from "@/components/RadioInput/RadioInput";
import DashHeader from "@/components/DashTable/DashHeader/DashHeader";
import Image from "next/image";
import PricingSlider from "@/components/PricingSlider/PricingSlider";

const Filter = ({ filterData }) => {
    // Provide default values if filterData is not provided
    filterData = filterData || {
        locations: {
            options: ['Greater Noida, India'],
            onSelect: (selectedLocation) => console.log(`Selected Location: ${selectedLocation}`),
        },
        experienceLevels: [
            { label: "Entry Level (390)" },
            { label: "Intermediate (441)" },
            { label: "Expert (129)" },
        ],
        expectedSalary: [
            { label: "Under $1000" },
            { label: "$1000-$10000" },
            { label: "My own preference" },
        ],
    };

    return (
        <div className="Filter">
            <div className='filter-box'>
                <div className="filterHeaderRow">
                    <div className="filterHeader">
                        Filter
                    </div>
                    <div className="filterClearButton">
                        Clear all
                    </div>
                </div>
                <div className="locationsContainer">
                    <div className="filterHeader">
                        Locations
                    </div>
                    <DropDown {...filterData.locations}>random text</DropDown>
                </div>
                <div className="experienceContainer">
                    <div className="filterHeader">
                        Experience Levels
                    </div>
                    {filterData.experienceLevels.map((level, index) => (
                        <CheckBox key={index} label={level.label} />
                    ))}
                </div>
                <div className="salaryContainer">
                    <div className="filterHeader">
                        Expected Salary
                    </div>
                    <div className="radioInputContainer">
                        {filterData.expectedSalary.map((salary, index) => (
                            <RadioInput key={index} label={salary.label} />
                        ))}
                    </div>
                </div>
                <div className="sliderContainer">
                    <PricingSlider />
                </div>
            </div>
        </div>
    );
};

export default Filter;
