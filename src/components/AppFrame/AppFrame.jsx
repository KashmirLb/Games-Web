import React from 'react'
// import PropTypes from 'prop-types'
import { Grid, AppBar, Toolbar } from '@material-ui/core'


const AppFrame = ({ children }) => {
    return (
        <Grid container
            justifyContent="center"
            direction="row"
            className="head-and-page">
                <AppBar position="static">
                    <Toolbar variant="dense"
                    className="toolbar">
                        Whats uuuuup!
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
