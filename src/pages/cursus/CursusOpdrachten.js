import React, { Component } from 'react';


export default class CursusOpdrachten extends Component {
    render() {
        // console.log(this.props);

        return (
            <div className="row">
                <div className="col-md-12 col-sm-12">
                    <div className="assignment-group">
                        <div className="assignments-header">
                            <h2><i className="fa fa-caret-down" aria-hidden="true"> </i> Taken</h2>
                            <span className="percent">50%</span>
                        </div>

                        <div className="assignments-body">
                            <div className="card card-assignment">
                                <div className="status"><span><i className="fa fa-check-circle" aria-hidden="true"> </i></span></div>
                                <div>
                                    <h3><a href="">Opdracht 1: Persona Profiel</a></h3> Inleverdatum: 1 Maart 2017 | 7/10 punten
                                </div>
                            </div>
                            <div className="card card-assignment">
                                <div className="status"><span><i className="fa fa-times-circle" aria-hidden="true"> </i></span></div>
                                <div>
                                    <h3><a href="">Opdracht 1: Persona Profiel</a></h3> Inleverdatum: 1 Maart 2017 | 7/10 punten
                                </div>
                                <a href="tid-opdracht-1.html"><i className="fa fa-upload" aria-hidden="true"> </i></a>
                            </div>
                        </div>
                    </div>

                    <div className="assignment-group">
                        <div className="assignments-header">
                            <h2><i className="fa fa-caret-down" aria-hidden="true"> </i> Taken</h2>
                            <span className="percent">50%</span>
                        </div>

                        <div className="assignments-body">
                            <div className="card card-assignment">
                                <div className="status"><span><i className="fa fa-times-circle" aria-hidden="true"> </i></span></div>
                                <div>
                                    <h3><a href="">Opdracht 1: Persona Profiel</a></h3> Inleverdatum: 1 Maart 2017 | 7/10 punten
                                </div>
                                <a href=""><i className="fa fa-upload" aria-hidden="true"> </i></a>
                            </div>
                            <div className="card card-assignment">
                                <div className="status"><span><i className="fa fa-times-circle" aria-hidden="true"> </i></span></div>
                                <div>
                                    <h3><a href="">Opdracht 1: Persona Profiel</a></h3> Inleverdatum: 1 Maart 2017 | 7/10 punten
                                </div>
                                <a href=""><i className="fa fa-upload" aria-hidden="true"> </i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}