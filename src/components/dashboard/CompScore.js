import React, { Component } from 'react';

export default class Score extends Component{
    handleChange(){
        let results = document.getElementsByClassName('result');
        let res = results[0];
        if(res){
            res.parentNode.removeChild(res);
        }
    }

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
                    <span className="close"><a onClick={this.handleChange.bind(this)}><img src={require('../../assets/Glyph/_misc/Close.svg')} alt="" /></a></span>
                </div>
            )
        } else{
            return(
                <div className="result">
                    <span className={"score " + scoreText}>{score}/20</span>
                    <span className="course">{title}</span>
                    <span className="close"><a onClick={this.handleChange.bind(this)}><img src={require('../../assets/Glyph/_misc/Close.svg')} alt="" /></a></span>
                </div>
            )
        }
    }
}