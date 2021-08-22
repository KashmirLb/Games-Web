import { Grid } from '@material-ui/core'
import React from 'react'
// import PropTypes from 'prop-types'



const GameWindow = () => {
    return (<Grid container
        direction="row"
        alignItems="center"
        justifyContent="center">
            <Grid container item
            xs={10}
            md={12}
            className="game-window">
                <Grid item container
                className="game-title"
                alignItems="center"
                justifyContent="center">
                    <Grid item>
                        Title
                    </Grid>
                </Grid>
                <Grid item 
                className="game-game">
                    <div>This is the Game</div>
                </Grid>
                <Grid item container
                className="game-buttons"
                direction="row"
                alignItems="center"
                justifyContent="center">
                    <Grid item>
                        Buttons
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

// GameWindow.propTypes = {

// }

export default GameWindow
