import React from 'react';
import { length, color } from '../constants/controls';
import Input from './Input';

const Controls = ({ }) => {

    const renderControl = (controls, title) => {
        controls = controls.map(
            (input, index) => {
                const {
                    inputFor,
                    inputType,
                    maxValue,
                    minValue
                } = input;
                return <Input
                    key={index}
                    inputType={inputType}
                    title={inputFor}
                    maxValue={maxValue}
                    minValue={minValue}
                />
            }
        )
        return (
            <div>
                <span>{title}</span>
                <div>
                    {controls}
                </div>
            </div>
        );
    }

    return (
        <>
            <div className="controls">
                {renderControl(length, 'Length')}
                {renderControl(color, 'Color')}
            </div>
        </>
    );
}

export default Controls;