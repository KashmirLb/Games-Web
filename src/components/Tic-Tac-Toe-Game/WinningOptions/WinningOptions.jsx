export const winCoords = [
    {
        x1:0, y1:0, x2:0, y2:1, x3:0, y3:2
    },
    {
        x1:1, y1:0, x2:1, y2:1, x3:1, y3:2
    },
    {
        x1:2, y1:0, x2:2, y2:1, x3:2, y3:2
    },
    {
        x1:0, y1:0, x2:1, y2:0, x3:2, y3:0
    },
    {
        x1:0, y1:1, x2:1, y2:1, x3:2, y3:1
    },
    {
        x1:0, y1:2, x2:1, y2:2, x3:2, y3:2
    },
    {
        x1:0, y1:0, x2:1, y2:1, x3:2, y3:2
    },
    {
        x1:2, y1:0, x2:1, y2:1, x3:0, y3:2
    },
]

export function checkWin(playerOpt){

    return(
        winCoords.some(c =>{ 
            const first=playerOpt.some(m=> m.x===c.x1 && m.y===c.y1)
            const second=playerOpt.some(m=> m.x===c.x2 && m.y===c.y2)
            const third=playerOpt.some(m=> m.x===c.x3 && m.y===c.y3)
            if (first && second && third){
                return true
            }
            else{
                return false
            }  
        })
    )  
}