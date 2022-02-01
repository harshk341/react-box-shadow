import { connect } from "react-redux";
import { getLength } from '../../selectors/LengthSelector';
import { getColor } from '../../selectors/ColorSelector';
import {
    red,
    blue,
    green,
    alpha,
} from '../../actions/ColorAction';
import {
    hoffSet,
    voffSet,
    blur,
    spread
} from '../../actions/LengthActions';

const connectToStore = Component => {
    const mapStateToProps = state => ({
        ...getLength(state),
        ...getColor(state)
    });

    return connect(mapStateToProps, {
        red,
        blue,
        green,
        alpha,
        hoffSet,
        voffSet,
        blur,
        spread
    })(Component);
}

export default connectToStore;