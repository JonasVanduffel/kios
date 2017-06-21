import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import * as firebase from 'firebase';
import { Link } from 'react-router';

class Login extends Component {

    componentWillMount(){
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

    componentDidMount() {
        const auth = firebase.auth();
        const txtEmail = document.getElementById('txtEmail');
        const txtPassword = document.getElementById('txtPassword');
        const btnLogin = document.getElementById('btnLogin');

        btnLogin.addEventListener('click', e => {
            const email = txtEmail.value;
            const pass = txtPassword.value;

            auth.signInWithEmailAndPassword(email, pass).catch(function(error) {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(errorCode + "\n\n" +  errorMessage);
            });
        });
    }

    render() {
        return (
            <div id="login">
                <div id="login-wrapper">
                    <img src={require('./../../assets/kios-logo.svg')} alt="" />

                    {/*<h4>Demo binnenkort online...</h4>*/}
                    <form>
                        <label>E-mail</label>
                        <input id="txtEmail" type="email"/>
                        <label>Wachtwoord</label>
                        <input id="txtPassword" type="password"/>
                        <a href="#" className="btn btn-secondary" id="btnLogin">Inloggen</a>
                    </form>

                    <Link id="register" to={"/registreer"}>Nog geen account? Registreer hier!</Link>
                </div>
            </div>
        );
    }
}

export default Login;