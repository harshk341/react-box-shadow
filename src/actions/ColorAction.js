import {
    RED_COLOR,
    BLUE_COLOR,
    GREEN_COLOR,
    ALPHA
} from '../constants/ActionTypes';

const hoffSet = value => ({
    type: RED_COLOR,
    payload: { value }
});

const voffSet = value => ({
    type: BLUE_COLOR,
    payload: { value }
});

const blue = value => ({
    type: GREEN_COLOR,
    payload: { value }
});

const alpha = value => ({
    type: ALPHA,
    payload: { value }
});

export {
    hoffSet,
    voffSet,
    blue,
    spread
};


