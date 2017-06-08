import React, { Component } from 'react';
import CourseStore from '../../stores/CourseStore';
import SubNav from "../navigation/SubNav";
import { Link } from 'react-router';

export default class HeaderNew extends Component{
    constructor(props){
        super();
        this.getStudent = this.getStudent.bind(this);
        this.state = {
            studentId: "1",
            student: CourseStore.getStudent(),
        };
    }

    componentWillMount(){
        CourseStore.on("change", this.getStudent);
    }

    getStudent(){
        this.setState({
            student: CourseStore.getStudent(),
        });
    }

    static search(query){
        if (query.length === 0) {
            document.getElementById("search-popup").style.display = "none";
            document.getElementById("search-icon").style.display = "block";
        } else {
            document.getElementById("search-popup").style.display = "block";
            document.getElementById("search-icon").style.display = "none";
            document.getElementById("search-term").innerHTML = query;
        }
    }

    static handleChange(e){
        const query = e.target.value;
        HeaderNew.search(query);
    }

    render(){
        const {title, cursus } = this.props;

        if(cursus){
            return(
                <div id="wrapper-header">
                    <div>
                        <header>
                            <h1><Link to={"/cursussen"}>Cursussen</Link> <i className="fa fa-angle-double-right" aria-hidden="true"> </i> {title}</h1>
                            <input type="text" id="main-search" placeholder="Zoeken..." onChange={HeaderNew.handleChange.bind(this)}  /><span id="search-icon"> </span>
                        </header>

                        <div id="search-popup">
                            <Link to="#" id="close"><i className="fa fa-close" aria-hidden="true"/></Link>
                            <span>Resultate:</span>
                            <h4 id="search-term">Zoeken</h4>
                        </div>

                        <SubNav {... this.props}/>
                    </div>
                </div>
            )
        } else {
            return(
                <div id="wrapper-header">
                    <div>
                        <header>
                            <h1>{title}</h1>
                            {/*<input type="text" id="main-search" placeholder="Zoeken..." /><span id="search-icon"> </span>*/}
                            <input type="text" id="main-search" placeholder="Zoeken..." onChange={HeaderNew.handleChange.bind(this)}  /><span id="search-icon"> </span>
                        </header>

                        <div id="search-popup">
                            <Link to="#" id="close"><i className="fa fa-close" aria-hidden="true"/></Link>
                            <span>Resultaten:</span>
                            <h4 id="search-term">Zoeken</h4>
                        </div>

                        <SubNav {... this.props}/>
                    </div>
                </div>
            )
        }
    }
}