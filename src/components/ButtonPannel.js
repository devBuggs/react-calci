import './button_pannel.css';
import React from 'react';

const ButtonPannel = ({ children }) => {
    return (
        <div className="button-pannel">{ children }</div>
    );
}

export default ButtonPannel;