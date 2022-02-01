import { InputName } from "./inputName";

const length = [
    {
        inputFor: InputName.H_OFFSET,
        inputType: 'range',
        maxValue: '100',
        minValue: '-100'
    },
    {
        inputFor: InputName.V_OFFSET,
        inputType: 'range',
        maxValue: '100',
        minValue: '-100'
    },
    {
        inputFor: InputName.BLUR,
        inputType: 'range',
        maxValue: '100',
        minValue: '0'
    },
    {
        inputFor: InputName.SPREAD,
        inputType: 'range',
        maxValue: '100',
        minValue: '0'
    }
];
const color = [
    {
        inputFor: InputName.RED,
        inputType: 'range',
        maxValue: '255',
        minValue: '0'
    },
    {
        inputFor: InputName.BLUE,
        inputType: 'range',
        maxValue: '255',
        minValue: '0'
    },
    {
        inputFor: InputName.GREEN,
        inputType: 'range',
        maxValue: '255',
        minValue: '0'
    },
    {
        inputFor: InputName.ALPHA,
        inputType: 'range',
        maxValue: '100',
        minValue: '0'
    }
];

export { length, color };