import React, { Component } from 'react';
import $ from 'jquery';


export default class CursusDocumenten extends Component {
    constructor(props) {
        super(props);
        this._toggleDiv = this._toggleDiv.bind(this)
    }

    _toggleDiv() {
        var content = $(this.refs['toggle-div']);
        console.log(content);
        content.slideToggle();
    }

    render() {
        // console.log(this.props);

        return (
            <div>
                <div id="action-button" className="no-mobile">
                    <a href="" className="btn btn-primary">Download alle bestanden</a>
                </div>

                <div className="row">
                    <div className="col-md-12 col-sm-12">
                        <div className="card card-course-files">
                            <section>
                                <h3>
                                    <a href="#" onClick={this._toggleDiv}>1. Introles - Dat is design + ID onderzoek</a>
                                    <img src={require('../../assets/Glyph/Dark/Download.svg')} alt="" />
                                </h3>
                                <div className="files" ref="toggle-div">
                                    <ul>
                                        <li>
                                            <i className="fa fa-file-pdf-o" aria-hidden="true"> </i>
                                            <a href="">0_Intro_Interaction Design Theory.pptx (4,119 MB)</a>
                                        </li>
                                        <li>
                                            <i className="fa fa-file-word-o" aria-hidden="true"> </i>
                                            <a href="">Bestand 1_ID onderzoeksmethoden en-proces.pptx (4,119 MB)</a>
                                        </li>
                                    </ul>
                                </div>
                            </section>
                        </div>
                        <div className="card card-course-files">
                            <section>
                                <h3>
                                    <a href="#" onClick={this._toggleDiv}>2 en 3. Designen in een maatschappelijke context: context mapping</a>
                                    <img src={require('../../assets/Glyph/Dark/Download.svg')} alt="" />
                                </h3>
                                <div className="files">
                                    <ul>
                                        <li>
                                            <i className="fa fa-file-pdf-o" aria-hidden="true"> </i>
                                            <a href="">3_Contextmapping.pptx (12,875 MB)</a>
                                        </li>
                                        <li>
                                            <i className="fa fa-file-word-o" aria-hidden="true"> </i>
                                            <a href="">2_Experience_Context cirkels.pptx (4,701 MB)</a>
                                        </li>
                                    </ul>
                                </div>
                            </section>
                        </div>
                        <div className="card card-course-files">
                            <section>
                                <h3>
                                    <a href="#" onClick={this._toggleDiv}>4. User Centered Design: Persona</a>
                                    <img src={require('../../assets/Glyph/Dark/Download.svg')} alt="" />
                                </h3>
                                <div className="files">
                                    <ul>
                                        <li>
                                            <i className="fa fa-file-pdf-o" aria-hidden="true"> </i>
                                            <a href="">4_Persona_empathy map.pptx (3,674 MB)</a>
                                        </li>
                                    </ul>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}