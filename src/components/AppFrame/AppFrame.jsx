import React from 'react'
// import PropTypes from 'prop-types'
import { Grid, Link, AppBar, Toolbar } from '@material-ui/core'
import {Link as LinkRouter} from 'react-router-dom'
import { IconContext } from 'react-icons/lib'
import { useAuth } from '../../contexts/AuthContext'
import NoUserToolbar from '../User/NoUserToolbar'
import LogoutToolbar from '../User/LogoutToolbar'
 
const AppFrame = ({ children }) => {

    const { currentUser } = useAuth();

    return (
        <Grid container
            justifyContent="center"
            direction="column"
            className="head-and-page">
                <Grid item
                xs={12}>
                <AppBar position="static">
                    <Toolbar variant="dense"
                    className="toolbar"
                    style={{display:"flex", justifyContent:"space-between"}}>
                         <div color="inherit" aria-label="menu" style={{width:"20vw"}} >
                            <Link 
                            to="/" 
                            color="inherit" 
                            aria-label="menu"
                            component={LinkRouter}>
                                <IconContext.Provider value={{size:'2em'}}>
                                    <button className="toolbar-button">Main Page</button>
                                </IconContext.Provider>
                            </Link>
                        </div>
                        
                        <div>
                            {!currentUser ? <NoUserToolbar/> : <LogoutToolbar/> }
                        </div>
                    </Toolbar>
                </AppBar>
                </Grid>
                <Grid item
                    xs={12}
                    className="page">
                        {children}
                </Grid>
        </Grid>
    )
}

export default AppFrame
