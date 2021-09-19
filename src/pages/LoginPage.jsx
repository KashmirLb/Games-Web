import { Grid } from '@material-ui/core'
import React from 'react'
import LoginForm from '../components/User/LoginForm'

const LoginPage = () => {
    return (
        <Grid container
        justifyContent="center"            
        alignItems="center"
        >
            <Grid item container 
            justifyContent="center"
            xs={12}
            sm={9}
            md={6}
            lg={4}
            className="start-button-container">
                <LoginForm/>
            </Grid>
        </Grid>
    )
}

export default LoginPage