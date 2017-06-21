import React from 'react';
import { Link } from 'react-router';

const Announcements = React.createClass({

    readAnnouncements(announcement, i){
        if(announcement.seen){
            if(announcement.description.length >= 256){
                return(
                    <div className="col-md-12 col-sm-12" key={i}>
                        <div className="card card-message">
                            <div className="avatar">
                                <img src={require('../assets/avatar-ruben.jpg')} alt="Lien" />
                            </div>

                            <div className="content">
                                <h3>{announcement.title}</h3>
                                <span className="date">{announcement.date} om {announcement.time} door {announcement.docent}</span>
                                <p>
                                    {announcement.description.substring(0, 256) + '...'}
                                </p>
                                <Link to=" ">Lees meer</Link>
                            </div>
                        </div>
                    </div>
                )
            } else{
                return(
                    <div className="col-md-12 col-sm-12" key={i}>
                        <div className="card card-message">
                            <div className="avatar">
                                <img src={require('../assets/avatar-ruben.jpg')} alt="Lien" />
                            </div>

                            <div className="content">
                                <h3>{announcement.title}</h3>
                                <span className="date">{announcement.date} om {announcement.time} door {announcement.docent}</span>
                                <p>
                                    {announcement.description}
                                </p>
                            </div>
                        </div>
                    </div>
                )
            }
        }

    },
    unreadAnnouncements(announcement, i){
        if(!announcement.seen){
            if(announcement.description.length >= 256){
                return(
                    <div className="col-md-12 col-sm-12" key={i}>
                        <div className="card card-message">
                            <div className="avatar">
                                <img src={require('../assets/avatar-ruben.jpg')} alt="Lien" />
                            </div>

                            <div className="content">
                                <h3>{announcement.title}</h3>
                                <span className="date">{announcement.date} om {announcement.time} door {announcement.docent}</span>
                                <p>
                                    {announcement.description.substring(0, 256) + '...'}
                                </p>
                                <Link to=" ">Lees meer</Link>
                            </div>
                        </div>
                    </div>
                )
            } else{
                return(
                    <div className="col-md-12 col-sm-12" key={i}>
                        <div className="card card-message">
                            <div className="avatar">
                                <img src={require('../assets/avatar-ruben.jpg')} alt="Lien" />
                            </div>

                            <div className="content">
                                <h3>{announcement.title}</h3>
                                <span className="date">{announcement.date} om {announcement.time} door {announcement.docent}</span>
                                <p>
                                    {announcement.description}
                                </p>
                            </div>
                        </div>
                    </div>
                )
            }
        }

    },

    render(){
        const { seen } = this.props;

        if(seen === false){
            return(
                <div className="row">
                    {this.props.courseAnnouncements.map(this.unreadAnnouncements)}
                </div>
            )

        } else if(seen === true){
            return(
                <div className="row">
                    {this.props.courseAnnouncements.map(this.readAnnouncements)}
                </div>
            )
        }
    }

});

export default Announcements;