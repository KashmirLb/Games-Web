import React, { useEffect, useState } from 'react'
import DashboardPage from './pages/DashboardPage';
import ProfilePage from './pages/ProfilePage'
import MainPage from './pages/MainPage';
import TicGamePage from './pages/TicGamePage';
import { useAuth } from './contexts/AuthContext'
import { Route } from 'react-router-dom' 
import useScore from './hooks/useScore';
import { updateFireData } from './firebase';

const PrivatePages = () => {

    const { currentUser } = useAuth();
    const [ userScore, setUserScore] = useState(null);
    const score = useScore(currentUser.uid, userScore)

    const updateScore = () =>{
        setUserScore(userScore+1)
        updateFireData(currentUser.uid, userScore+1)
    }

    useEffect(()=>{  
        setUserScore(score)
    },[score])

    // const updateScore = newScore => setUserScore(newScore)

    return (
        <div>
            <Route exact path="/" component={MainPage} />
            <Route path="/tic-game" >
                <TicGamePage score={userScore} updateScore={updateScore} />
            </Route>
            <Route path="/dashboard">
                <DashboardPage score={userScore}/>
            </Route >
            <Route path="/profile" component={ProfilePage}/>
        </div>
    )
}

export default PrivatePages
