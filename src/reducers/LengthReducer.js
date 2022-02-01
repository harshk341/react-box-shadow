import {
    H_OFFSET,
    V_OFFSET,
    BLUR,
    SPREAD
} from '../constants/ActionTypes';

const Length = (state = {
    h_offset: 0,
    v_offset: 0,
    blur_ef: 0,
    spread_ef: 0
}, { type, payload }) => {
    switch (type) {
        case H_OFFSET:
            return {
                ...state,
                h_offset: payload.value
            };
        case V_OFFSET:
            return {
                ...state,
                v_offset: payload.value
            };
        case BLUR:
            return {
                ...state,
                blur_ef: payload.value
            };
        case SPREAD:
            return {
                ...state,
                spread_ef: payload.value
            };
        default:
            return state;
    }
}

export default Length;