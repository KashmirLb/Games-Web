
import  { useEffect } from 'react'
import { updateFireData } from '../firebase';

const useSetScore = (id, newScore) => {

    useEffect(()=>{
        if (newScore !==null){
            updateFireData(id, newScore)}
    },[id, newScore])
}

export default useSetScore
