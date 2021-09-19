import { Grid } from '@material-ui/core'
import React from 'react'
import Profile from '../components/User/Profile'

const ProfilePage = () => {
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
                className="start-button-container" >
                <Profile/>
            </Grid>
        </Grid>
    )
}

export default ProfilePage