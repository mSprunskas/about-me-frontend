import React, { PureComponent } from 'react';

class TimelineWorkplaceName extends PureComponent {
    render() {
        return (<div className="timeline-workplace-name h5">{this.props.part.content}</div>);
    }
}

export default TimelineWorkplaceName;
