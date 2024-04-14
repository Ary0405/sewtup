import "./Filter.scss";
import DropDown from "@/components/LocationDropDown/LocationDropDown";

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
            </div>
        </div>
    );
};

export default Filter;
