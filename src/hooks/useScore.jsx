import { useEffect, useState } from 'react'
import { getFireData } from '../firebase';

function useScore (id, userScore){

    const [ score, setScore ] = useState()

    useEffect(()=>{

        const getData = async ()=>{
            try{
                const dbScore = await getFireData(id);
                setScore(dbScore)
            }
            catch{
                console.log("Could not get initial Score (useScore)")
            }
        }
        
        if(userScore===null){
            getData();
        }
    }, [id, userScore])   

    return score
}

export default useScore
