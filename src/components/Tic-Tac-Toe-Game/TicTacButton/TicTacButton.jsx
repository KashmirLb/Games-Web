import {useState}from 'react'
import {checkExist} from '../TicGame'
import { player, computer } from '../TicGame'
import Button from './../Button'

const TicTacButton = ({position, type, clickHandler, text, disabling}) => {

    const [style, setStyle]=useState(type)

    const buttonClicked = () =>{

        if(!checkExist(computer, position)&&!checkExist(player,position)){

        clickHandler(position)
       
        setStyle("selection-button-clicked")
        setTimeout(()=>{
            setStyle("selection-button")
        },200)}
    }
    if (type==="selection-button-pc") return <Button type={type} text={text} clickHandler={buttonClicked} disabled={disabling}/>
    else return <Button type={style} text={text} clickHandler={buttonClicked} disabled={disabling}/>
}


export default TicTacButton
