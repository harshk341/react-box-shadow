import React, { memo } from 'react';
import { Box, Snippet } from '../components';
import { Controls } from '../components';

const Main = (prop) => {
    return (
        <>
            <div className="app-content">
                <div className="app-content-wrapper">
                    <Box />
                    <Controls />
                    <Snippet />
                </div>
            </div>
        </>
    );
}
 
export default memo(Main);