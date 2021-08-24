import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import AppFrame from './components/AppFrame';
import MainPage from './pages/MainPage';
import TicGamePage1 from './pages/TicGamePage1';
import TicGamePage2 from './pages/TicGamePage2';


function App() {
  return (
      <Router>
        <Switch>
          <AppFrame>
            <Route exact path="/">
              <MainPage/>
            </Route>
            <Route path="/tic-game1">
              <TicGamePage1/>
            </Route>
            <Route path="/tic-game2">
              <TicGamePage2/>
            </Route>
          </AppFrame>
        </Switch>
      </Router>
  );
}

export default App;
