import React, {useState} from 'react'
// import PropTypes from 'prop-types'
import TicTacButton from '../TicTacButton'
import { checkWin } from '../WinningOptions'
import { computerSelects } from '../ComputerPlays'
import ActionButtons from '../ActionButtons'
import GameText from '../GameText'

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

function TicGame ({sp,sc}){

    function resetGame(){
        player=[]
        computer=[]
        setGameText("Resetting Game...")
        setButtons(allButtons())

        setTimeout(()=>{
            setGameText("")
        },800)
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

    const playerClicked = position =>{

        playerSelections(position.x, position.y)
        disable=true;
        setButtons(allButtons())

        if (!endGame(player, computer)&&!checkWin(player)){

            setTimeout(()=>{
                var compP = computerSelects(player, computer)
                computerSelections(compP.x, compP.y)
                disable=false;
                if (checkWin(computer)){
                    setGameText("The computer has won...")
                    sc();
                    console.log(winLose)
                    disable=true}
                setButtons(allButtons())
            },1200)   
        }
        if(endGame(player, computer)) setGameText("Game Over") 
        if(checkWin(player)) {
            setGameText("You Win!!!")
            sp();
        }
    }

    const clickChoice = position =>{
        if (!endGame(player, computer)&&!checkWin(player,"player")&&!checkWin(computer,"pc")) playerClicked(position);
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
        <div>
        <div className="game-container">
            {buttons}
        </div>
        <div>
            <GameText text={gameText}/>
        </div>
        
        <div className="action-button-container">
            <div className="action-button-border">
                <ActionButtons text={"Restart"} type={"restart-button"} clickHandler={resetGame}/>
            </div>
        </div>
    </div>
    )
}

TicGame.propTypes = {

}

export default TicGame
