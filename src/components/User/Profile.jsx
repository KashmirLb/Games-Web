import React, { useRef, useState } from 'react'
import { useAuth } from '../../contexts/AuthContext'
import { useHistory } from 'react-router'
import FormRender from '../FormRender'

/*
     formItem={

        id: id,
        text: text,
        type: type,
        ref: ref,
        input: true/false



     }
*/




export const Profile = () => {
    const [error, setError] = useState('')
    const history = useHistory();
    const [loading, setLoading] = useState(false)


    const emailRef = useRef();
    const nameRef = useRef()
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();

    const { currentUser, updateEmail, updatePassword, updateName } = useAuth();

    const formItems =[
        {
            id: 'displayName',
            text: 'Name',
            input: <input type="text" ref={nameRef} ></input>
        },
        {
            id: 'email',
            text: 'Email',
            input: <input type='email' ref={emailRef} required defaultValue={currentUser.email} />
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
        }
    ]

    function updateUser(e) {

        e.preventDefault();

        setLoading(true)

        if (passwordRef.current.value !== passwordConfirmRef.current.value){
            setLoading(false)
            return setError('Passwords do not match')
        }

        const promises = []

        if (emailRef.current.value !== currentUser.email){
            promises.push(updateEmail(emailRef.current.value))
        }
        if (nameRef.current.value && nameRef.current.value !== currentUser.displayName){
            promises.push(updateName(nameRef.current.value))
        }
        if (passwordRef.current.value){
            promises.push(updatePassword(passwordRef.current.value))
        }

        Promise.all(promises)
        .then(()=> history.push("/dashboard"))
        .catch(()=>{
            setError("Failed to update")
            setLoading(false)
        })
    }

    return <FormRender title="Profile" formItems={formItems} buttonText="Update" loading={loading} submitHandler={updateUser} error={error}/>
}

export default Profile