import { Grid } from '@material-ui/core'
import { useAuth } from '../../../contexts/AuthContext';


const ScoreBoard = ({playerScore, secondPlayerScore, versusPlayer}) => {

    const { currentUser } = useAuth();
    const type = () =>{
        if (window.innerWidth<=800) return "scoreboard-container-small" 
        else  return "scoreboard-container-big"
    };

    return (
        <Grid container className={type()}>
            <Grid item className="scoreboard-text"
            xs={12}
            md={12}>
                <div>{currentUser.displayName ? currentUser.displayName : currentUser.email}</div>
                <div>{playerScore}</div>
                <div > - </div>
                <div>{versusPlayer ? "Player 2" : "Computer"}</div>
                <div>{secondPlayerScore}</div>
            </Grid>
        </Grid>
    )
}

export default ScoreBoard
