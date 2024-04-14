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
