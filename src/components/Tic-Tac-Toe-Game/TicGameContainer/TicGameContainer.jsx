import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Grid } from '@material-ui/core'
import GameWindow from '../GameWindow'
import ScoreBoard from '../ScoreBoard'
import { useHistory } from 'react-router-dom';

var buttonOption="";

const viewMount = (component, player, computer, vsPlayer, vsComputer, second) =>{

    const mountButtons = () => (
        <div>
            <button className="action-button" onClick={vsPlayer}>Player vs Player</button>
            <button className="action-button" onClick={vsComputer}>Player vs Computer</button>
        </div>
    )
 
    if(window.innerWidth<=800){
        buttonOption=<ScoreBoard type="scoreboard-container-small" player={player} computer={computer} second={second}/>
        return(
            <Grid container>
                <Grid item
                    xs={12}
                    md={4}
                    className="center-container"
                    >
                    {component}
                </Grid>   
                <Grid item container
                    justifyContent="center"
                    alignItems="center"
                    xs={12}
                    md={2}
                    className="right-container"
                    >
                    <Grid item
                        xs={12}
                        >
                        -
                    </Grid>
                    <Grid item
                        xs={12}
                        >
                        <button className="action-button" onClick={vsPlayer}>Player vs Player</button>
                        <button className="action-button" onClick={vsComputer}>Player vs Computer</button>
                    </Grid> 
                </Grid>   
                <Grid item container
                    justifyContent="center"
                    alignItems="center"
                    xs={12}
                    md={2}
                    className="left-container"
                    >
                    <Grid item>
                    </Grid>
                </Grid>       
            </Grid>
        )
    }
    else {
        buttonOption=mountButtons();
        return(
            <Grid container>
                <Grid item container
                    justifyContent="center"
                    alignItems="center"
                    xs={12}
                    md={4}
                    className="left-container"
                    >
                    <Grid item>
                    </Grid>
                </Grid>   
                <Grid item
                    xs={12}
                    md={4}
                    className="center-container"
                    >
                    {component}
                </Grid>     
                <Grid item container
                    alignItems="center"
                    xs={12}
                    md={4}
                    className="right-container"
                    >
                    <Grid item 
                        md={6}
                        >
                        <ScoreBoard type="scoreboard-container-big" player={player} computer={computer} second={second}/>
                    </Grid> 
                </Grid>        
            </Grid>
        )
    }
}

const TicGameContainer = ({vsP, second}) => {

    const [playerPoints, setPlayerPoints] = useState(0);
    const [computerPoints, setComputerPoints] = useState(0);

    const history = useHistory();
    
    const vsComputer = () =>{
        history.push("/tic-game1")
        window.location.reload(false)
    }

    const vsPlayer = () =>{
        history.push("/tic-game2")
        window.location.reload(false)
    }

    const computerPointsF = () =>{
        setComputerPoints(computerPoints+1)
    }

    const playerPointsF = () =>{
        setPlayerPoints(playerPoints+1)
    }

    const gameWindowMount = <GameWindow setPlayer={playerPointsF} setComputer={computerPointsF} buttonOption={buttonOption} playingVs={vsP}/>

    return viewMount(gameWindowMount, playerPoints, computerPoints, vsPlayer, vsComputer, second);
}

TicGameContainer.propTypes = {
    vsP: PropTypes.bool.isRequired,
    second: PropTypes.string.isRequired
}

export default TicGameContainer
