import React, {  useState } from 'react'
import DashboardPage from './pages/DashboardPage';
import ProfilePage from './pages/ProfilePage'
import MainPage from './pages/MainPage';
import TicGamePage1 from './pages/TicGamePage1';
import TicGamePage2 from './pages/TicGamePage2';
import { useAuth } from './contexts/AuthContext'
import { Route } from 'react-router-dom' 
import useScore from './hooks/useScore';

const PrivatePages = () => {

    const [ userScore, setUserScore] = useState();

    const { currentUser } = useAuth();

    const updateScore = newScore => setUserScore(newScore)

    const { score } = useScore(currentUser.uid, userScore, updateScore)

    return (
        <div>
            <Route exact path="/" component={MainPage} />
            <Route path="/tic-game1" >
                <TicGamePage1 score={score}/>
            </Route>
            <Route path="/tic-game2" >
                <TicGamePage2 score={score}/>
            </Route>
            <Route path="/dashboard">
                <DashboardPage score={score}/>
            </Route >
            <Route path="/profile" component={ProfilePage}/>
        </div>
    )
}

export default PrivatePages
