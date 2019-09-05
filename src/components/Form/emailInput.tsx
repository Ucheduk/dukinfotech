import React from 'react';

interface EmailInputProps {
    touched?: boolean,
    valid?: boolean,
    value?: string,
    placeholder?: string,
    onChange?: ((event: React.ChangeEvent<HTMLInputElement>) => void) | undefined
}

const EmailInput = ({ touched, valid, value, placeholder, onChange}: EmailInputProps) => {

    let formControl = "form-control";

    if (touched && !valid) {
        formControl = 'form-control control-error';
    }

    return (
        <div className="form-group">
            <label htmlFor="email"><i className="zmdi zmdi-email"></i></label>
            <input type="email" 
                name="email"
                id="email"
                value={value}
                placeholder={placeholder}
                onChange={onChange}
            />
            <div className={formControl}>Email address is invalid</div>
        </div>
    );
}

export default EmailInput;