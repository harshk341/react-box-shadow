import {
    RED_COLOR,
    BLUE_COLOR,
    GREEN_COLOR,
    ALPHA
} from '../constants/ActionTypes';

const Color = (state = {
    red_color: 0,
    blue_color: 0,
    green_color: 0,
    alpha: 0
}, { type, payload }) => {
    switch (type) {
        case RED_COLOR:
            return {
                ...state,
                red_color: payload.value
            };
        case BLUE_COLOR:
            return {
                ...state,
                blue_color: payload.value
            };
        case GREEN_COLOR:
            return {
                ...state,
                green_color: payload.value
            };
        case ALPHA:
            return {
                ...state,
                alpha: payload.value
            };
        default:
            return state;
    }
}

export default Color;