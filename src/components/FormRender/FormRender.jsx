import { Grid } from '@material-ui/core'
import { Alert } from '@material-ui/lab'
import React from 'react'

const FormRender = ({title, formItems, buttonText, loading, submitHandler, error}) => {

    const allForms= () =>{

        const renderForms = formItem =>{

            if (formItem.input){
                return (
                <Grid item container
                    key={formItem.id}  
                    id={formItem.id}
                    xs={10}
                    style={{marginTop:"20px", marginBottom:"20px"}}
                    >
                        <Grid item xs={6}><label  style={{width:"100%"}}>{formItem.text}</label></Grid>
                        <Grid item xs={6} >{formItem.input}</Grid>
                </Grid>
                )}
            else{
                return(
                    <Grid item container
                    key={formItem.id} 
                    id={formItem.id}
                    xs={10}>
                        <Grid item xs={12}><h2>{formItem.text}</h2></Grid>
                    </Grid>
                )
            } 
        }
        return formItems.map(renderForms)
    }

    return (
        <Grid container 
            className="registration-window"
            direction="column">
            <Grid item>
                <h2 className="registration-title">{title}</h2>
                {error && <Alert severity="error">{error}</Alert>}
            </Grid>
            <Grid item container>
                <form className="registration-form" onSubmit={submitHandler}>
                    <Grid container
                        direction="column"
                        justifyContent="center"
                        >
                        <Grid item container
                            justifyContent="center"
                            
                            direction="column"
                            >
                            {allForms()}
                        </Grid>    
                        <Grid item style={{marginTop:"30px"}}>
                            <button disabled={loading} className="login-button" type="submit">{buttonText}</button>
                        </Grid>
                    </Grid>
                </form>
            </Grid>
        </Grid>  
    )
}

export default FormRender
