import React from 'react'
import { IconContext } from 'react-icons/lib'
import { Link } from '@material-ui/core'
import {Link as LinkRouter} from 'react-router-dom'

const NoUserToolbar = () => {
    return (
        <div color="inherit" aria-label="menu">
            <div style={{display:"inline"}}>
                <Link 
                to="/login" 
                color="inherit" 
                aria-label="menu"
                component={LinkRouter}>
                    <IconContext.Provider value={{size:'2em'}} >
                        <button className="toolbar-button" >Login</button>
                    </IconContext.Provider>
                </Link>      
            </div>
            <div style={{display:"inline", margin:"1vw"}}>
                <Link 
                to="/register" 
                color="inherit" 
                aria-label="menu"
                component={LinkRouter}>
                    <IconContext.Provider value={{size:'2em'}}>
                        <button className="toolbar-button">Register</button>
                    </IconContext.Provider>
                </Link>
            </div>
        </div>
    )
}

export default NoUserToolbar
