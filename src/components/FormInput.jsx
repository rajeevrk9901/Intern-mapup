import React from "react";

const FormInput = ({ value, onChange, onSubmit }) => {

    const handleInputChange = (event) => {
        onChange(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit();
    };

    return (
        <form onSubmit={handleSubmit}>
            <select value={value} onChange={handleInputChange}>
                <option value="usa">United States</option>
                <option value="india">India</option>
                <option value="uk">United Kingdom</option>
            </select>
            <button type="submit">Load</button>
        </form>
    );
};

export default FormInput;
