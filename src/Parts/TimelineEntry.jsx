import React, { PureComponent } from 'react';

import Children from './Children';

class TimelineEntry extends PureComponent {
    render() {
        return (
            <div className="timeline-entry">
                <i className="fa fa-circle timeline-point" />
                <Children children={this.props.children} all={this.props.all} />
            </div>
        );
    }
}

export default TimelineEntry;