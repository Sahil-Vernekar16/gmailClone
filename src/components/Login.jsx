import { signInWithPopup } from 'firebase/auth'
import React from 'react'
import GoogleButton from 'react-google-button'
import { useDispatch } from 'react-redux'
import { setUser } from '../store/authSlice.js'
import { auth, provider } from '../firebase'
const Login = () => {
    const dispatch = useDispatch()
    const onLoginHandler = async () => {
        try {
            const result = await signInWithPopup(auth,provider)
            dispatch(setUser({
                displayName: result.user.displayName,
                email: result.user.email,
                photoURL: result.user.photoURL
            }))
        } catch (error) {
            console.log(error);
        }
    }

  return (
    <div className='w-screen h-screen flex justify-center items-center '>
        <div className='p-20 bg-gray-500 rounded-2xl'>
        Login
        <GoogleButton onClick={onLoginHandler}/>
        </div>
        
    </div>
  )
}

export default Login