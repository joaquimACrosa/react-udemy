import React from 'react';


const charComponent = ( props ) => {

    return (
        <div className="charComponent" style={props.style}>
            <p>{props.children}</p>
        </div>
    )
};

export default charComponent;