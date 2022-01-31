import { connect } from "react-redux";
import { Box } from '../components';
import { getLength } from '../selectors/LengthSelector';
import { getColor } from '../selectors/ColorSelector';

const mapStateToProps = state => ({
    ...getLength(state),
    ...getColor(state)
});

export default connect(mapStateToProps,{})(Box);