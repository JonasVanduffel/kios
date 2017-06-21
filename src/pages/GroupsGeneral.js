import React, { Component } from 'react';
import _ from 'lodash';
import Group from "../components/CardGroup";

class GroepenAlgemeen extends Component {
    render() {
        const GroupComponents = _.map(this.props.groups, (group, i) => {
            if(group.group === "general") {
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

export default GroepenAlgemeen;