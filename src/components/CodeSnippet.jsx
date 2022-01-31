import React from 'react';

const Snippet = ({ }) => {
    return (
        <div className="snippet">
            <div>
                <button type="button">Copy</button>
                <div className="snippet-value">
                    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
                </div>
            </div>
        </div>
    );
}

export default Snippet;