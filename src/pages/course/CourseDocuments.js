import React, { Component } from 'react';
import $ from 'jquery';

import File from '../../components/CardFile';
import { Link } from 'react-router';

export default class CursusDocumenten extends Component {
    constructor(props) {
        super(props);
    }

    _toggleDiv(e) {
        let thizz = $(e.target.parentNode.nextSibling);
        console.log(thizz);
        thizz.slideToggle("fast");
    }

    render() {
        let icon = "Download.svg";
        let actionButton;

        switch(this.props.children.type){
            case "Student":
                icon = "Download.svg";
                actionButton = (
                    <div id="action-button" className="no-mobile">
                        <Link to="/" className="btn btn-small btn-primary "><img src={require('./../../assets/Glyph/Light/Download.svg')} alt="" /> Download alle bestanden</Link>
                    </div>
                );
                break;
            case "Docent":
                icon = "Settings.svg";
                actionButton = (
                    <div id="action-button" className="no-mobile">
                        <a href="#" className="btn btn-primary">+ Bestanden</a>
                    </div>
                );
                break;
        }

        return (
            <div>
                {actionButton}

                <div className="row">
                    <div className="col-md-12 col-sm-12">

                        <div className="card card-course-files">
                            <section>
                                <a href="#" onClick={this._toggleDiv}>
                                    <h3>
                                        Algemeen
                                        <img src={require(`../../assets/Glyph/Dark/${icon}`)} alt="" />
                                    </h3>
                                </a>

                                <div className="files" ref="toggle-div">
                                    <ul>
                                        <File title="Infosessie Final Work 23 mei 2015" type="pdf"/>
                                        <File title="Infosessie Kickoff Final Work 3/10/2016" type="pdf"/>
                                        <File title="Infosessie onderzoekend handelen Final Work 10/10/2016" type="pdf"/>
                                        <File title="groepsindeling Blend" type="pdf"/>
                                        <File title="infosessie: Slides blend Verslag schrijven 27/02/2017" type="pdf"/>
                                        <File title="Infosessie: posterpresentatie Final Work Blend 24/4/2017" type="pdf"/>
                                    </ul>
                                </div>
                            </section>
                        </div>

                        <div className="card card-course-files">
                            <section>
                                <a href="#" onClick={this._toggleDiv}>
                                    <h3>
                                        Richtlijnen
                                        <img src={require(`../../assets/Glyph/Dark/${icon}`)} alt="" />
                                    </h3>
                                </a>
                                <div className="files">
                                    <ul>
                                        <File title="Richtlijnen bachelorproef" type="pdf"/>
                                    </ul>
                                </div>
                            </section>
                        </div>

                        <div className="card card-course-files">
                            <section>
                                <a href="#" onClick={this._toggleDiv}>
                                    <h3>
                                        Bronmateriaal
                                        <img src={require(`../../assets/Glyph/Dark/${icon}`)} alt="" />
                                    </h3>
                                </a>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}