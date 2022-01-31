import React, { memo } from 'react';
import { Snippet } from '../components';
import { Controls } from '../components';
import BoxContainer from './BoxContainer';

const Main = (prop) => {
    return (
        <>
            <div className="app-content">
                <div className="app-content-wrapper">
                    <BoxContainer />
                    <Controls />
                    <Snippet />
                </div>
            </div>
        </>
    );
}
 
export default memo(Main);