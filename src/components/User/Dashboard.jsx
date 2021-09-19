import { Alert } from '@material-ui/lab'
import React from 'react'
import { useState } from 'react'
import { Link as LinkRouter, useHistory } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'
import { Grid, Link } from '@material-ui/core'
import { IconContext } from 'react-icons'


const Dashboard = ({score}) => {

    const [error, setError] = useState('')
    const history = useHistory();
    const { currentUser, logout } = useAuth();

    function emailOrUsername(){
        if (currentUser.displayName){
            return currentUser.displayName
        }
        else{
           return currentUser.email 
        }
    }

    async function handleLogout(){
        try{
            await logout();
            history.push("/login")
        }
        catch{
            setError("cannot log out")
        }
    }

    return (
        <Grid container 
            className="registration-window"
            direction="column">
            <Grid item>
                <h2 className="registration-title">Welcome {emailOrUsername()} !</h2>
                <h3>Score: {score} </h3>
                {error && <Alert severity="error">{error}</Alert>}
            </Grid>
            <Grid item container>
                <div className="registration-form" >
                    <Grid container
                        direction="column"
                        justifyContent="center">
                        <Grid item container
                            justifyContent="center"
                            direction="column"
                            >
                             <Grid item
                             style={{marginBottom:"30px"}}>
                                <Link 
                                    to="/" 
                                    component={LinkRouter}>
                                        <IconContext.Provider value={{size:'2em'}}>
                                            <button className="welcome-start-button">Start</button>
                                        </IconContext.Provider>
                                </Link>  
                                </Grid>
                                <Grid item
                                style={{marginBottom:"30px"}}>
                                <Link 
                                    to="/profile" 
                                    component={LinkRouter}>
                                        <IconContext.Provider value={{size:'2em'}}>
                                            <button className="welcome-start-button">Profile</button>
                                        </IconContext.Provider>
                                </Link>  
                                </Grid>
                                <Grid item
                                style={{marginBottom:"30px"}}>
                                <button onClick={handleLogout} className="welcome-logout-button">Logout</button>
                                </Grid>
                        </Grid>    
                    </Grid>
                </div>
            </Grid>
        </Grid>  
    )
}

export default Dashboard