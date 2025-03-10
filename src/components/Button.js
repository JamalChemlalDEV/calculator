import React from "react";
import '../styles/Button.css'

function Button(props) {

    const isOperador = value => {
        return isNaN(value) && (value !== '.') && (value !== '=');
    }

    return (
        <button 
        className={`button-container ${isOperador(props.children) && 'operator'}`}
        onClick={() => props.operateClick(props.children)}>
            {props.children}
        </button>
    );
}

export default Button;