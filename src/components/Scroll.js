import React from 'react';

const Scroll = (props) => {
    return  (
        /*This is how we make the component Scrollable */
        <div style={{overflowY: 'scroll', border: '1px solid black', height: '500px'}}>
            {props.children}
        </div>
    );
}

export default Scroll;