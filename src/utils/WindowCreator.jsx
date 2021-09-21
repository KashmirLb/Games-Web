import { Grid } from '@material-ui/core';
import React from 'react'
import Button from '../components/Tic-Tac-Toe-Game/Button'

function bigWindow (playerClicked, computerClicked, game, scoreboard) {
    return(
        <Grid container
        alignItems="center"
        justifyContent="center"
        className="big-window-container">
            <Grid item
            className="left-container"
            md={4}
            >
                <div style={{paddingLeft:"40%"}} >
                   <div> <Button type="player-button" text="Player vs Player" clickHandler={playerClicked} style={{margin:"10px"}} /></div>
                   <div> <Button type="player-button" text="Player vs Computer" clickHandler={computerClicked} style={{margin:"10px"}}/></div>
                </div>
            </Grid>   
            <Grid item
            className="center-container"
            md={4}
            >
                {game}
            </Grid>     
             <Grid item
            className="right-container"
            md={4}>
                {scoreboard}
            </Grid>        
        </Grid>
    )
}

function smallWindow (playerClicked, computerClicked, game, scoreboard) {
    return(
        <Grid container
        justifyContent="center"
        >
            <Grid item
            className="center-container"
            sm={10}
            xs={12}
            >
            {game}
            </Grid>   
        <Grid item 
            className="right-container"
            sm={10}
            xs={12}
            >
            {scoreboard}
        </Grid>   
        <Grid item 
        className="left-container"
        sm={10}
            xs={12}
            >
            <div>
                <Button type="player-button" text="Player vs Player" clickHandler={playerClicked}/>
                <Button type="player-button" text="Player vs Computer" clickHandler={computerClicked}/>
            </div>
        </Grid>       
    </Grid>
    )
}

export function windowCreator(playerClicked, computerClicked, game, scoreboard){

    if (window.innerWidth<=800) return smallWindow(playerClicked, computerClicked, game, scoreboard);
    else return bigWindow(playerClicked, computerClicked, game, scoreboard)
}
