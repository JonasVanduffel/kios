import React, { Component } from 'react';

export default class CursusOpdrachten extends Component {
    render() {
        return (
            <span>Resultaten van {this.props.params.cursus}</span>
        );
    }
}