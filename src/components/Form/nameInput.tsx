import React from 'react';

interface NameInputProps {
    touched?: boolean,
    valid?: boolean,
    value?: string,
    placeholder?: string,
    onChange?: ((event: React.ChangeEvent<HTMLInputElement>) => void) | undefined
}

const NameInput = ({ touched, valid, value, placeholder, onChange }: NameInputProps) => {

    let formControl = "form-control";

    if (touched && !valid) {
        formControl = 'form-control control-error';
    }

    return (
        <div className="form-group">
            <label htmlFor="name"><i className="zmdi zmdi-account"></i></label>
            <input type="text"
            name="name"
            id="name"
            value={value}
            placeholder={placeholder}
            onChange={onChange}
            />
            <div className={formControl}>Minimum of 3 letters</div>
        </div>
    );
}

export default NameInput;