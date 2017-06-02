import {EventEmitter} from 'events';
import dispatcher from '../dispatcher';
import axios from 'axios';

class CourseStore extends EventEmitter{
    constructor(){
        super();

        this.studentId = "0";
        this.student = [];
        this.course = [];

        axios.get('http://dtsl.ehb.be/~jonas.vanduffel/KIOS/api.json').then(data =>{
            let response = data.data.students[this.studentId];

            dispatcher.dispatch({type: "RECEIVE_STUDENT", response});
            dispatcher.dispatch({type: "RECEIVE_COURSE", response});
        });
    }

    getUser(){
        return this.courses;
    }
    createCourse(title, docent, color, favorite){
        this.students[this.studentId].courses.push({
            title,
            docent,
            color,
            favorite: false,
        });

        this.emit("change");
    }

    getStudent() {
        return this.student;
    }
    getCourse(id) {
        return this.student;
    }


    handleActions(action) {
        switch(action.type) {
            case "RECEIVE_STUDENT": {
                this.student = action.response;
                this.emit("change");
                break;
            }
            case "RECEIVE_COURSE": {
                this.course = action.response;
                this.emit("change");
                break;
            }
            default: {}
        }
    }
}

const courseStore = new CourseStore();

dispatcher.register(courseStore.handleActions.bind(courseStore));
window.dispatcher = dispatcher;


export default courseStore;