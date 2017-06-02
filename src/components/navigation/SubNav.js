import React, { Component } from 'react';
import Link from './LinkSub';


export default class SubNav extends Component {
    render() {
        const { id, title, name } = this.props;
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

        switch(title){
            case "Dashboard" : {
                return (
                    <div id="welcome">
                        <h3 id="welcome-text">{greeting}, {name}!</h3>
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
                            <Link url={`/cursussen/algemeen`} title="Alle projecten"/>
                            <Link url={`/cursussen/`} title="Mijn projecten"/>
                        </ul>
                    </nav>
                )
            }

            case "Groepen" : {
                return (
                    <nav>
                        <ul>
                            <Link url={`/cursussen/algemeen`} title="Algemeen"/>
                            <Link url={`/cursussen/`} title="Academiejaar 2016-2017"/>
                            <Link url={`/cursussen/${id}/opdrachten`} title="Academiejaar 2015-2016"/>
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