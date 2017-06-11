import React  from 'react';

const ScheduleToday = React.createClass({
    renderLesson(lesson, i){
        return(
            <div className="lesson" key={i}>
                <div>
                    <span className="title">{lesson.title}</span>
                    <br/>
                    <span className="location">{lesson.location}</span>
                </div>
                <span className="time"><span className="start">{lesson.start}</span> - <span className="end">{lesson.end}</span></span>
            </div>
        )
    },

    render(){
        return(
            <span>
                {this.props.lessons.map(this.renderLesson)}
            </span>
        )
    }
});

export default ScheduleToday;