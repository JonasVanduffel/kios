import React, { Component } from 'react';
import * as firebase from 'firebase';
import { browserHistory } from 'react-router';

class Cursussen extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount(){
        const user = firebase.auth().currentUser;
        const database = firebase.database();
        const ref = database.ref('/users/' + user.uid);

        document.getElementById("txtName").value = user.displayName;
        document.getElementById("txtEmail").value = user.email;
        document.getElementById("txtPhotoUrl").value = user.photoURL;

        ref.once('value', setType);
        function setType(data){
            document.getElementById("mySelect").value = data.val().type;
        }
    }

    updateProfile(){
        const user = firebase.auth().currentUser;
        const database = firebase.database();

        user.updateProfile({
            displayName: document.getElementById("txtName").value,
            photoURL: document.getElementById("txtPhotoUrl").value
        });

        user.updateEmail(document.getElementById("txtEmail").value);

        database.ref('users/' + user.uid).set({
            type: document.getElementById("mySelect").value
        }).then(function(){
            window.location.reload();
        });
    }

    deleteAccount(){
        const user = firebase.auth().currentUser;

        user.delete().then(function() {
            window.location.reload();
        });
    }

    render() {
        return (
            <div>
                <form id="account-settings">
                    <label>Naam</label>
                    <input type="email" id="txtName"/>

                    <label>E-mail</label>
                    <input type="email" id="txtEmail"/>

                    <label>Foto</label>
                    <small>Willekeurige foto: https://source.unsplash.com/random</small>
                    <input type="email" id="txtPhotoUrl"/>

                    <label>Account type</label>
                    <select id="mySelect">
                        <option value="Student">Student</option>
                        <option value="Docent">Docent</option>
                    </select>

                    <a href="#" onClick={this.updateProfile.bind(this)} className="btn btn-primary btn-marginright">Wijzigingen opslaan</a>
                    <a href="#" onClick={this.deleteAccount.bind(this)} className="btn btn-secondary btn-small">Account verwijderen</a>
                </form>
            </div>
        );
    }
}

export default Cursussen;