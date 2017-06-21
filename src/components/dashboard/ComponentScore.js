import React, { Component } from 'react';
import { Link } from 'react-router';

export default class ComponentScore extends Component{
    /*removeScore(e){
        let result = e.target.parentNode.parentNode;
        console.log(result);
        //let results = document.getElementsByClassName('card');
        let res = result.parentNode;
        res.remove();
    }*/

    render(){
        const { title, score } = this.props;
        let scoreText;
        let twenty = "/20";

        if(score < 10){
            scoreText = "failed";
        } else if(score === "Feedback"){
            scoreText = "feedback";
            twenty = null;
        } else if(score >= 10){
            scoreText = "success";
        }

        return(
            <div className="result">
                <span className={"score " + scoreText}>{score}{twenty}</span>
                <Link to=""><span className="course">{title}</span></Link>
                {/*<span className="close"><a onClick={this.removeScore.bind(this)}><img src={require('../../assets/Glyph/_misc/Close.svg')} alt="" /></a></span>*/}
            </div>
        )
    }
}