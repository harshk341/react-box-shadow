import {
    H_OFFSET,
    V_OFFSET,
    BLUR,
    SPREAD
} from '../constants/ActionTypes';

const hoffSet = value => ({
    type: H_OFFSET,
    payload: { value }
});

const voffSet = value => ({
    type: V_OFFSET,
    payload: { value }
});

const blue = value => ({
    type: BLUR,
    payload: { value }
});

const spread = value => ({
    type: SPREAD,
    payload: { value }
});

export {
    hoffSet,
    voffSet,
    blue,
    spread
};


