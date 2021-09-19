import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import AppFrame from './components/AppFrame';
import AuthProvider from './contexts/AuthContext';
import RegistrationPage from './pages/RegistrationPage';
import LoginPage from './pages/LoginPage';
import PrivatePages from './PrivatePages';
import PrivateRoute from './PrivateRoute';


function App() {

  return (
    <AuthProvider>
      <Router>
        <Switch>
          <AppFrame>
            <Route path="/register" component={RegistrationPage}/>
            <Route path="/login" component={LoginPage}/>
            <PrivateRoute component={PrivatePages}/>
          </AppFrame>
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
