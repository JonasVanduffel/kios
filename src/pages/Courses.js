import React, { Component } from 'react';
import _ from 'lodash';
import Cursus from "../components/CardCourse";
import * as firebase from 'firebase';



class Cursussen extends Component {
    constructor(props) {
        super(props);
        this.state = { courses: null };
        this.onSettingsChanged = this.onSettingsChanged.bind(this);
    }

    onSettingsChanged(data){
        this.setState({courses: data.val().courses});
    }

    componentDidMount() {
        var userId = firebase.auth().currentUser.uid;
        firebase.database().ref('/users/' + userId).once('value', this.onSettingsChanged);
    }

    render() {
        //console.log(this.state.courses);



        const CourseComponents = _.map(this.props.courses, (course, i) => {
            if(course.group === "2016/2017") {
                return <Cursus key={i} i={i} course={course} status="online" {...this.props}/>;
            }
        });

        /*const Courses = _.map(this.state.courses, (course, i) => {
            if(course.group === "2016/2017") {
                return <Cursus key={i} i={i} course={course} {...this.props}/>;
            }
        });*/


        if(this.props.children.type === "Student"){
            return (
                <div id="grid" className="row">
                    {CourseComponents}
                </div>
            );
        } else{
            return (
                <div id="grid" className="row">
                    {CourseComponents}
                    {/*<div className="col-md-3 col-sm-6">
                        <div className={"card card-course border-none"}>
                            + Nieuwe Cursus
                        </div>
                    </div>*/}
                </div>
            );
        }


    }
}

export default Cursussen;