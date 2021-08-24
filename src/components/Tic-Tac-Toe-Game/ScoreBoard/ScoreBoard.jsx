import { Grid } from '@material-ui/core'
// import TicGame, {winLose}  from '../TicGame'
// import PropTypes from 'prop-types'

const ScoreBoard = ({type, player, computer}) => {

    return (
        <Grid container className={type}>
            <Grid item className="scoreboard-text"
            xs={12}
            md={12}>
                <div>Player:</div>
                <div>{player}</div>
                <div > - </div>
                <div>Computer:</div>
                <div>{computer}</div>
            </Grid>
        </Grid>
    )
}

// ScoreBoard.propTypes = {

// }

export default ScoreBoard
