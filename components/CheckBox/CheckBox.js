import DropDown from "@/components/LocationDropDown/LocationDropDown";
import "./CheckBox.scss"
import DashHeader from "@/components/DashTable/DashHeader/DashHeader";
import Image from "next/image";

const Checkbox = ({ label, value, onChange }) => {
    return (
        <label className="custom-checkbox-container">
            <input type="checkbox" checked={value} onChange={onChange} />
            <div className="custom-checkbox-text">
                {label}
            </div>
        </label>
    );
};
export default Checkbox;
