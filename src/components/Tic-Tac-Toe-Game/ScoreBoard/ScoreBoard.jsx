import { Grid } from '@material-ui/core'
import PropTypes from 'prop-types'
import { useAuth } from '../../../contexts/AuthContext';


const ScoreBoard = ({type, player, computer, second}) => {

    const { currentUser } = useAuth();

    return (
        <Grid container className={type}>
            <Grid item className="scoreboard-text"
            xs={12}
            md={12}>
                <div>{currentUser.displayName ? currentUser.displayName : currentUser.email}</div>
                <div>{player}</div>
                <div > - </div>
                <div>{second}</div>
                <div>{computer}</div>
            </Grid>
        </Grid>
    )
}

ScoreBoard.propTypes = {
    type: PropTypes.string.isRequired,
    player: PropTypes.number.isRequired,
    computer: PropTypes.number.isRequired,
    second: PropTypes.string.isRequired
}

export default ScoreBoard
