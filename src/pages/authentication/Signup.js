import React, { Component } from 'react';
import * as firebase from 'firebase';
import { browserHistory } from 'react-router';
import { Link } from 'react-router';

class Signup extends Component {
    /*constructor(){
        super();
        this.state = {
            user : '',
            pic : '',
        };
    }*/

    componentWillMount(){
        firebase.auth().onAuthStateChanged(firebaseUser => {
            if (firebaseUser) {
                browserHistory.push('/login');
            }
        });
    }

    componentDidMount() {
        const txtEmail = document.getElementById('txtEmail');
        const txtPassword = document.getElementById('txtPassword');
        const txtName = document.getElementById('txtName');
        const btnSignup = document.getElementById('btnSignup');


        btnSignup.addEventListener('click', e => {
            const auth = firebase.auth();
            const email = txtEmail.value;
            const pass = txtPassword.value;
            const name = txtName.value;
            const photo = "https://source.unsplash.com/random";

            auth.createUserWithEmailAndPassword(email, pass).then(function(user){
                return user.updateProfile({
                    displayName: name,
                    photoURL: photo
                })
            }).catch(function(error) {
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
                    <h1>KIOS</h1>

                    <form>
                        <label>Volledige naam</label>
                        <input id="txtName" type="name"/>
                        <label>E-mail</label>
                        <input id="txtEmail" type="email"/>
                        <label>Wachtwoord</label>
                        <input id="txtPassword" type="password"/>
                        <a href="#" className="btn btn-secondary" id="btnSignup">Registreren</a>
                    </form>

                    <Link id="register" to={"/login"}>Al een account? Log hier in!</Link>
                </div>
            </div>
        );
    }
}

export default Signup;