import React from 'react'
// import PropTypes from 'prop-types'
import { Grid, Link, AppBar, Toolbar, IconButton } from '@material-ui/core'
import {Link as LinkRouter} from 'react-router-dom'


const AppFrame = ({ children }) => {
    return (
        <Grid container
            justifyContent="center"
            direction="row"
            className="head-and-page">
                <AppBar position="static">
                    <Toolbar variant="dense"
                    className="toolbar">
                         <IconButton color="inherit" aria-label="menu">
                            <Link 
                            to="/" 
                            color="inherit" 
                            aria-label="menu"
                            component={LinkRouter}>
                                Main Page
                            </Link>
                        </IconButton>
                    </Toolbar>
                </AppBar>
                <Grid item
                    xs={12}
                    className="page">
                        {children}
                </Grid>
        </Grid>
    )
}

// AppFrame.propTypes = {

// }

export default AppFrame
