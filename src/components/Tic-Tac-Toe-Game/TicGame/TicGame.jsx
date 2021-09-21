import React, {useState} from 'react'
import PropTypes from 'prop-types'
import TicTacButton from '../TicTacButton'
import { checkWin } from '../WinningOptions'
import { computerSelects } from '../ComputerPlays'
import ActionButtons from '../ActionButtons'
import GameText from '../GameText'
import { Grid } from '@material-ui/core'

const  positions = [0, 1, 2, 3, 4, 5, 6, 7, 8]

const matrix = []

export var player = []

export var computer = []

export var winLose =""

function buildMatrix(matrix){
    for (var i=0; i<3; i++){
        for(var j=0; j<3; j++){
            matrix.push({
                x: i,
                y: j
            })
        }
    }
}

buildMatrix(matrix);

export const checkExist = (matrix, coords) => matrix.some(m =>m.x===coords.x && m.y===coords.y)

var playerTurn="1"

function TicGame ({playerScores, secondScores, versusPlayer}){

    const vsPlayer=versusPlayer;

    function resetGame(){
        player=[]
        computer=[]
        playerTurn="1"
        setGameText("Resetting Game...")
        setButtons(allButtons())

        setTimeout(()=>{
            setGameText("")
        },800)
    }

    function vsComputer(){
        setTimeout(()=>{
            var compP = computerSelects(player, computer)
            computerSelections(compP.x, compP.y)
            disable=false;
            if (checkWin(computer)){
                setGameText("The computer has won...")
                secondScores();
                disable=true}
            setButtons(allButtons())
        },1200)
    }

    function playerSelections(xp , yp){

        player.push(
            {x: xp,
            y: yp}
        )
    }
    
    function computerSelections(xc, yc){
    
        computer.push({
            x: xc,
            y:yc
        })
    }

    function endGame(player, computer){

        if (player.length+computer.length>=9){
            return true
        }
        else return false
    }

    var disable = false;
    

    const player1Clicked = position =>{
        
        playerSelections(position.x, position.y)
        disable=true;
        setButtons(allButtons())

        if (!endGame(player, computer)&&!checkWin(player)){

            if (vsPlayer){
            
                playerTurn="2"
                setTimeout(()=>{
                    disable=false
                    setButtons(allButtons())
                },200) 
            }
            else vsComputer();    
        }
        if(endGame(player, computer)) setGameText("Game Over") 
        if(checkWin(player)) {
            if (vsPlayer) setGameText("Player 1 Wins!")
            else setGameText("You Win!!!")
            playerScores();  
    }
}

    const player2Clicked = position =>{

        computerSelections(position.x, position.y)
        disable=true;
        setButtons(allButtons())

        if (!endGame(player, computer)&&!checkWin(computer)){
        setTimeout(()=>{
            playerTurn="1"
            disable=false
            setButtons(allButtons())
            },200)
        }
        if(endGame(player, computer)) setGameText("Game Over") 
        if(checkWin(computer)) {
            setGameText("Player 2 Wins!")
            secondScores();      
    }}

    const clickChoice = position =>{
        if (!endGame(player, computer)&&!checkWin(player,"player")&&!checkWin(computer,"pc")&&playerTurn==="1") player1Clicked(position);
        else if (!endGame(player, computer)&&!checkWin(player,"player")&&!checkWin(computer,"pc")&&playerTurn==="2") player2Clicked(position);
        else console.log("Game has ended!!")
    }

const allButtons = () =>{

    const buttonPositions = position =>{
        if (checkExist(player, matrix[position]))return <TicTacButton key={position} type={"selection-button-clicked"} position={matrix[position]} clickHandler={clickChoice} text={<i className="fas fa-times"></i>} disabling={disable}/>
        if (checkExist(computer, matrix[position])) return<TicTacButton key={position} type={"selection-button-pc"} position={matrix[position]} clickHandler={clickChoice} text={<i className="far fa-circle"></i>} disabling={disable}/>
        else return <TicTacButton key={position} type={"selection-button"} position={matrix[position]} clickHandler={clickChoice} text={""} disabling={disable}/>
    }
return positions.map(buttonPositions)
}
const [buttons, setButtons] = useState(allButtons())
const [gameText, setGameText] = useState("") 

    return (
        <Grid container
        justifyContent="center"
        alignItems="center"
        direction="column">
            <Grid item>
                <div className="game-container">
                    {buttons}
                </div>
            </Grid>
            <Grid item>
                <GameText text={gameText}/>
            </Grid>
            <Grid item
            className="action-button-container">
                <ActionButtons text={"Restart"} type={"restart-button"} clickHandler={resetGame}/>
            </Grid>
        </Grid>
    )
}

TicGame.propTypes = {
    playerScores: PropTypes.func.isRequired,
    secondScores: PropTypes.func.isRequired,
    versusPlayer: PropTypes.bool.isRequired
}

export default TicGame
