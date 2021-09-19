import React, {useState} from 'react'
import { Grid } from '@material-ui/core'
import { useHistory } from 'react-router'



const MainPage = () => {
        
    const history = useHistory();

    const onClickHandler = ()=>{
        
        setStartButton(<div className="start-button-effect" onAnimationEnd={()=>history.push("/tic-game1")}></div>)
    }

    const [startButton, setStartButton] = useState(
        <div className="start-button-div-container">
            <button className="start-button" onClick={onClickHandler}>To the Game</button>
        </div>
    )

    return (
        <Grid container
            justifyContent="center"
            alignItems="center"
            >
            <Grid item
                xs={1}
                md={4}>                    
            </Grid>
            <Grid item
                xs={10}
                md={4}
                className="start-button-container"
                >
                {startButton}
            </Grid>
            <Grid item
                xs={1}
                md={4}>
            </Grid>
        </Grid>
    )
}

export default MainPage
