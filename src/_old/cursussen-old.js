import React, { Component } from 'react';
import Request from 'superagent';
import _ from 'lodash';
import { Link} from 'react-router';
import CourseStore from '../stores/CourseStore';


class Cursussen extends Component {
    constructor(){
        super();
        this.state = {
            person: "0",
            courses: CourseStore.getAll(1),
        };
    }

    changePerson(person){
        this.setState({
            person: person,
        });

    }
    handleChange(e){
        const person = e.target.value;
        this.changePerson(person);
    }

    /*    componentWillMount(){
     // Called first time the component is loaded right before component is added to page
     const url = "http://dtsl.ehb.be/~jonas.vanduffel/kios.json";
     Request.get(url).then((response) => {
     this.setState({
     /!*courses: response.body.students[this.state.person].courses,
     studentName: response.body.students[this.state.person].name,*!/
     });
     });
     }*/

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
        const allCourses = this.state.courses;

        /*        const coursesPerStudent = _.map(this.state.students, (student) =>{
         var courses = _.map(student.courses, (course) =>{
         return course;
         });

         return (
         courses
         );
         });*/
        /*       const student = _.map(this.state.students, (student) =>{
         return student.name;
         });*/

        const coursez = _.map(allCourses, (course, index) =>{
            return (
                <div className="col-md-3 col-sm-6" key={index}>
                    <div className={course.color + " card course"}>
                        <h3><Link to={"/cursussen/" + course.title + "/aankondigingen"}>{course.title}</Link></h3>
                        <span>{course.docent}</span>
                        <div className="course-icons">
                            <Link to={"/cursussen/" + course.title + "/aankondigingen"}><img src={require('../assets/icons/glyph/News.svg')} alt="Aankondigingen" /></Link>
                            <Link to={"/cursussen/" + course.title + "/cursusdocumenten"}><img src={require('../assets/icons/glyph/Document.svg')} alt="Documenten" /></Link>
                            <Link to={"/cursussen/" + course.title + "/opdrachten"}><img src={require('../assets/icons/glyph/Tasks/Dark.svg')} alt="Opdrachten" /></Link>
                            <Link to={"/cursussen/" + course.title + "/resultaten"}><img src={require('../assets/icons/glyph/Score.svg')} alt="Resultaten" /></Link>
                        </div>
                    </div>
                </div>
            )
        });

        const courses = _.map(this.state.courses, (course, index) =>{
            return(

                <div className="col-md-3 col-sm-6" key={index}>
                    <div className={course.color + " card course"}>
                        <h3><Link to={"/cursussen/" + course.title + "/aankondigingen"}>{course.title}</Link></h3>
                        <span>{course.docent}</span>
                        <div className="course-icons">
                            <Link to={"/cursussen/" + course.title + "/aankondigingen"}><img src={require('../assets/icons/glyph/News.svg')} alt="Aankondigingen" /></Link>
                            <Link to={"/cursussen/" + course.title + "/cursusdocumenten"}><img src={require('../assets/icons/glyph/Document.svg')} alt="Documenten" /></Link>
                            <Link to={"/cursussen/" + course.title + "/opdrachten"}><img src={require('../assets/icons/glyph/Tasks/Dark.svg')} alt="Opdrachten" /></Link>
                            <Link to={"/cursussen/" + course.title + "/resultaten"}><img src={require('../assets/icons/glyph/Score.svg')} alt="Resultaten" /></Link>
                        </div>
                    </div>
                </div>
            );
        });

        return (
            <div id="grid" className="row js-grid">
                {coursez}
                {this.state.studentName}
                <select onChange={this.handleChange.bind(this)}>
                    <option value="0">Volvo</option>
                    <option value="1">Saab</option>
                    <option value="2">Mercedes</option>
                </select>
            </div>
        );
    }
}

export default Cursussen;