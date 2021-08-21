import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import AppFrame from './components/AppFrame';
import MainPage from './pages/MainPage';
import TicGamePage from './pages/TicGamePage';


function App() {
  return (
      <Router>
        <Switch>
          <AppFrame>
            <Route exact path="/">
              <MainPage/>
            </Route>
            <Route path="/tic-game">
              <TicGamePage/>
            </Route>
          </AppFrame>
        </Switch>
      </Router>
  );
}

export default App;
