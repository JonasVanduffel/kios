import React, { Component } from 'react';
import Link from './LinkSub';
import * as firebase from 'firebase';


export default class SubNav extends Component {
    render() {
        let user = firebase.auth().currentUser;

        const { id, title, cursus, groep } = this.props;
        const d = new Date();
        const n = d.getHours();

        let greeting = "Goededag";

        if (n >= "5" && n < "11"){
            greeting = "Goedemorgen";
        } else if (n >= "11" && n < "16"){
            greeting = "Goedemiddag";
        } else if(n >= "16" && n < "24"){
            greeting = "Goedenavond";
        } else if(n >= "24" && n < "5"){
            greeting = "Goedenacht";
        }

        if(groep){
            return (
                <nav>
                    <ul>
                        <Link url={`/groepen/${id}/nieuwsfeed`} title="Nieuwsfeed"/>
                        <Link url={`/groepen/${id}/media`} title="Media"/>
                        <Link url={`/groepen/${id}/documenten`} title="Documenten"/>
                        <Link url={`/groepen/${id}/personen`} title="Personen"/>
                    </ul>
                </nav>
            )
        }

        switch(title){
            case "Dashboard" : {
                return (
                    <div id="welcome">
                        <h3 id="welcome-text">{greeting}, {user.displayName}!</h3>
                    </div>
                )
            }

            case "Cursussen" : {
                return (
                <nav>
                    <ul>
                        <Link url={`/cursussen/`} title="Academiejaar 2016-2017"/>
                        <Link url={`/cursussen/algemeen`} title="Algemeen"/>
                        <Link url={`/cursussen/archief`} title="Archiefcursussen"/>
                    </ul>
                </nav>
                )
            }

            case "Community / inspiratie" : {
                return (
                    <nav>
                        <ul>
                            <Link url={`/inspiratie`} title="Alle projecten"/>
                            <Link url={`/inspiratie/mijn`} title="Mijn projecten"/>
                        </ul>
                    </nav>
                )
            }

            case "Groepen" : {
                return (
                    <nav>
                        <ul>
                            <Link url={`/groepen/`} title="Academiejaar 2016-2017"/>
                            <Link url={`/groepen/algemeen`} title="Algemeen"/>
                            <Link url={`/groepen/archief`} title="Archief"/>
                        </ul>
                    </nav>
                )
            }

            case "Kalender":
            case "Inbox": {
                return (
                    <nav>
                    </nav>
                )
            }

            case "Account" : {
                return (
                    <nav>
                        <ul>
                            <Link url={`/account`} title="Algemene info"/>
                        </ul>
                    </nav>
                )
            }

            default : {
                return (
                    <nav>
                        <ul>
                            <Link url={`/cursussen/${id}/aankondigingen`} title="Aankondigingen"/>
                            <Link url={`/cursussen/${id}/cursusdocumenten`} title="Cursusdocumenten"/>
                            <Link url={`/cursussen/${id}/opdrachten`} title="Opdrachten"/>
                            <Link url={`/cursussen/${id}/resultaten`} title="Resultaten"/>
                            <Link url={`/cursussen/${id}/cursusleden`} title="Cursusleden"/>
                            <Link url={`/cursussen/${id}/ects`} title="ECTS"/>
                        </ul>
                    </nav>
                )
            }
        }
    }
}