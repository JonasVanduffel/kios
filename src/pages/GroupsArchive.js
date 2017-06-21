import React, { Component } from 'react';
import _ from 'lodash';
import Group from "../components/CardGroup";

class GroepenArchief extends Component {
    render() {
        const GroupComponents = _.map(this.props.groups, (group, i) => {
            if(group.group === "archive") {
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

export default GroepenArchief;