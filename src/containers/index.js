import React, { memo } from 'react';
import BoxContainer from './BoxContainer';
import ControlContainer from './ControlContainer';
import SnippetContainer from './SnippetContainer';

const Main = (prop) => {
    return (
        <>
            <div className="app-content">
                <div className="app-content-wrapper">
                    <BoxContainer />
                    <ControlContainer />
                    <SnippetContainer />
                </div>
            </div>
        </>
    );
}
 
export default memo(Main);