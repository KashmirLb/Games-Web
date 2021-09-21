import React, { useEffect, useState } from 'react'
import GameWindow from '../components/Tic-Tac-Toe-Game/GameWindow'

const useGame = (playerScores, secondScores) => {

    const [versusPlayer, setVersusPlayer] = useState(false)
    const [gameWindow, setGameWindow] = useState(<GameWindow playerScores={playerScores} secondScores={secondScores} versusPlayer={versusPlayer}/>)

    function playerClicked(){
        return setVersusPlayer(false)
    }

    function computerClicked(){
        return setVersusPlayer(true)
    }
    
    useEffect(()=>{

        setGameWindow(<GameWindow playerScores={playerScores} secondScores={secondScores} versusPlayer={versusPlayer}/>)

        return <GameWindow/>
        
    },[versusPlayer, playerScores, secondScores])

    
    return { gameWindow, versusPlayer, playerClicked, computerClicked }
}

export default useGame
