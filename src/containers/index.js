import React, { memo } from 'react';
import { Box } from '../components';
import { Controls } from '../components';

const Main = (prop) => {
    return (
        <>
            <div className="app-content">
                <div className="app-content-wrapper">
                    <Box />
                    <Controls />
                </div>
            </div>
        </>
    );
}
 
export default memo(Main);