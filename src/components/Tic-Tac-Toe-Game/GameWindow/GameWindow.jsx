import { Grid } from '@material-ui/core'
import React from 'react'
import TicGame from '../TicGame'
// import PropTypes from 'prop-types'



const GameWindow = ({setPlayer, setComputer}) => {
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
                        Tic-Tac-Toe
                    </Grid>
                </Grid>
                <Grid item container
                justifyContent="center"
                className="game-game">
                    <Grid item>
                        <TicGame sp={setPlayer} sc={setComputer}/>
                    </Grid>
                    
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
