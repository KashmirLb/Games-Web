import { Grid } from '@material-ui/core'
import React from 'react'
import Dashboard from '../components/User/Dashboard'

const DashboardPage = ({score}) => {

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
                <Dashboard score={score}/>
            </Grid>
        </Grid>
    )
}

export default DashboardPage