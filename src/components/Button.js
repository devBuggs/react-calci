import './button.css';
import React from 'react';

const Button = ({ className, onClick, value }) => {
    return ( 
        <button className={className} onClick={onClick}>{value}</button>
    );
};

export default Button;