import React, { PureComponent } from 'react';

import Children from './Children';

class Timeline extends PureComponent {
    render() {
        return (
            <div className="timeline-container">
                <div className="timeline-content">
                    <Children children={this.props.children} all={this.props.all} />
                </div>
            </div>
        );
    }
}

export default Timeline;