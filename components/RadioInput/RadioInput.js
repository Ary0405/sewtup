import './RadioInput.scss';

const RadioInput = ({ label, name, value, checked, onChange }) => {
    return (
        <label className="radio-input-label">
            <input
                type="radio"
                name={name}
                value={value}
                checked={checked}
                onChange={onChange}
            />
            <span className="radio-custom"></span>
            {label}
        </label>
    );
};

export default RadioInput;
