import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import withContainer from './HOCs/withContainer';
import { copyToClipboard } from '../helpers';

const Snippet = ({
    shadow
}) => {

    const [isCopied, setIsCopied] = useState(false);
    const elem = useRef();

    const handleClick = () => {
        if (!isCopied) {
            setIsCopied(true);
            copyToClipboard(elem);
        }
    }

    useEffect(() => {
        setIsCopied(false);
    }, [shadow]);

    return (
        <div className="snippet">
            <div>
                <button type="button" onClick={handleClick}>{isCopied ? 'Copied' : 'Copy'}</button>
                <div ref={elem} className="snippet-value">
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