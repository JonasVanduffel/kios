import React, { Component } from 'react';


class CursusDetails extends Component {
    render() {
        console.log(this.props);
        return (
            <div id="grid" className="row js-grid">
                {this.props.params.cursusdetail}

            </div>
        );
    }
}

export default CursusDetails;