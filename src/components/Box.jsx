import React from 'react';
import PropTypes from 'prop-types';
import withContainer from './HOCs/withContainer';

const Box = ({
    shadow
}) => {
   
    return (
        <div style={{boxShadow: shadow}} className="box">
            <span>Box</span>
        </div>
    );
}
Box.propTypes ={
    shadow: PropTypes.string
}

export default withContainer(Box);