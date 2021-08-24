import React from 'react'
// import PropTypes from 'prop-types'

const Button = ({type,text,clickHandler,disabled}) => {
    return (
        <button className={type} onClick={clickHandler} disabled={disabled}>
            <span>{text}</span>
        </button>
    )
}

// Button.propTypes = {

// }

export default Button
