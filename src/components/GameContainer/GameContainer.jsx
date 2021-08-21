import React from 'react'
import { Grid } from '@material-ui/core'
import GameWindow from '../GameWindow'
// import PropTypes from 'prop-types'


const viewMount = component =>{

    if(window.innerWidth<= 760){
        return(
            <Grid container>
                <Grid item
                    xs={12}
                    md={8}
                    className="center-container">
                        {component}
                </Grid>   
                <Grid item
                    xs={12}
                    md={2}
                    className="right-container">
                        Right Container
                </Grid>   
                <Grid item
                    xs={12}
                    md={2}
                    className="left-container">
                      Left Container
                </Grid>       
            </Grid>
        )
    }
    else return(
        <Grid container>
            <Grid item
                xs={12}
                md={2}
                className="left-container">
                  Left Container
            </Grid>  
            <Grid item
                xs={12}
                md={8}
                className="center-container">
                    {component}
            </Grid>     
            <Grid item
                xs={12}
                md={2}
                className="right-container">
                    Right Container
            </Grid>        
        </Grid>
    )
}

const GameContainer = () => {
    return viewMount(<GameWindow/>);
}

// GameContainer.propTypes = {

// }

export default GameContainer
