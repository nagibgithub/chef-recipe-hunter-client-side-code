import {faEye, faEyeSlash} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import GoogleLogIn from '../components/GoogleLogIn';
import GitHubLogIn from '../components/GitHubLogIn';

const Register = () => {

    const [show, setShow] = useState(false);

    const emailPassRegHandler = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;
    }

    return (
        <div className='login-container'>
            <div className='bg-black bg-opacity-60'>
                <h1 className="text-2xl lg:text-5xl pt-5 text-center font-bold text-white">Register in Test of Radhuni...!</h1>
                <div className="login-form-container">
                    <form onSubmit={emailPassRegHandler}>
                        <div className="form-control py-2">
                            <label><span className="text-white">Full Name</span></label>
                            <input name="name" type="text" placeholder="Your Name" className="input-field" required />
                        </div>
                        <div className="form-control py-2">
                            <label><span className="text-white">Email</span></label>
                            <input name="email" type="email" placeholder="email" className="input-field" autoComplete="current-email" required />
                        </div>
                        <div className="form-control py-2">
                            <label><span className="text-white">Photo URL</span></label>
                            <input name="photo" type="url" placeholder="Photo Url" className="input-field" required />
                        </div>
                        <div className="form-control py-2">
                            <label><span className="text-white">Password <FontAwesomeIcon icon={show ? faEye : faEyeSlash}></FontAwesomeIcon></span></label>
                            <input name="password" type={show ? 'text' : 'password'} placeholder="password" className="input-field" autoComplete="new-password" required />
                        </div>
                        <div className="form-control py-2">
                            <label><span className="text-white">Confirm Password <FontAwesomeIcon icon={show ? faEye : faEyeSlash}></FontAwesomeIcon></span></label>
                            <input name="confirm" type={show ? 'text' : 'password'} placeholder="retype your password" className="input-field" autoComplete="new-password" required />
                        </div>
                        <div onClick={() => setShow(!show)} className="text-white cursor-pointer my-2 w-max">{show ? "Hide" : "Show"} Password</div>
                        <div className="form-control py-2">
                            <input name="submit" className="btn btn-primary" type="submit" value="Sign Up" />
                        </div>
                    </form>
                    <hr />
                    <div className='my-2'>
                        <h1 className="text-white text-lg font-semibold text-center py-1">Or you can also sign up with: </h1>
                        <GoogleLogIn></GoogleLogIn>
                        <GitHubLogIn></GitHubLogIn>
                    </div>
                    <hr />
                    <h1 className="text-white text-center text-xl font-semibold pt-3 pb-4">If you already have an ID, plz <Link to={'/login'} className="link-hover text-[#ff2222] font-extrabold">Log In</Link></h1>
                </div>
            </div>
        </div>
    );
};

export default Register;