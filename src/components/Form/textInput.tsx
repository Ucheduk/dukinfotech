import React from 'react';

interface TextInputProps {
    touched?: boolean,
    valid?: boolean,
    value?: string,
    placeholder?: string,
    onChange?: ((event: React.ChangeEvent<HTMLTextAreaElement>) => void) | undefined
}
const TextInput = ({ touched, valid, value, placeholder, onChange }: TextInputProps) => {

    let formControl = "form-control";

    if (touched && !valid) {
        formControl = 'form-control control-error';
    }

    return (
        <div className="form-group">
            <textarea
                name="textarea" 
                id="textarea"
                value={value}
                placeholder={placeholder}
                onChange={onChange}
            />
            <div className={formControl}>This field is required</div>
        </div>
    );
}

export default TextInput;