import React, { Component } from 'react';
import _ from 'lodash';
import Group from "../components/CardGroup";

class Groepen extends Component {
    render() {
        const GroupComponents = _.map(this.props.groups, (group, i) => {
            if(group.group === "2016/2017") {
                return <Group key={i} i={i} group={group}   {...this.props}/>;
            }
        });


        return (
            <div id="grid" className="row">
                {GroupComponents}
            </div>
        );
    }
}

export default Groepen;