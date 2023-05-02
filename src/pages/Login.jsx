import {faEye, faEyeSlash} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import React, {useContext, useState} from 'react';
import {Link, useLocation, useNavigate} from 'react-router-dom';
import GoogleLogIn from '../components/GoogleLogIn';
import GitHubLogIn from '../components/GitHubLogIn';
import {AuthContext} from '../contexts/AuthProvider';

const Login = () => {

    const {signIn} = useContext(AuthContext);
    const [show, setShow] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const signInHandler = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                navigate(from, {replace: true})
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <div className='login-container'>
            <div className='bg-black bg-opacity-60'>
                <h1 className="text-2xl lg:text-5xl pt-5 text-center font-bold text-white">Login now!</h1>
                <div className="login-form-container">
                    <form onSubmit={signInHandler}>
                        <div className="form-control py-2">
                            <label ><span className="text-white">Email</span></label>
                            <input name="email" type="email" placeholder="Email" autoComplete="username" className="input-field" required />
                        </div>
                        <div className="form-control py-2">
                            <label ><span className="text-white">Password <FontAwesomeIcon icon={show ? faEye : faEyeSlash}></FontAwesomeIcon></span></label>
                            <input name="password" type={show ? 'text' : 'password'} autoComplete="current-password" placeholder="Password" className="input-field" required />
                            <div onClick={() => setShow(!show)} className="text-white cursor-pointer my-2 w-max">{show ? "Hide" : "Show"} Password</div>
                            <label ><a href="#" className="text-white link-hover">Forgot password?</a></label>
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