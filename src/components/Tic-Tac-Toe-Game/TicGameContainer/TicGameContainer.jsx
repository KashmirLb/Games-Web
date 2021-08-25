import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Grid } from '@material-ui/core'
import GameWindow from '../GameWindow'
import ScoreBoard from '../ScoreBoard'
import { useHistory } from 'react-router-dom';
import Button from '../Button'    
 
 const smallWindowMount = (component, vsPlayer, vsComputer) =>{

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
                            <Button type="action-button" text="Player vs Player" clickHandler={vsPlayer}/>
                            <Button type="action-button" text="Player vs Computer" clickHandler={vsComputer}/>
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

const largeWindowMount = (component, player, computer, second) =>{

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
    
    function mountButtons(){

        var buttonOptions;
        if (window.innerWidth<=800){
            
            buttonOptions=<ScoreBoard type="scoreboard-container-small" player={playerPoints} computer={computerPoints} second={second}/>
        }
        else{

            buttonOptions=  
        <div>
            <Button type="action-button" text="Player vs Player" clickHandler={vsPlayer}/>
            <Button type="action-button" text="Player vs Computer" clickHandler={vsComputer}/>
        </div>
        }
        return <GameWindow setPlayer={playerPointsF} setComputer={computerPointsF} buttonOption={buttonOptions} playingVs={vsP}/>;
    }

    const gameWindowMount = mountButtons();

    if (window.innerWidth<=800) return smallWindowMount(gameWindowMount, vsPlayer, vsComputer);
    else return largeWindowMount(gameWindowMount, playerPoints, computerPoints, second);
}

TicGameContainer.propTypes = {
    vsP: PropTypes.bool.isRequired,
    second: PropTypes.string.isRequired
}

export default TicGameContainer
