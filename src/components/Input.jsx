import React, { memo, useState } from 'react';

const Input = ({
    title,
    maxValue,
    minValue,
    inputType,
    dispatcher
}) => {

    const [inputValue, setInputValue] = useState(0);

    const handleChange = event => {
        const { target } = event;
        const { value } = target;
        
        setInputValue(value);
        dispatcher(value);
    }

    return (
        <div>
            <span>{title}</span>
            <input
                type={inputType}
                value={inputValue}
                max={maxValue}
                min={minValue}
                onChange={handleChange}
            />
        </div>
    );
}

export default memo(Input);