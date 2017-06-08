import dispatcher from "../dispatcher";
import axios from 'axios';

/*export function createCourse(title){
    dispatcher.dispatch({
        type: "CREATE_COURSE",
        title,
    });
}

export function deleteCourse(title){
    dispatcher.dispatch({
        type: "DELETE_TODO",
        title,
    });
}

export function reloadCourses() {
    axios("http://dtsl.ehb.be/~jonas.vanduffel/kios.json").then((data) => {
      console.log("got the data!", data);

      this.students = data;

      dispatcher.dispatch({type: "RECEIVE_COURSES", data});
    });
}*/

export function getCourses(){
    axios.get('http://dtsl.ehb.be/~jonas.vanduffel/KIOS/api.json').then(data =>{
        let response = data.data.students[this.studentId];
        dispatcher.dispatch({type: "RECEIVE_STUDENT", response});
    });
}