import React, { Component } from 'react';
import * as firebase from 'firebase';
import { browserHistory } from 'react-router';
import { Link } from 'react-router';

class Login extends Component {
    componentDidMount() {
        const txtEmail = document.getElementById('txtEmail');
        const txtPassword = document.getElementById('txtPassword');
        const btnLogin = document.getElementById('btnLogin');
        const btnGoogle = document.getElementById('btnGoogle');

        btnLogin.addEventListener('click', e => {
            const email = txtEmail.value;
            const pass = txtPassword.value;
            const auth = firebase.auth();
            auth.signInWithEmailAndPassword(email, pass).catch(function(error) {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(errorCode + "\n\n" +  errorMessage);
            });


        });

        btnGoogle.addEventListener('click', e => {
            var provider = new firebase.auth.GoogleAuthProvider();
            firebase.auth().signInWithPopup(provider).then(function(result) {
                // This gives you a Google Access Token. You can use it to access the Google API.
                var token = result.credential.accessToken;
                // The signed-in user info.
                var user = result.user;
                // ...
            }).catch(function(error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                // The email of the user's account used.
                var email = error.email;
                // The firebase.auth.AuthCredential type that was used.
                var credential = error.credential;
                // ...
            });
        });

        firebase.auth().onAuthStateChanged(firebaseUser => {
            if (firebaseUser) {
                this.setState({
                    user: firebaseUser.displayName,
                    pic: firebaseUser.photoURL,
                });
                browserHistory.push('/');
            }
        });
    }

    render() {

        return (
            <div id="login">
                <div id="login-wrapper">
                    <h1>KIOS</h1>

                    <div id="login-form">
                        <input id="txtEmail" type="email" placeholder="E-mailadres"/>
                        <input id="txtPassword" type="password" placeholder="Wachtwoord"/>

                        <a href="#" className="btn2 btn-accent" id="btnLogin">Inloggen</a>
                        <a href="#" className="btn2 btn-accent" id="btnGoogle">Google</a>

                        <Link id="register" to={"/registreer"}>Account aanmaken</Link>
                    </div>
                </div>
            </div>

        );
    }
}

export default Login;