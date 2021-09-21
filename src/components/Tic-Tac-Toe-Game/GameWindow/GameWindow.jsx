import { Grid } from '@material-ui/core'
import React from 'react'
import TicGame from '../TicGame'

const GameWindow = ({playerScores, secondScores, versusPlayer}) => {
    return (

        <Grid container
            justifyContent="center"
            alignItems="center"
            direction="column">

            <Grid item
                className="game-title"
                >
                Tic-Tac-Toe
            </Grid>

            <Grid item
            className="game-game">
                <TicGame playerScores={playerScores} secondScores={secondScores} versusPlayer={versusPlayer}/>
            </Grid>

        </Grid>
    )
}

export default GameWindow
