import React from 'react'
import PropTypes from 'prop-types'
import Button from '../Button'

const ActionButtons = ({clickHandler}) => {
    return <Button type={"action-button"} text={"Restart"} clickHandler={clickHandler}/>        
}

ActionButtons.propTypes = {
    clickHandler: PropTypes.func.isRequired
}

export default ActionButtons
