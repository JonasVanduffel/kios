import React, { Component } from 'react';
import * as firebase from 'firebase';
import { browserHistory } from 'react-router';
import { Link } from 'react-router';

class Signup extends Component {
    constructor(){
        super();
        this.state = {
            user : '',
            pic : '',
        };
    }

    componentDidMount() {
        const txtEmail = document.getElementById('txtEmail');
        const txtPassword = document.getElementById('txtPassword');
        const txtName = document.getElementById('txtName');
        const btnSignup = document.getElementById('btnSignup');


        btnSignup.addEventListener('click', e => {
            const email = txtEmail.value;
            const pass = txtPassword.value;
            const name = txtName.value;
            const photo = "https://source.unsplash.com/random";
            const auth = firebase.auth();

            auth.createUserWithEmailAndPassword(email, pass).then(function(user){
                return user.updateProfile({
                    displayName: name,
                    photoURL: photo
                })
            });


        });

        firebase.auth().onAuthStateChanged(firebaseUser => {
            if (firebaseUser) {
                browserHistory.push('/login');
            }
        });
    }

    render() {

        return (

            <div id="login">
                <div id="login-wrapper">
                    <h1>KIOS</h1>

                    <div id="login-form">
                        <input id="txtName" type="name" placeholder="Voor + achternaam"/>
                        <input id="txtEmail" type="email" placeholder="E-mailadres"/>
                        <input id="txtPassword" type="password" placeholder="Wachtwoord"/>

                        <a href="#" className="btn2 btn-accent" id="btnSignup">Registreren</a>

                        <Link id="register" to={"/login"}>Inloggen</Link>
                    </div>
                </div>
            </div>




        );
    }
}

export default Signup;