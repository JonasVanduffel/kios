import React, { Component } from 'react';


export default class CursusECTS extends Component {
    render() {
        // console.log(this.props);

        return (
            <div className="row">
                <object data={require('../../assets/tid_ects.pdf')} type="application/pdf" width="100%" height="1000vh">
                    <p>Alternative text - include a link <a href="assets/tid_ects.pdf">to the PDF!</a></p>
                </object>
            </div>
        );
    }
}