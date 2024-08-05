import React from 'react';

const buttonStyles = {
    color: 'rgb(18, 255, 18)',
    backgroundColor: 'transparent',
    border: '0px',
    fontFamily: 'Courier',
    fontSize: '33pt'
};

export default function Button() {
    return (
        <button 
            data-testid="element-button"
            style={buttonStyles}
        >
            Wake up Neo...
        </button>
    );
}
