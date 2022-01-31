const length = [
    {
        inputFor: 'h-offset',
        inputType: 'number',
        maxValue: '100',
        minValue: '-100'
    },
    {
        inputFor: 'v-offset',
        inputType: 'number',
        maxValue: '100',
        minValue: '-100'
    },
    {
        inputFor: 'blur',
        inputType: 'number',
        maxValue: '100',
        minValue: '0'
    },
    {
        inputFor: 'spread',
        inputType: 'number',
        maxValue: '100',
        minValue: '0'
    }
];
const color = [
    {
        inputFor: 'Red',
        inputType: 'range',
        maxValue: '255',
        minValue: '0'
    },
    {
        inputFor: 'Blue',
        inputType: 'range',
        maxValue: '255',
        minValue: '0'
    },
    {
        inputFor: 'Green',
        inputType: 'range',
        maxValue: '255',
        minValue: '0'
    },
    {
        inputFor: 'Alpha',
        inputType: 'range',
        maxValue: '100',
        minValue: '0'
    }
];

export { length, color };