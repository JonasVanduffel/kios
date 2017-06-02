import React, { Component } from 'react';
import * as firebase from 'firebase';
import { browserHistory } from 'react-router';
import { Link } from 'react-router';

class Signup2 extends Component {
    constructor(){
        super();
    }

    componentDidMount() {
        const txtEmail = document.getElementById('txtEmail');
        const txtPassword = document.getElementById('txtPassword');
        const txtName = document.getElementById('txtName');
        const txtPhoto = document.getElementById('txtPhoto');
        const btnSignup = document.getElementById('btnSignup');


        btnSignup.addEventListener('click', e => {
            const email = txtEmail.value;
            const pass = txtPassword.value;

            const auth = firebase.auth();

            const promise = auth.createUserWithEmailAndPassword(email, pass);
        });



        firebase.auth().onAuthStateChanged(firebaseUser => {
            if (firebaseUser) {
                console.log(firebaseUser.displayName);
            }
            else {
                console.log("not logged in");
            }
        });
    }

    render() {

        return (
            <div>
                <div>
                    <input id="txtEmail" type="email" placeholder="Email"/>
                    <input id="txtPassword" type="password" placeholder="Password"/>

                    <button id="btnSignup">Sign up</button>
                </div>
                <Link to={"/login"}>Terug naar login</Link>
            </div>
        );
    }
}

export default Signup2;