import {
    RED_COLOR,
    BLUE_COLOR,
    GREEN_COLOR,
    ALPHA
} from '../constants/ActionTypes';

const red = value => ({
    type: RED_COLOR,
    payload: { value }
});

const blue = value => ({
    type: BLUE_COLOR,
    payload: { value }
});

const green = value => ({
    type: GREEN_COLOR,
    payload: { value }
});

const alpha = value => ({
    type: ALPHA,
    payload: { value }
});

export {
    red,
    blue,
    green,
    alpha
};


