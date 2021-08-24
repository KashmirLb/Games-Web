import React, { useState } from 'react'
import { Grid } from '@material-ui/core'
import GameWindow from '../GameWindow'
import ScoreBoard from '../ScoreBoard'

// import PropTypes from 'prop-types'



const viewMount = (component, player, computer) =>{

    if(window.innerWidth<=800){
        return(
            <Grid container>
                <Grid item
                    xs={12}
                    md={4}
                    className="center-container">
                        {component}
                </Grid>   
                <Grid item container
                justifyContent="center"
                alignItems="center"
                    xs={12}
                    md={2}
                    className="right-container">
                        <Grid item
                        xs={10}>
                            <ScoreBoard type="scoreboard-container-small" player={player} computer={computer}/>
                        </Grid> 
                </Grid>   
                <Grid item container
                justifyContent="center"
                alignItems="center"
                    xs={12}
                    md={2}
                    className="left-container">
                        <Grid item>
                       
                        </Grid>
                </Grid>       
            </Grid>
        )
    }
    else return(
        <Grid container>
                <Grid item container
                justifyContent="center"
                alignItems="center"
                    xs={12}
                    md={4}
                    className="left-container">
                        <Grid item>
                     
                        </Grid>
                </Grid>   
            <Grid item
                xs={12}
                md={4}
                className="center-container">
                    {component}
            </Grid>     
            <Grid item container
                alignItems="center"
                    xs={12}
                    md={4}
                    className="right-container">
                     <Grid item 
                     md={6}>
                        <ScoreBoard type="scoreboard-container-big" player={player} computer={computer}/>
                    </Grid> 
            </Grid>        
        </Grid>
    )
}

const TicGameContainer = () => {

    const [playerPoints, setPlayerPoints] = useState(0);
    const [computerPoints, setComputerPoints] = useState(0);

    const computerPointsF = () =>{
        setComputerPoints(computerPoints+1)
    }

    const playerPointsF = () =>{
        setPlayerPoints(playerPoints+1)
    }


    return viewMount(<GameWindow setPlayer={playerPointsF} setComputer={computerPointsF}/>, playerPoints, computerPoints);
}

// GameContainer.propTypes = {

// }

export default TicGameContainer
