import React, { Component } from 'react';
import _ from 'lodash';
import * as firebase from 'firebase';

var ReactGridLayout = require('react-grid-layout');

//Import components
import Score from "../components/dashboard/ComponentScore";
import Course from "../components/dashboard/ComponentFavCourse";
import Deadline from "../components/dashboard/ComponentDeadline";

//Import cards
import Schedule from "../components/dashboard/ComponentToday";
import Card from "../components/dashboard/DashboardCard";

class Dashboard extends Component {
    writeUserData(){
        const user = firebase.auth().currentUser;
        const database = firebase.database();
        database.ref('users/' + user.uid).set({
            courses: [
                {
                    "id": "0001",
                    "title": "iOS Design & Development",
                    "docent": "Philip Perez",
                    "color": "green",
                    "favorite": false,
                    "group" : "2016/2017",
                },
                {
                    "id": "0002",
                    "title": "Creative Programming III",
                    "docent": "Mary Alexander",
                    "color": "greenblue",
                    "favorite": false,
                    "group" : "2016/2017",
                },
                {
                    "id": "0003",
                    "title": "Data Management",
                    "docent": "Jason Frank",
                    "color": "purple",
                    "favorite": true,
                    "group" : "2016/2017",
                },
                {
                    "id": "0004",
                    "title": "Integration Multiscreen",
                    "docent": "West Raphael",
                    "color": "orange",
                    "favorite": true,
                    "group" : "2016/2017",
                },
                {
                    "id": "0005",
                    "title": "User Experience Design",
                    "docent": "Justin Berry",
                    "color": "yellow",
                    "favorite": true,
                    "group" : "2016/2017",
                },
                {
                    "id": "0006",
                    "title": "User Interface Design",
                    "docent": "Polly Walsh",
                    "color": "gray",
                    "favorite": false,
                    "group" : "2016/2017",
                },
                {
                    "id": "0007",
                    "title": "Networked Media",
                    "docent": "Dylan Freeman",
                    "color": "gray",
                    "favorite": false,
                    "group" : "2015/2016",
                },
                {
                    "id": "0008",
                    "title": "Motion Design",
                    "docent": "Rob Lord",
                    "color": "gray",
                    "favorite": false,
                    "group" : "2015/2016",
                },
                {
                    "id": "A024",
                    "title": "Studentenintranet",
                    "docent": "Departement Design & Technologie",
                    "color": "orange",
                    "favorite": false,
                    "group" : "general",
                },
                {
                    "id": "A028",
                    "title": "Go Abroad...and do it well",
                    "docent": "Departement Design & Technologie",
                    "color": "orange",
                    "favorite": false,
                    "group" : "general",
                },
            ],
            type: "Student"
        });
    }

   componentWillMount(){
       const user = firebase.auth().currentUser;
       const database = firebase.database();
       const ref = database.ref('/users/' + user.uid);

       this.setState({edit: false});

       /*database.ref('users/' + user.uid).set({
           type: "Docent"
       });*/


       ref.once('value', setData);

       function setData(data){
           if(data.val()){

           } else{
               database.ref('users/' + user.uid).set({
                   type: "Student"
               });
           }
       }

       /*var ref = database.ref('/users/' + user.uid);


       function gotData(data){
           var data = data.val();
           var c = data.type;
           if(data){
               console.log("JA");
           } else{
               database.ref('users/' + user.uid).set({
                   type: "Student"
               });
           }
       }*/


       /* let database;
        var userId = firebase.auth().currentUser.uid;

        database = firebase.database();
        var ref = database.ref('/users/' + userId);

        ref.once('value', gotData, errData);

        function gotData(data){
            var data = data.val();
            var c = data.courses;

            for(var i = 0; i < data.courses.length; i++){
                console.log(c[i].title);
            }
        }

        function errData(err){
            console.log(err);
        }*/
    }

    static handleChange(e){
        if(this.state.edit === false){
            this.setState({edit: true});
        } else if(this.state.edit === true){
            this.setState({edit: false});
        }
    }

    render() {
        const lessons = this.props.schedule || [];
        const courses = this.props.courses;
        const type = this.props.children.type;
        let ScheduleToday;

        /*const Scores = _.map(student.courses, (course, index) => {
         const scores = _.map(course.result, (score) => {
         return score;
         });

         return(
         scores
         )
         });
         const NewScores = _.map(Scores[studentId], (result, index) => {
         if(!result.seen){
         return(
         <Score key={index} title={result.title} score={result.score} {...result}/>
         )
         }
         });
         */

        const FavouriteCourses = <Course courses={courses}/>;
        const RandomProject = this.props.projects[Math.floor(Math.random()*this.props.projects.length)].imgSrc;

        if(lessons.length === 0){
            ScheduleToday = (
                <div id="card-body">
                    <span>Geen lessen vandaag. Geniet van je vrije dag! 😎</span>
                </div>
            );
        }
        else{
            ScheduleToday = (
                <Schedule lessons={lessons}/>
            );
        }

        if(type === "Student"){
            return (
                <div className="masonry-layout">
                    <div className="column">
                        <div className="panel">
                            <Card  title="Lessen van vandaag" src="Calendar.svg" editable={this.state.edit}>
                                {ScheduleToday}
                            </Card>
                        </div>
                        <div className="panel ">
                            <Card title="Favoriete cursussen" src="Course.svg" hasMore="/cursussen" editable={this.state.edit}>
                                {FavouriteCourses}
                            </Card>
                        </div>
                        <div className="panel">
                            <Card title="Volgende deadline" src="Calendar.svg" hasMore="" editable={this.state.edit}>
                                <div id="testt">
                                    <img src={require('../assets/Glyph/circle.svg')} alt=""/>
                                    <div id="deadline">
                                        <span id="deadline-title">Opdracht 1: Persona Profiel</span>
                                        <span id="deadline-time">Woensdag 25 april</span>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    </div>
                    <div className="column">
                        <div className="panel">
                            <Card title="Opkomende deadlines" src="Calendar.svg" hasMore="" editable={this.state.edit}>
                                <Deadline title="Statische website (HTML/CSS/JS)" date="Gisteren"/>
                                <Deadline title="Persona profiel" date="Vandaag"/>
                                <Deadline title="Storyboard video" date="5/5/2017"/>
                            </Card>
                        </div>
                        <div className="panel">
                            <Card id="new-scores" title="Nieuwe scores" src="Score.svg" editable={this.state.edit}>
                                <Score title="Opdracht 1: Persona Profiel" score="17"/>
                                <Score title="Boekbespreking" score="09"/>
                                <Score title="Onderzoek bachelorproef" score="17"/>
                                <Score title="Navigatiestructuur" score="Feedback"/>
                            </Card>
                        </div>
                    </div>

                    <div className="column">
                        <div className="panel">
                            <Card title="Project van de dag" src="Firework.svg" hasMore="/inspiratie" editable={this.state.edit}>
                                <img id="dashboard-project" src={require('../assets/projects/' + RandomProject)} alt="" />
                            </Card>
                        </div>
                    </div>
                    <a href="#" id="editCards" className="btn btn-primary btn-edit btn-small" onClick={Dashboard.handleChange.bind(this)}>
                        Bewerken
                    </a>
                </div>
            );
        } else{
            return (
                <div className="masonry-layout">
                    <div className="column">
                        <div className="panel">
                            <Card  title="Lessen van vandaag" src="Calendar.svg" editable={this.state.edit}>
                                {ScheduleToday}
                            </Card>
                        </div>
                        <div className="panel ">
                            <Card title="Favoriete cursussen" src="Course.svg" hasMore="/cursussen" editable={this.state.edit}>
                                {FavouriteCourses}
                            </Card>
                        </div>
                        <div className="panel">
                            <Card title="Volgende deadline" src="Calendar.svg" hasMore="" editable={this.state.edit}>
                                <div id="testt">
                                    <img src={require('../assets/Glyph/circle.svg')} alt=""/>
                                    <div id="deadline">
                                        <span id="deadline-title">Opdracht 1: Persona Profiel</span>
                                        <span id="deadline-time">Woensdag 25 april</span>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    </div>
                    <div className="column">
                        <div className="panel">
                            <Card title="Opkomende deadlines" src="Calendar.svg" hasMore="" editable={this.state.edit}>
                                <Deadline title="Statische website (HTML/CSS/JS)" dl="Gisteren"/>
                                <Deadline title="Persona profiel" dl="Vandaag"/>
                                <Deadline title="Storyboard video" dl="5/5/2017"/>
                            </Card>
                        </div>
                        <div className="panel">
                            <Card id="new-scores" title="Nieuwe scores" src="Score.svg" editable={this.state.edit}>
                                <Score title="Opdracht 1: Persona Profiel" score="17"/>
                                <Score title="Boekbespreking" score="09"/>
                                <Score title="Onderzoek bachelorproef" score="17"/>
                                <Score title="Navigatiestructuur" score="Feedback"/>
                            </Card>
                        </div>
                    </div>

                    <div className="column">
                        <div className="panel">
                            <Card title="Project van de dag" src="Firework.svg" hasMore="/inspiratie" editable={this.state.edit}>
                                <img id="dashboard-project" src={require('../assets/projects/' + RandomProject)} alt="" />
                            </Card>
                        </div>
                    </div>
                    <a href="#" id="editCards" className="btn btn-primary btn-edit btn-small" onClick={Dashboard.handleChange.bind(this)}>
                        Bewerken
                    </a>
                </div>

            );
        }



    }
}

export default Dashboard;