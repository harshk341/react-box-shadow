import React, { memo } from 'react';

const Box = ({}) => {
    return (
        <div className="box">
            <span>Box</span>
        </div>
    );
}
 
export default memo(Box);