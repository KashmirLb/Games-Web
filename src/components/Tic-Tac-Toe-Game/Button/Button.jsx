import React from 'react'

const Button = ({type,text,clickHandler,disabled}) => {
    return (
        <button className={type} onClick={clickHandler} disabled={disabled}>
            <span>{text}</span>
        </button>
    )
}

export default Button
