import React, { Component } from 'react';
import _ from 'lodash';
import Cursus from "../components/CourseBlock";
import CardHeader from '../components/dashboard/comp/CardHeader';


/*import Request from 'superagent';
 import _ from 'lodash';
 import { Link} from 'react-router';*/

var dateFormat = require('dateformat');

import CardHeader from '../components/dashboard/comp/CardHeader';

class Dashboard extends Component {
    constructor(){
        super();
        this.state = {
            person: "0",
        };
    }

    componentWillMount(){
        // Called first time the component is loaded right before component is added to page
        const url = "http://dtsl.ehb.be/~jonas.vanduffel/kios.json";
        Request.get(url).then((response) => {
            this.setState({
                students: response.body.students,
                courses: response.body.students[this.state.person].courses,
                lessons: response.body.students[this.state.person].schedule,
                results: response.body.students[this.state.person].courses.result,
            });
        });
    }


    componentDidMount(){
        // Called after the component has been rendered into the page
    }

    componentWillReceiveProps(nextProps){
        // Called when the props provided to the component are changed
    }

    componentWillUpdate(nextProps, nextState){
        // Called when the props and/or state change
    }

    componentWillUnmount(){
        // Called when the component is removed
    }

    render() {
        /*const coursesPerStudent = _.map(this.state.students, (student) =>{
         const courses = _.map(student.courses, (course) =>{
         return course;
         });

         return (
         courses
         );
         });
         const lessonsPerStudent = _.map(this.state.students, (student) =>{
         const lessons = _.map(student.schedule, (lesson) =>{
         return lesson;
         });

         return (
         lessons
         );
         });*/

        const courseFav = _.map(this.state.courses, (course, index) =>{
            if(course.favorite === true){
                return(
                    <div className={course.color + " course-fav"} key={index}>
                        <div>
                            <span className="title">{course.title}</span>
                        </div>
                        <div className="icons">
                            <div>
                                <Link to={"/cursussen/" + course.title + "/aankondigingen"}>
                                    <img src={require('../assets/icons/glyph/News.svg')} alt="Aankondigingen" />
                                    <img className="update" src={require('../assets/icons/glyph/_misc/Update.svg')} alt="" />
                                </Link>
                            </div>
                            <div>
                                <Link to={"/cursussen/" + course.title + "/cursusdocumenten"}>
                                    <img src={require('../assets/icons/glyph/Document.svg')} alt="Cursusdocumenten" />
                                    <img className="update" src={require('../assets/icons/glyph/_misc/Update.svg')} alt="" />
                                </Link>
                            </div>
                            <div>
                                <Link to={"/cursussen/" + course.title + "/opdrachten"}>
                                    <img src={require('../assets/icons/glyph/Tasks/Dark.svg')} alt="Opdrachten" />
                                    <img className="update" src={require('../assets/icons/glyph/_misc/Update.svg')} alt="" />
                                </Link>
                            </div>
                            <div>
                                <Link to={"/cursussen/" + course.title + "/resultaten"}>
                                    <img src={require('../assets/icons/glyph/Score.svg')} alt="Resultaten" />
                                    <img className="update" src={require('../assets/icons/glyph/_misc/Update.svg')} alt="" />
                                </Link>
                            </div>
                        </div>
                    </div>
                );
            }
        });

        const scoresPerStudent = _.map(this.state.courses, (course, index) => {
            const scores = _.map(course.result, (score) => {
                return score;
            });

            return(
                scores
            )
        });

        const newResults = _.map(scoresPerStudent[this.state.person], (result, index) => {
            let score;

            if(result.score < 10){
                score = "failed";
            } else if(result.score === "Feedback"){
                score = "feedback";
            } else if(result.score >= 10){
                score = "success";
            }

            if(result.seen === false){
                if(result.score === "Feedback"){
                    return(
                        <div className="result" key={index}>
                            <span className={"score " + score}>{result.score}</span>
                            <span className="course">{result.title}</span>
                        </div>
                    );
                } else{
                    return(
                        <div className="result" key={index}>
                            <span className={"score " + score}>{result.score}/20</span>
                            <span className="course">{result.title}</span>
                        </div>
                    );
                }
            }
        });

        const scheduleToday = _.map(this.state.lessons, (lesson, index) => {
            var now = dateFormat(new Date(), "dd/mm/yyyy");

            if(lesson.date === now){
                return(
                    <div className="les" key={index}>
                        <span className="color red"> </span>
                        <div>
                            <span className="title">{lesson.lesson}</span>
                            <br/>
                            <span className="location">{lesson.location}</span>
                        </div>
                        <span className="time"><span className="start">{lesson.start}</span> - <span className="end">{lesson.end}</span></span>
                    </div>
                );
            }
            else{
                return (
                    <span key={index}>Geen lessen vandaag. Geniet van je vrije dag! 😎</span>
                )
            }


        });

        return (
            <div className="row">
                <div className="col-md-4 col-sm-12">
                    <div className="card2 card2-dashboard">
                        <CardHeader title="Lessen van vandaag" src={require("../assets/icons/glyph/Calendar/Dark.svg")} more={true}/>

                        <div id="card-body">
                            {scheduleToday}
                        </div>
                    </div>
                </div>

                <div className="col-md-4 col-sm-12">
                    <div className="card2 card2-dashboard">
                        <CardHeader title="Nieuwe scores" src={require("../assets/icons/glyph/Score.svg")} more={true}/>

                        <div id="card-body">
                            {newResults}
                        </div>
                    </div>
                </div>

                <div className="col-md-4 col-sm-12">
                    <div className="card2 card2-dashboard">
                        <CardHeader title="Volgende deadline" src={require("../assets/icons/glyph/Calendar/Dark.svg")} more={false}/>

                        <div id="card-body">
                            <div id="testt">
                                <img src={require('../assets/icons/circle.svg')}   alt=""/>
                                <div id="deadline">
                                    <span id="deadline-title">Opdracht 1: Persona Profiel</span>
                                    <span id="deadline-time">Woensdag 25 april</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-4 col-sm-12">
                    <div className="card2 card2-dashboard">
                        <CardHeader title="Lessen van vandaag" src={require("../assets/icons/glyph/Calendar/Dark.svg")} more={false}/>

                        <div id="card-body">
                            Geen lessen vandaag. Geniet van je vrije dag! 😎
                        </div>
                    </div>
                </div>

                <div className="col-md-4 col-sm-12">
                    <div className="card2 card2-dashboard">
                        <CardHeader title="Favoriete cursussen" src={require("../assets/icons/glyph/Course/Dark.svg")} more={false}/>

                        <div id="card-body">
                            {courseFav}
                        </div>
                    </div>
                </div>

                <div className="col-md-4 col-sm-12">
                    <div className="card2 card2-dashboard">
                        <CardHeader title="Project van de dag" src={require("../assets/icons/glyph/Firework.svg")} more={true}/>

                        <div id="card-body">
                            <img src={require('../assets/planckendael.jpg')} alt="" />
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default Dashboard;