
import  { useEffect } from 'react'
import { updateFireData } from '../firebase';

const useSetScore = (id, newScore) => {

    useEffect(()=>{

        async function setScore(){
            try{
                await updateFireData(id, newScore)
            }
            catch{
                console.log("Could not update score")
            }
        }
        setScore();
        return setScore()
    }, [id, newScore])
}

export default useSetScore
