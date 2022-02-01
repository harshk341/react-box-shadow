import { connect } from "react-redux";
import { getLength } from '../../selectors/LengthSelector';
import { getColor } from '../../selectors/ColorSelector';

const connectToStore = Component => {
    const mapStateToProps = state => ({
        ...getLength(state),
        ...getColor(state)
    });

    return connect(mapStateToProps)(Component);
}
 
export default connectToStore;