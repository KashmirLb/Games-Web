import React, {useState} from 'react'
import { Grid } from '@material-ui/core'
import { useHistory } from 'react-router'
// import PropTypes from 'prop-types'



const MainPage = () => {

    const onClickHandler = ()=>{
        // history.push("/tic-game")
        setStartButton(<div className="start-button-effect" onAnimationEnd={()=>history.push("/tic-game")} ></div>)
    }

    const [startButton, setStartButton] = useState(
        <div className="start-button-div-container">
            <button className="start-button" onClick={onClickHandler}>To the Game</button>
        </div>)
    const history = useHistory();

  

    return (
        <Grid container
        justifyContent="center"
        alignItems="center">
            <Grid item
            xs={1}
            md={4}>
            </Grid>
            <Grid item
            xs={12}
            md={4}
            className="start-button-container">
                {startButton}
            </Grid>
            <Grid item
            xs={1}
            md={4}>
            </Grid>
        </Grid>
    )
}

// MainPage.propTypes = {

// }

export default MainPage
