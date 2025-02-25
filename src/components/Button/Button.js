import React from "react";
import './Button.css';

const Button = ({ color, link, text, width }) => {
    return (
        <div className="button-container">
            <a href={link} className={`button button-${color} button-${width}`}>{text}</a>
        </div>
    );
}

export default Button;
