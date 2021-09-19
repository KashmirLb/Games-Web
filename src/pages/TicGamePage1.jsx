import React from 'react'
import TicGameContainer from '../components/Tic-Tac-Toe-Game/TicGameContainer'


const TicGamePage1 = ({score}) => {
    return (
        <div>
            <TicGameContainer vsP={false} second="Computer: " score={score}/>
        </div>
    )
}

export default TicGamePage1
