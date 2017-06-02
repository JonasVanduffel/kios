import React, { Component } from 'react';

export default class Score extends Component{
    render(){
        const { title, score } = this.props;
        let scoreText;

        if(score < 10){
            scoreText = "failed";
        } else if(score === "Feedback"){
            scoreText = "feedback";
        } else if(score >= 10){
            scoreText = "success";
        }

        if(score === "Feedback"){
            return(
                <div className="result">
                    <span className={"score " + scoreText}>{score}</span>
                    <span className="course">{title}</span>
                </div>
            )
        } else{
            return(
                <div className="result">
                    <span className={"score " + scoreText}>{score}/20</span>
                    <span className="course">{title}</span>
                </div>
            )
        }
    }
}