import { InputName } from '../constants/inputName';

function setDispatcher({
    red,
    blue,
    green,
    alpha,
    hoffSet,
    voffSet,
    blur,
    spread
}, iFor) {
    switch (iFor) {
        case InputName.RED:
            return red;
        case InputName.BLUE:
            return blue;
        case InputName.GREEN:
            return green;
        case InputName.ALPHA:
            return alpha;
        case InputName.H_OFFSET:
            return hoffSet;
        case InputName.V_OFFSET:
            return voffSet;
        case InputName.BLUR:
            return blur;
        case InputName.SPREAD:
            return spread
        default:
            return () => '';
    }
};

export { setDispatcher };