import React from 'react'
// import PropTypes from 'prop-types'
import Button from '../Button'
// import { player, computer } from '../Game'



const ActionButtons = ({clickHandler}) => {
    return <Button type={"action-button"} text={"Restart"} clickHandler={clickHandler}/>        
}

ActionButtons.propTypes = {

}

export default ActionButtons
