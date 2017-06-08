/*
import React, { Component } from 'react';
import _ from 'lodash';
import Course from "../components/dashboard/comp/FavCourse";
import Lesson from "../components/dashboard/card/ScheduleToday";
import Score from "../components/dashboard/comp/Score";
import CardHeader from '../components/dashboard/comp/CardHeader';
import CourseStore from '../stores/CourseStore';

const dateFormat = require('dateformat');
const now = dateFormat(new Date(), "dd/mm/yyyy");


class Dashboard extends Component {
    constructor(){
        super();

        this.getStudent = this.getStudent.bind(this);
        this.state = {
            student: CourseStore.getStudent(),
        };
    }

    componentWillMount(){
        CourseStore.on("change", this.getStudent);
    }

    getStudent(){
        this.setState({
            student: CourseStore.getStudent(),
            studentId: CourseStore.studentId,
        });
    }

    render() {
        const {studentId} = this.state;
        const {student} = this.state;
        let lessonsToday = true;
        // let lessonsToday = false;
        let ScheduleToday;

        const lessons = this.props.schedule || [];


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
        const CourseFavorites = _.map(student.courses, (course, index) => {
            if(course.favorite === true){
                return <Course key={index} title={course.title} docent={course.docent} color={course.color} {...course}/>;
            }
        });
        const Schedule = _.map(student.schedule, (lesson, index) => {
            //if(lesson.date === now){
            lessonsToday = true;

            return(<Lesson key={index} title={lesson.date} date={lesson.date} start={lesson.start} end={lesson.end} location={lesson.location} {...lesson}/>)
            //}
            /!*else{
             return(null)
             }*!/
        });


        if(lessonsToday){
            ScheduleToday = (
                Schedule
            );
        } else{
            ScheduleToday = (
                <span>Geen lessen vandaag. Geniet van je vrije dag! 😎</span>
            );
        }

        return (
            <div className="row">
                <div className="col-md-4 col-sm-12">
                    <div className="card2 card2-dashboard">
                        <CardHeader title="Lessen van vandaag" src={require("../assets/glyphs/glyph/Calendar/Dark.svg")} more={true}/>
                        <Lesson lessons={lessons}/>
                    </div>
                </div>

                <div className="col-md-4 col-sm-12">
                    <div className="card2 card2-dashboard">
                        <CardHeader title="Nieuwe scores" src={require("../assets/glyphs/glyph/Score.svg")} more={true}/>

                        <div id="card-body">
                            {NewScores}
                        </div>
                    </div>
                </div>

                <div className="col-md-4 col-sm-12">
                    <div className="card2 card2-dashboard">
                        <CardHeader title="Volgende deadline" src={require("../assets/glyphs/glyph/Calendar/Dark.svg")} more={false}/>

                        <div id="card-body">
                            <div id="testt">
                                <img src={require('../assets/glyphs/circle.svg')}   alt=""/>
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
                        <CardHeader title="Favoriete cursussen" src={require("../assets/glyphs/glyph/Course/Dark.svg")} more={false}/>

                        <div id="card-body">
                            {CourseFavorites}
                        </div>
                    </div>
                </div>

                <div className="col-md-4 col-sm-12">
                    <div className="card2 card2-dashboard">
                        <CardHeader title="Project van de dag" src={require("../assets/glyphs/glyph/Firework.svg")} more={true}/>

                        <div id="card-body">
                            <img src={require('../assets/planckendael.jpg')} alt="" />
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default Dashboard;*/
