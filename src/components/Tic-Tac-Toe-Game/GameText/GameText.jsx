import React from 'react'
import PropTypes from 'prop-types'

const GameText = ({text}) => {
    return (
        <div className="win-text-container">
            <span className="win-text">{text}</span>
        </div>
    )
}

GameText.propTypes = {
    text: PropTypes.string.isRequired
}

export default GameText
