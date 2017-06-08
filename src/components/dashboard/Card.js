import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Card extends Component {
    render() {
        const { id, title, src, more, editable } = this.props;
        let moreLink;

        if(more){
            moreLink = (
                <Link to={more}>Bekijk meer</Link>
            );
        } else {moreLink = null}

        if(editable){
            return(
                <div className="col-md-4 col-sm-12">
                    <div className="card card-dashboard shake">
                        <a href="#" className="delete"><img src={require(`../../assets/Glyph/Dark/Cancel.svg`)} alt={title}/></a>
                        <div className="card-header">
                            <img src={require(`../../assets/Glyph/Dark/${src}`)} alt={title}/>
                            <h3>{title}</h3>
                            {moreLink}
                        </div>

                        <div className="card-body" id={id}>
                            {this.props.children}
                        </div>
                    </div>
                </div>
            );
        } else{
            return(
                <div className="col-md-4 col-sm-12">
                    <div className="card card-dashboard">
                        <div className="card-header">
                            <img src={require(`../../assets/Glyph/Dark/${src}`)} alt={title}/>
                            <h3>{title}</h3>
                            {moreLink}
                        </div>

                        <div className="card-body" id={id}>
                            {this.props.children}
                        </div>
                    </div>
                </div>
            );
        }


    }
}