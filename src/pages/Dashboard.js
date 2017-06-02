import React, { Component } from 'react';
import _ from 'lodash';
import * as firebase from 'firebase';

//Import components
import Course from "../components/dashboard/comp/FavCourse";
import Score from "../components/dashboard/comp/Score";

//Import cards
import Schedule from "../components/dashboard/card/ScheduleToday";

import CourseStore from '../stores/CourseStore';
import Card from "../components/dashboard/card/Card";

class Dashboard extends Component {
    constructor(){
        super();

        this.getStudent = this.getStudent.bind(this);
        this.state = {
            student: CourseStore.getStudent(),
            name: ''
        };
    }

    componentWillMount(){
        CourseStore.on("change", this.getStudent);

        firebase.auth().onAuthStateChanged(firebaseUser => {
            if (firebaseUser) {
                console.log(firebaseUser.displayName);

                this.setState({
                    name: firebaseUser.displayName,
                });
                console.log(this.state.name);

            }
            else {
                console.log("not logged in");
            }
        });
    }

    getStudent(){
        this.setState({
            student: CourseStore.getStudent(),
            studentId: CourseStore.studentId,
        });
    }

    render() {
        const lessons = this.props.schedule || [];
        const { studentId } = this.state;
        const { student } = this.state;

        let ScheduleToday;

        const CourseComponents = _.map(this.props.courses, (course, i) => {
            if(course.favorite === true){
                return <Course key={i} i={i} course={course} {...this.props}/>;
            }
        });

        const Scores = _.map(student.courses, (course, index) => {
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

        return (
            <div className="row">
                <Card title="Lessen van vandaag" src="Calendar/Dark.svg" more="/kalender">
                    {ScheduleToday}
                </Card>

                <Card title="Nieuwe scores" src="Score.svg" more="">
                    {NewScores}
                </Card>

                <Card title="Volgende deadline" src="Calendar/Dark.svg" more="">
                    <div id="testt">
                        <img src={require('../assets/icons/circle.svg')} alt=""/>
                        <div id="deadline">
                            <span id="deadline-title">Opdracht 1: Persona Profiel</span>
                            <span id="deadline-time">Woensdag 25 april</span>
                        </div>
                    </div>
                </Card>

                <Card title="Favoriete cursussen" src="Course/Dark.svg" more="">
                    {CourseComponents}
                </Card>

                <Card title="Project van de dag" src="Firework.svg" more="/community">
                    <img src={require('../assets/portfolio.png')} alt="" />
                </Card>
            </div>
        );
    }
}

export default Dashboard;