import { Grid } from '@material-ui/core'
import React from 'react'
// import PropTypes from 'prop-types'



const GameWindow = () => {
    return (
        <Grid container
        justifyContent="center">
            <Grid item container
            direction="column"
            alignItems="center"
            xs={10}
            md={8}
            className="game-window">
                <Grid item container
                className="game-title"
                xs={2}
                md={3}
                direction="row"
                alignItems="center"
                justifyContent="center">
                    <Grid item>
                        Title
                    </Grid>
                </Grid>
                <Grid item
                xs={8}
                md={6}
                className="game-game">
                    Game
                </Grid>
                <Grid item container
                xs={2}
                md={3}
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
