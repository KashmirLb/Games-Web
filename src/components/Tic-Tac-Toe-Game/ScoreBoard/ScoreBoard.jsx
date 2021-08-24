import { Grid } from '@material-ui/core'
// import TicGame, {winLose}  from '../TicGame'
// import PropTypes from 'prop-types'

const ScoreBoard = ({type, player, computer, second}) => {

    return (
        <Grid container className={type}>
            <Grid item className="scoreboard-text"
            xs={12}
            md={12}>
                <div>Player 1:</div>
                <div>{player}</div>
                <div > - </div>
                <div>{second}</div>
                <div>{computer}</div>
            </Grid>
        </Grid>
    )
}

// ScoreBoard.propTypes = {

// }

export default ScoreBoard
