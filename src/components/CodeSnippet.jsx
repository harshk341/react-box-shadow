import React from 'react';
import PropTypes from 'prop-types';
import withContainer from './HOCs/withContainer';

const Snippet = ({
    shadow
}) => {

    return (
        <div className="snippet">
            <div>
                <button type="button">Copy</button>
                <div className="snippet-value">
                    {`box-shadow: ${shadow}`}
                </div>
            </div>
        </div>
    );
}
Snippet.propTypes = {
    shadow: PropTypes.string
}

export default withContainer(Snippet);