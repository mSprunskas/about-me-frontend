import React, { PureComponent } from 'react';

class TimelineWorkplacePosition extends PureComponent {
    render() {
        return (<div className="timeline-workplace-position h4">{this.props.part.content}</div>);
    }
}

export default TimelineWorkplacePosition;
