import { player, computer, checkExist } from '../TicGame';
import { winCoords } from '../WinningOptions'

function checkWin(){

    var coords;

    winCoords.find(c => {

        const firstP=player.some(m=> m.x===c.x1 && m.y===c.y1)
        const secondP=player.some(m=> m.x===c.x2 && m.y===c.y2)
        const thirdP=player.some(m=> m.x===c.x3 && m.y===c.y3)

        const firstC=computer.some(m=> m.x===c.x1 && m.y===c.y1)
        const secondC=computer.some(m=> m.x===c.x2 && m.y===c.y2)
        const thirdC=computer.some(m=> m.x===c.x3 && m.y===c.y3)

        if (firstC && secondC && !thirdP && !thirdC){
            return coords = {
                    x: c.x3,
                    y: c.y3
                }
        }
        if (firstC && thirdC && !secondP && !secondC){
            return coords = {
                    x: c.x2,
                    y: c.y2
                }
        }
        if (thirdC && secondC && !firstP && !firstC){
            return coords = {
                    x: c.x1,
                    y: c.y1
                }
        }
        return coords
    })
    return coords
}

function checkLose(){

    var coords;

    winCoords.find(c => {

        const firstP=player.some(m=> m.x===c.x1 && m.y===c.y1)
        const secondP=player.some(m=> m.x===c.x2 && m.y===c.y2)
        const thirdP=player.some(m=> m.x===c.x3 && m.y===c.y3)

        const firstC=computer.some(m=> m.x===c.x1 && m.y===c.y1)
        const secondC=computer.some(m=> m.x===c.x2 && m.y===c.y2)
        const thirdC=computer.some(m=> m.x===c.x3 && m.y===c.y3)

        if (firstP && secondP && !thirdP && !thirdC){
            return coords = {
                    x: c.x3,
                    y: c.y3
                }
         
        }
        if (firstP && thirdP && !secondP && !secondC){
            return coords = {
                    x: c.x2,
                    y: c.y2
                }
        }
        if (thirdP && secondP && !firstP && !firstC){
            return coords = {
                    x: c.x1,
                    y: c.y1
                }
        }
        return coords
    })
    return coords
}

export function computerSelects(player, comp){

    const win= checkWin();

    if(win===undefined)var lose=checkLose();
    else return win

    if (lose===undefined){

        const computerChecking = position =>{

            const playerTaken = checkExist(player,position)

            const computerTaken = checkExist(comp,position)

            if (playerTaken || computerTaken){
                return true
            }
            else return false
        }

        do{
            var position = {
                x: Math.floor(Math.random()*3),
                y: Math.floor(Math.random()*3)
            }
        } while (computerChecking(position))
        return position
    }
    else{
        return lose
    }    
}