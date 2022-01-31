import React, { memo } from 'react';

const Input = ({
    title,
    maxValue,
    minValue,
    inputType
}) => {
    return (
        <div>
            <span>{title}</span>
            <input type={inputType} max={maxValue} min={minValue} />
        </div>
    );
}
 
export default memo(Input);