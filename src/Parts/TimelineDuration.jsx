import React, { PureComponent } from 'react';

class TimelineDuration extends PureComponent {
    render() {
        return (<div className="timeline-duration">{this.props.part.content}</div>);
    }
}
export default TimelineDuration;