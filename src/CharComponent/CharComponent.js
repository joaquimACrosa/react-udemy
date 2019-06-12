import React from 'react';


const charComponent = ( props ) => {

    return (
        <div className="charComponent" style={props.style} onClick={props.click}>
            <p>{props.character}</p>
        </div>
    )
};

export default charComponent;