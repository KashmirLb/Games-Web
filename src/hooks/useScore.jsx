
import { useEffect } from 'react'
import { getFireData } from '../firebase';

const useScore = (id, score, onSetScore) => {

    useEffect(()=>{

        function getScore(){
            getFireData(id)
            .then(data=> onSetScore(data))
            .catch(()=> onSetScore("No score found"))
        }
        getScore();
        return getScore()
    }, [id, score, onSetScore])

    return { score }
}

export default useScore
