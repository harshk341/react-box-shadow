import { setUnit } from './setUnit';

function length(x, y, b, s) {
    return `${setUnit(x)} ${setUnit(y)} ${setUnit(b)} ${setUnit(s)}`;
};

export { length };