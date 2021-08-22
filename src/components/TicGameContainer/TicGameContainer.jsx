import React from 'react'
import { Grid } from '@material-ui/core'
import GameWindow from '../GameWindow'
import ScoreBoard from '../ScoreBoard'

// import PropTypes from 'prop-types'

const  scoreBoardMount = () =>{

    if (window.innerWidth<=800)return "scoreboard-container-small"
    
    else return "scoreboard-container-big"
}


const viewMount = (component) =>{

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
                            <ScoreBoard type="scoreboard-container-small"/>
                        </Grid> 
                </Grid>   
                <Grid item container
                justifyContent="center"
                alignItems="center"
                    xs={12}
                    md={2}
                    className="left-container">
                        <Grid item>
                        Left Container
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
                        Left Container
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
                     <Grid item>
                        <ScoreBoard type="scoreboard-container-big"/>
                    </Grid> 
            </Grid>        
        </Grid>
    )
}

const TicGameContainer = () => {
    return viewMount(<GameWindow/>);
}

// GameContainer.propTypes = {

// }

export default TicGameContainer
