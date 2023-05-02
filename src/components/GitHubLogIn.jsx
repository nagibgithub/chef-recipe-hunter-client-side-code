import React, {useContext} from 'react';
import {AuthContext} from '../contexts/AuthProvider';
import {GithubAuthProvider, signInWithPopup} from 'firebase/auth';
import {useLocation, useNavigate} from 'react-router-dom';

const GitHubLogIn = () => {

    const {auth} = useContext(AuthContext);
    const gitHubAuthProvider = new GithubAuthProvider();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const gitHubLoginHandler = () => {
        signInWithPopup(auth, gitHubAuthProvider)
            .then((result) => {
                const user = result.user;
                // console.log(user);
                navigate(from, {replace: true})
            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
            });
    }

    return (
        <button onClick={gitHubLoginHandler} className="google-signin-button">
            <img className="w-6 invert" src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" alt="" />
            <h1 className="text-white pl-2 text-lg">Log in with GitHub</h1>
        </button>
    );
};

export default GitHubLogIn;