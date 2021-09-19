import React, { useRef, useState } from 'react'
import { useAuth } from '../../contexts/AuthContext'
import { useHistory } from 'react-router'
import FormRender from '../FormRender'
import { newFireData, checkCode } from '../../firebase'
import "dotenv/config"


const RegistrationForm = () => {

    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    const emailRef = useRef();
    const nameRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    const codeRef = useRef();
    const history = useHistory();


    const formItems =[
        {
            id: 'displayName',
            text: 'Name',
            input: <input type="text" ref={nameRef} ></input>
        },
        {
            id: 'email',
            text: 'Email',
            input: <input type='email' ref={emailRef} required/>
        },
        {
            id: 'password',
            text: 'Password',
            input: <input type="password" ref={passwordRef} autoComplete="off"/>
        },
        {
            id: 'password-confirm',
            text: 'Confirm Password',
            input:<input type="password" ref={passwordConfirmRef} autoComplete="off"/>
        },
        {
            id: 'creator-code',
            text: 'Creator code',
            input:<input type="password" ref={codeRef} autoComplete="off"/>
        }
    ]

    const { register, registerName } = useAuth();

    function handleSubmit(e) {
        e.preventDefault();
        setError('')

        if (checkCode(codeRef.current.value)){
            if (passwordRef.current.value !== passwordConfirmRef.current.value){
                return setError("Passwords do not match")
            }
            
            setLoading(true)
            register(emailRef.current.value, passwordRef.current.value)
            .then(result => registerName(result.user, nameRef.current.value)
                        .then(()=> newFireData(result.user.uid)
                                    .then(()=> history.push("/dashboard"))
                                    .catch(()=>{ setError("Could not add score")
                                                setLoading(false)})
                        ) 
                        .catch(()=> {setError('Could not set Username')
                                    setLoading(false)})
                        )
            .catch(()=>{setError('Something went wrong')
                        setLoading(false)})

        }
        else{
            setError("Incorrect Creator Code")
        }
    }

    return <FormRender title="Register" formItems={formItems} buttonText="Register" loading={loading} submitHandler={handleSubmit} error={error}/>
}

export default RegistrationForm
