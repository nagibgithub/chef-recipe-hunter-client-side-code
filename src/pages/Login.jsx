import {faEye, faEyeSlash} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import React, {useContext, useRef, useState} from 'react';
import {Link, useLocation, useNavigate} from 'react-router-dom';
import GoogleLogIn from '../components/GoogleLogIn';
import GitHubLogIn from '../components/GitHubLogIn';
import {AuthContext} from '../contexts/AuthProvider';
import {sendPasswordResetEmail} from 'firebase/auth';

const Login = () => {

    const [errorMessage, setErrorMessage] = useState('')
    // const [logInMessage, setlogInMessage] = useState('')

    const {signIn, auth} = useContext(AuthContext);
    const [show, setShow] = useState(false);
    const emailRef = useRef();

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    // console.log(from);
    // if (from === '/about') {
    //     console.log(true);
    //     setlogInMessage('You have To Login first to go About Us page')
    // }



    const signInHandler = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        setErrorMessage('')

        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                setErrorMessage('')
                navigate(from, {replace: true})

            })
            .catch(error => {
                console.log(error);
                setErrorMessage(error.message)
            })
    }

    const handleResetPass = event => {
        const email = emailRef.current.value;
        if (!email) {
            alert('plz type your email')
        }
        sendPasswordResetEmail(auth, email)
            .then(() => {
                alert('Please check your email')
                setErrorMessage('')
            })
            .catch(error => {
                console.log(error);
                // setError(error.message)
                setErrorMessage(error.message)
            })
    }

    return (
        <div className='login-container'>
            <div className='bg-black bg-opacity-60 pb-10'>
                <h1 className='text-2xl lg:text-3xl pt-3 pb-2 text-center font-bold text-white'>
                    {from != '/' ? `You have to Login first to go "${ from }" Page` : "Welcome to Login Form page"}
                </h1>
                <div className="login-form-container">
                    <form onSubmit={signInHandler}>
                        <h1 className='text-xl lg:text-3xl text-center font-bold text-white'>Login Form</h1>
                        <div className="form-control py-2">
                            <label ><span className="text-white">Email</span></label>
                            <input name="email" type="email" ref={emailRef} placeholder="Email" autoComplete="username" className="input-field" required />
                        </div>
                        <div className="form-control py-2">
                            <label ><span className="text-white">Password <FontAwesomeIcon icon={show ? faEye : faEyeSlash}></FontAwesomeIcon></span></label>
                            <input name="password" type={show ? 'text' : 'password'} autoComplete="current-password" placeholder="Password" className="input-field" required />
                            <div onClick={() => setShow(!show)} className="text-white cursor-pointer my-2 w-max">{show ? "Hide" : "Show"} Password</div>
                            <div>
                                {
                                    errorMessage && <h1 className='font-bold text-xl text-red-500'>{errorMessage}</h1>
                                }
                            </div>
                            <label ><h1 href="#" className="text-white">Forgot password? <span onClick={handleResetPass} className='cursor-pointer link-hover text-[#ff2222] font-bold text-lg'>you can reset your password</span></h1></label>
                        </div>
                        <div className="form-control py-2">
                            <input className="btn btn-primary" type="submit" value="Log In" />
                        </div>
                    </form>
                    <hr />
                    <div className='my-2'>
                        <h1 className="text-white text-lg font-semibold text-center py-1">Or you can also log in with: </h1>
                        <GoogleLogIn></GoogleLogIn>
                        <GitHubLogIn></GitHubLogIn>
                    </div>
                    <hr />
                    <h1 className="text-white text-center text-xl font-semibold pt-3 pb-4">If you don't have an ID, plz <Link to={'/register'} className="link-hover text-[#ff2222] font-extrabold">Sign Up</Link></h1>
                </div>
            </div>
        </div>

    );
};

export default Login;