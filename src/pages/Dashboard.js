import React, { Component } from 'react';
import _ from 'lodash';
import * as firebase from 'firebase';

//Import components
import Score from "../components/dashboard/CompScore";
import Course from "../components/dashboard/CompFavCourses";

//Import cards
import Schedule from "../components/dashboard/CompToday";
import Card from "../components/dashboard/Card";

class Dashboard extends Component {
    writeUserData(){
        let user = firebase.auth().currentUser;
        var database = firebase.database();
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
        this.setState({edit: false});
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
        const { type } = this.props;

        let ScheduleToday;

        const CourseComponents = _.map(this.props.courses, (course, i) => {
            if(course.favorite === true){
                return <Course key={i} i={i} course={course} {...this.props}/>;
            }
        });

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
                <div>
                    <div className="row js-grid">
                        <Card title="Lessen van vandaag" src="Calendar.svg" editable={this.state.edit}>
                            {ScheduleToday}
                        </Card>

                        <Card id="new-scores" title="Nieuwe scores" src="Score.svg" editable={this.state.edit}>
                            <Score title="Opdracht 1: Persona Profiel" score="17"/>
                            <Score title="Boekbespreking" score="09"/>
                            <Score title="Onderzoek bachelorproef" score="17"/>
                            <Score title="Navigatiestructuur" score="Feedback"/>
                        </Card>

                        <Card title="Volgende deadline" src="Calendar.svg" more="" editable={this.state.edit}>
                            <div id="testt">
                                <img src={require('../assets/Glyph/circle.svg')} alt=""/>
                                <div id="deadline">
                                    <span id="deadline-title">Opdracht 1: Persona Profiel</span>
                                    <span id="deadline-time">Woensdag 25 april</span>
                                </div>
                            </div>
                        </Card>

                        <Card title="Project van de dag" src="Firework.svg" more="/inspiratie" editable={this.state.edit}>
                            <img src={require('../assets/inspiration-example.png')} alt="" />
                        </Card>

                        <Card title="Favoriete cursussen" src="Course.svg" more="/cursussen" editable={this.state.edit}>
                            {CourseComponents}
                        </Card>
                    </div>

                    <a href="#" id="editCards" className="btn btn-primary btn-edit" onClick={Dashboard.handleChange.bind(this)}>
                        Bewerken
                    </a>

                    <a href="#" id="editCards" className="btn btn-primary btn-edit" onClick={this.writeUserData.bind(this)}>
                        Add
                    </a>
                </div>
            );
        } else{
            return (
                <div>
                    <div className="row js-grid">
                        <Card title="Volgende deadline" src="Calendar.svg" more="">
                            <div id="testt">
                                <img src={require('../assets/Glyph/circle.svg')} alt=""/>
                                <div id="deadline">
                                    <span id="deadline-title">Opdracht 1: Persona Profiel</span>
                                    <span id="deadline-time">Woensdag 25 april</span>
                                </div>
                            </div>
                        </Card>

                        <Card title="Project van de dag" src="Firework.svg" more="/inspiratie">
                            <img src={require('../assets/inspiration-example.png')} alt="" />
                        </Card>

                        <Card title="Favoriete cursussen" src="Course.svg" more="/cursussen">
                            {CourseComponents}
                        </Card>
                    </div>

                    <a href="#" id="editCards" className="btn btn-primary btn-edit" onClick={Dashboard.handleChange.bind(this)}>
                        Bewerken
                    </a>
                </div>
            );
        }



    }
}

export default Dashboard;