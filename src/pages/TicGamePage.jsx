import React, { useMemo, useState } from 'react'
import ScoreBoard from '../components/Tic-Tac-Toe-Game/ScoreBoard'
import { windowCreator } from '../utils/WindowCreator'
import useGame from '../hooks/useGame'

const TicGamePage = ({score, updateScore}) => {

    const[secondScore, setSecondScore] = useState(0)

    const playerScores = useMemo(()=> () =>{
        updateScore(score => score+1)}, [updateScore])

    const secondScores = useMemo(()=> () =>{
        setSecondScore(score => score+1)}, [setSecondScore])

    const {gameWindow, versusPlayer, playerClicked, computerClicked } = useGame(playerScores, secondScores)
  
    const scoreBoard = <ScoreBoard playerScore={score} secondPlayerScore={secondScore} versusPlayer={versusPlayer}/>
    
    return windowCreator(playerClicked, computerClicked, gameWindow, scoreBoard)
}
export default TicGamePage
