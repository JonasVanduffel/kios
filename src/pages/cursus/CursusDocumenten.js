import React, { Component } from 'react';


export default class CursusDocumenten extends Component {
    render() {
        // console.log(this.props);

        return (
            <div className="row">
                <div className="col-md-12 col-sm-12">
                    <div className="card card-course-files">
                        <h2>1. Introles - Dat is design + ID onderzoek</h2>
                        <div className="files">
                            <ul>
                                <li>
                                    <i className="fa fa-file-pdf-o" aria-hidden="true"></i>
                                    <a href="">0_Intro_Interaction Design Theory.pptx (4,119 MB)</a>
                                </li>
                                <li>
                                    <i className="fa fa-file-word-o" aria-hidden="true"></i>
                                    <a href="">Bestand 1_ID onderzoeksmethoden en-proces.pptx (4,119 MB)</a>
                                </li>
                            </ul>
                        </div>

                        <h2>2 en 3. Designen in een maatschappelijke context: context mapping</h2>
                        <div className="files">
                            <ul>
                                <li>
                                    <i className="fa fa-file-pdf-o" aria-hidden="true"></i>
                                    <a href="">Bestand 3_Contextmapping.pptx (4,119 MB)</a>
                                </li>
                                <li>
                                    <i className="fa fa-file-word-o" aria-hidden="true"></i>
                                    <a href="">Bestand CASElab_Campagne_Creatieve aanpak.ppt (4,119 MB)</a>
                                </li>
                                <li>
                                    <i className="fa fa-file-word-o" aria-hidden="true"></i>
                                    <a href="">Bestand 2_Experience_Context cirkels.pptx (4,119 MB)</a>
                                </li>
                            </ul>
                        </div>

                        <h2>4. User Centered Design: Persona</h2>
                        <div className="files">
                            <ul>
                                <li>
                                    <i className="fa fa-file-pdf-o" aria-hidden="true"></i>
                                    <a href="">Bestand 4_Persona_empathy map.pptx (4,119 MB)</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}