import React, { PureComponent } from 'react';

import Children from './Children';

class TimelineWorkplace extends PureComponent {
    render() {
        return (
            <div className="timeline-workplace">
                <Children children={this.props.children} all={this.props.all} />
            </div>
        );
    }
}

export default TimelineWorkplace;
