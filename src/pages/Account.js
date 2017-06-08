import React, { Component } from 'react';
import * as firebase from 'firebase';

class Cursussen extends Component {
    constructor(props) {
        super(props);


    }

    componentDidMount(){
        var user = firebase.auth().currentUser;
        var name, email, photoUrl, uid, emailVerified;


        if (user != null) {
            name = user.displayName;
            email = user.email;
            photoUrl = user.photoURL;
            emailVerified = user.emailVerified;
            uid = user.uid;  // The user's ID, unique to the Firebase project. Do NOT use
                             // this value to authenticate with your backend server, if
                             // you have one. Use User.getToken() instead.
        }

        var txtName = document.getElementById("txtName").value = name;
        var txtEmail = document.getElementById("txtEmail").value = email;
        var txtPhotoUrl = document.getElementById("txtPhotoUrl").value = photoUrl;
        document.getElementById("verif").textContent = emailVerified;

    }

    updateProfile(){
        var user = firebase.auth().currentUser;

        user.updateProfile({
            displayName: document.getElementById("txtName").value,
            photoURL: document.getElementById("txtPhotoUrl").value
        }).then(function() {
            // Update successful.
        }, function(error) {
            // An error happened.
        });

        user.updateEmail(document.getElementById("txtEmail").value).then(function() {
            // Update successful.
        }, function(error) {
            console.log(error);
        });
    }

    verif(){
        var user = firebase.auth().currentUser;

        user.sendEmailVerification().then(function() {
            // Email sent.
        }, function(error) {
            // An error happened.
        });
    }

    deleteAccount(){
        var user = firebase.auth().currentUser;

        user.delete().then(function() {
            // User deleted.
        }, function(error) {
            // An error happened.
        });
    }

    render() {
        return (
            <div>
                <form>
                    <label>Naam</label><br/>
                    <input type="email" id="txtName"/>

                    <br/><br/>

                    <label>E-mail</label><br/>
                    <input type="email" id="txtEmail"/>

                    <br/><br/>

                    <label>Foto</label><br/>
                    <input type="email" id="txtPhotoUrl"/>

                    <br/><br/>

                    <label>Geverifieerd?</label><br/>
                    <span id="verif"> </span>

                    <br/><br/>

                    <input type="button" onClick={this.updateProfile.bind(this)} value="Opslaan"/>
                    <input type="button" onClick={this.verif.bind(this)} value="Verifiëren"/><br/><br/>
                    <input type="button" onClick={this.deleteAccount.bind(this)} value="Account verwijderen"/>
                </form>
            </div>
        );
    }
}

export default Cursussen;