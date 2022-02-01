import React, { memo } from 'react';
import { Controls } from '../components';
import BoxContainer from './BoxContainer';
import SnippetContainer from './SnippetContainer';

const Main = (prop) => {
    return (
        <>
            <div className="app-content">
                <div className="app-content-wrapper">
                    <BoxContainer />
                    <Controls />
                    <SnippetContainer />
                </div>
            </div>
        </>
    );
}
 
export default memo(Main);