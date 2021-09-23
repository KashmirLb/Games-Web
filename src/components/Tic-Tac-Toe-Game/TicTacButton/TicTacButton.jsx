
import Button from './../Button'

const TicTacButton = ({position, type, clickHandler, text, disabling}) => {

    const buttonClicked = () => clickHandler(position)
 
    return <Button type={type} text={text} clickHandler={buttonClicked} disabled={disabling}/>
}

export default TicTacButton
