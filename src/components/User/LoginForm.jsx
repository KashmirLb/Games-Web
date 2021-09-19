import React, { useRef, useState } from 'react'
import { useAuth } from '../../contexts/AuthContext'
import { Redirect } from 'react-router'
import FormRender from '../FormRender'

const LoginForm = () => {

    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)


    const emailRef = useRef();
    const passwordRef = useRef();
    const { login, currentUser } = useAuth();

    const formItems = [{
        id: 'email',
        text: 'Email',
        input: <input type='email' ref={emailRef} required />
    },
    {
        id: 'password',
        text: 'Password',
        input: <input type="password" ref={passwordRef} autoComplete="off"/>
    }]
    
    async function handleSubmit(e) {

        e.preventDefault();

        try{
            setError('')
            setLoading(true)
            await login(emailRef.current.value, passwordRef.current.value)
        }
        catch{
            setError('Unable to log in')
            setLoading(false)
        }
    }

    return (
        <>
            {currentUser && <Redirect to="/dashboard"/>}
            <FormRender title="Login" formItems={formItems} buttonText="Login" loading={loading} submitHandler={handleSubmit} error={error}/>
        </>  
    )
}

export default LoginForm