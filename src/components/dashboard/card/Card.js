import React, { Component } from 'react';
import CardHeader from '../comp/CardHeader';

export default class Card extends Component {
    render() {
        const { title, src, more } = this.props;

        return(
            <div className="col-md-4 col-sm-12">
                <div className="card2 card2-dashboard">
                    <CardHeader title={title} src={src} more={more}/>

                    <div className="card-body">
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
}