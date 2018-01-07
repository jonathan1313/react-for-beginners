import React from 'react';

const divStyle = {
    margin: '40px',
    border: '5px solid pink'
}

// const pStyle = {fontSize: '15px', textAlign: 'center'}

const Box = () => (
    <div style={divStyle}>
        <p style={{fontSize: '15px', textAlign: 'center'}}>Get started with inline style</p>
    </div>
);
 
export default Box;