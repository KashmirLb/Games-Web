import { Alert } from '@material-ui/lab';
import React from 'react'
import { useState } from 'react';
import { IconContext } from 'react-icons/lib';
import { useHistory } from 'react-router';
import { useAuth } from '../../contexts/AuthContext';
import { Link } from '@material-ui/core'
import {Link as LinkRouter} from 'react-router-dom'

const LogoutToolbar = () => {

    const [error, setError] = useState('')
    const { logout } = useAuth();
    const history = useHistory();
    
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
        <div color="inherit" aria-label="menu">
            { error &&
                <div style={{display:"inline"}}>
                    <Alert severity="error">{error}</Alert> 
                </div>
            }
            <div style={{display:"inline"}}>
                <Link 
                to="/dashboard" 
                color="inherit" 
                aria-label="menu"
                component={LinkRouter}>
                    <IconContext.Provider value={{size:'2em'}} >
                        <button className="toolbar-button" >Dashboard</button>
                    </IconContext.Provider>
                </Link>      
            </div>
            <div style={{display:"inline", margin:"1vw"}}>
                <IconContext.Provider value={{size:'2em'}}>
                    <button className="toolbar-button" onClick={handleLogout}>Logout</button>
                </IconContext.Provider>
            </div>
        </div>
    )
}

export default LogoutToolbar
